"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { RecipeComp, RecipesInput, RecipeSkeleton, Tabs } from "@/components";
import { useRecipesStore } from "@/store/recipesStore";
import { Difficulty } from "@/types/types";
import { useEffect, useState, useMemo } from "react";
import { RecipesPagination } from "./RecipesPagination";

export const RecipesView = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentDifficulty =
    (searchParams.get("difficulty") as Difficulty) || "All";
  const currentSkip = Number(searchParams.get("skip")) || 0;
  const currentSearch = searchParams.get("search") || "";
  const currentPage = Math.floor(currentSkip / 12);
  const { recipes, isLoadingRecipes, findRecipe, pages } = useRecipesStore();
  const [search, setSearch] = useState<string>(currentSearch);
  const [debouncedSearch, setDebouncedSearch] = useState<string>(currentSearch);
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearch) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }
    params.delete("skip");
    router.replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearch]);

  useEffect(() => {
    findRecipe(currentSearch, currentSkip);
  }, [currentSearch, currentSkip, findRecipe]);

  const updateUrl = (newDifficulty: string, newSkip: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newDifficulty && newDifficulty !== "All") {
      params.set("difficulty", newDifficulty);
    } else {
      params.delete("difficulty");
    }
    if (newSkip > 0) {
      params.set("skip", newSkip.toString());
    } else {
      params.delete("skip");
    }
    router.push(`${pathname}?${params.toString()}`);
  };
  const filteredRecipes = useMemo(() => {
    if (currentDifficulty === "All") return recipes;
    return recipes.filter((recipe) => recipe.difficulty === currentDifficulty);
  }, [recipes, currentDifficulty]);
  const handleSetPage = (pageNumber: number) => {
    updateUrl(currentDifficulty, (pageNumber - 1) * 12);
  };
  const handleNextPage = () => {
    updateUrl(currentDifficulty, currentSkip + 12);
  };
  const handlePreviousPage = () => {
    updateUrl(currentDifficulty, Math.max(0, currentSkip - 12));
  };

  return (
    <div className="flex flex-col gap-10 justify-between w-full">
      <RecipesInput
        tabValue={currentDifficulty === "All" ? null : currentDifficulty}
        search={search}
        setSearch={setSearch}
        setDebouncedSearch={setDebouncedSearch}
      />
      <Tabs.Tabs
        value={currentDifficulty}
        onValueChange={(value) => updateUrl(value, 0)}
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
            (currentDifficulty === "All" ? recipes : filteredRecipes).length >
            0 ? (
              (currentDifficulty === "All" ? recipes : filteredRecipes).map(
                (recipe) => <RecipeComp key={recipe.id} recipe={recipe} />,
              )
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
