"use client";
import { RecipeComp, RecipesInput, RecipeSkeleton, Tabs } from "@/components";
import { Recipe, useRecipesStore } from "@/store/recipesStore";
import { Difficulty } from "@/types/types";
import { useEffect, useState } from "react";
import { RecipesPagination } from "./RecipesPagination";
export const RecipesView = () => {
  const { fetchRecipes, recipes, isLoadingRecipes, findRecipe, pages } =
    useRecipesStore();
  const [search, setSearch] = useState<string>("");

  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [skip, setSkip] = useState<number>(0);
  const [tabValue, setTabValue] = useState<Difficulty | null>(null);

  useEffect(() => {
    findRecipe(debouncedSearch, skip);
  }, [debouncedSearch, findRecipe, skip]);
  const handleFetchRecipes = () => {
    setTabValue(null);
    findRecipe(debouncedSearch, skip);
  };
  const handleGetRecipesByDifficulty = async (difficult: Difficulty) => {
    setTabValue(difficult);
    fetchRecipes();
    setFilteredRecipes(recipes.filter((elem) => elem.difficulty === difficult));
  };
  const handleSetPage = (index: number) => {
    setSkip(12 * index);
    setCurrentPage(index);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    setSkip((prev) => prev + 12);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
    setSkip((prev) => prev - 12);
  };
  return (
    <div className="flex flex-col gap-10 justify-between w-full">
      <RecipesInput
        tabValue={tabValue}
        setSkip={setSkip}
        search={search}
        setSearch={setSearch}
        setDebouncedSearch={setDebouncedSearch}
      />
      <Tabs.Tabs
        defaultValue={"All"}
        className="w-full flex flex-col items-center sm:items-start gap-4"
      >
        <Tabs.TabsList>
          <Tabs.TabsTrigger value="All" onClick={handleFetchRecipes}>
            All
          </Tabs.TabsTrigger>
          <Tabs.TabsTrigger
            value="Easy"
            onClick={() => handleGetRecipesByDifficulty("Easy")}
          >
            Easy
          </Tabs.TabsTrigger>
          <Tabs.TabsTrigger
            value="Medium"
            onClick={() => handleGetRecipesByDifficulty("Medium")}
          >
            Medium
          </Tabs.TabsTrigger>
          <Tabs.TabsTrigger
            value="Hard"
            onClick={() => handleGetRecipesByDifficulty("Hard")}
          >
            Hard
          </Tabs.TabsTrigger>
        </Tabs.TabsList>
        <Tabs.TabsContent value={"All"}>
          {!isLoadingRecipes ? (
            recipes.length != 0 || search == "" ? (
              recipes.map((recipe) => (
                <RecipeComp key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <p>Nothing finded</p>
            )
          ) : (
            <>
              {Array.from({ length: 8 }, (_, index) => (
                <RecipeSkeleton key={index} />
              ))}
            </>
          )}
        </Tabs.TabsContent>
        <Tabs.TabsContent value={tabValue as string}>
          {!isLoadingRecipes ? (
            filteredRecipes.length !== 0 ? (
              filteredRecipes.map((recipe) => (
                <RecipeComp key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <p>There is no {tabValue} recipes</p>
            )
          ) : (
            <></>
          )}
        </Tabs.TabsContent>
      </Tabs.Tabs>
      {typeof tabValue != null && recipes.length != 0 && pages > 1 && (
        <RecipesPagination
          pages={pages}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleSetPage={handleSetPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};
