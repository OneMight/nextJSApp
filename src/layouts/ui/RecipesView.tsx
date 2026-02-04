"use client";
import { useSearchParams } from "next/navigation";
import { RecipeComp, RecipesInput, RecipeSkeleton, Tabs } from "@/components";
import { useRecipesStore } from "@/store/recipesStore";
import { useEffect, useMemo } from "react";
import { RecipesPagination } from "./RecipesPagination";
import { useUpdateQueryParams } from "@/shared/hooks/useUpdateQueryParams";

export const RecipesView = () => {
  const searchParams = useSearchParams();
  const { updateParams, currentSkip, currentDifficulty } =
    useUpdateQueryParams();
  const currentSearch = searchParams.get("search") || "";
  const currentPage = Math.floor(currentSkip / 12);
  const { recipes, isLoadingRecipes, findRecipe, pages } = useRecipesStore();

  useEffect(() => {
    findRecipe(currentSearch, currentSkip);
  }, [currentSearch, currentSkip, findRecipe]);

  const filteredRecipes = useMemo(() => {
    if (currentDifficulty === "All") {
      return recipes;
    }
    return recipes.filter((recipe) => recipe.difficulty === currentDifficulty);
  }, [recipes, currentDifficulty]);
  const recipeArray = currentDifficulty === "All" ? recipes : filteredRecipes;

  const handleSetPage = (pageNumber: number) => {
    updateParams(currentDifficulty, (pageNumber - 1) * 12);
  };
  const handleNextPage = () => {
    updateParams(currentDifficulty, currentSkip + 12);
  };
  const handlePreviousPage = () => {
    updateParams(currentDifficulty, Math.max(0, currentSkip - 12));
  };

  return (
    <div className="flex flex-col gap-10 justify-between w-full">
      <RecipesInput tabValue={currentDifficulty} />
      <Tabs.Tabs
        value={currentDifficulty}
        onValueChange={(value) => updateParams(value, 0)}
        className="w-full flex flex-col items-center sm:items-start gap-4"
      >
        <Tabs.TabsList>
          <Tabs.TabsTrigger value="All">All</Tabs.TabsTrigger>
          <Tabs.TabsTrigger value="Easy">Easy</Tabs.TabsTrigger>
          <Tabs.TabsTrigger value="Medium">Medium</Tabs.TabsTrigger>
          <Tabs.TabsTrigger value="Hard">Hard</Tabs.TabsTrigger>
        </Tabs.TabsList>

        <Tabs.TabsContent value={currentDifficulty}>
          {!isLoadingRecipes ? (
            recipeArray.length > 0 ? (
              recipeArray.map((recipe) => (
                <RecipeComp key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <p>Nothing found</p>
            )
          ) : (
            Array.from({ length: 8 }).map((_, i) => <RecipeSkeleton key={i} />)
          )}
        </Tabs.TabsContent>
      </Tabs.Tabs>

      {currentDifficulty === "All" && pages > 1 && recipes.length > 0 && (
        <RecipesPagination
          pages={pages}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleSetPage={handleSetPage}
          currentPage={currentPage + 1}
        />
      )}
    </div>
  );
};
