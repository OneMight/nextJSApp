"use client";
import { Input, RecipeComp, RecipeSkeleton, Tabs } from "@/components";
import { cn } from "@/lib/utils";
import { Recipe, useRecipesStore } from "@/store/recipesStore";
import { Difficulty } from "@/types/types";
import { ChangeEvent, useEffect, useState } from "react";
export const RecipesView = () => {
  const { fetchRecipes, recipes, isLoading, findRecipe } = useRecipesStore();
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [tabValue, setTabValue] = useState<Difficulty | null>(null);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);
  useEffect(() => {
    findRecipe(debouncedSearch);
  }, [debouncedSearch, findRecipe]);
  const handleFetchRecipes = () => {
    setTabValue(null);
    fetchRecipes(50);
  };
  const handleGetRecipesByDifficulty = (difficult: Difficulty) => {
    setTabValue(difficult);
    setFilteredRecipes(recipes.filter((elem) => elem.difficulty === difficult));
  };
  const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex flex-col gap-10">
      <Input
        value={search}
        onChange={(e) => handleSetSearch(e)}
        placeholder="Search recipes..."
        className={cn(
          "h-15 bg-white-fg pl-10 max-w-200",
          `${!!tabValue && "hidden"}`,
        )}
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
        <Tabs.TabsContent value="All">
          {!isLoading ? (
            recipes &&
            recipes.map((recipe) => (
              <RecipeComp key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <>
              {Array.from({ length: 8 }, (_, index) => (
                <RecipeSkeleton key={index} />
              ))}
            </>
          )}
        </Tabs.TabsContent>
        <Tabs.TabsContent value={tabValue as string}>
          {filteredRecipes.length !== 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeComp key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>There is no {tabValue} recipes</p>
          )}
        </Tabs.TabsContent>
      </Tabs.Tabs>
    </div>
  );
};
