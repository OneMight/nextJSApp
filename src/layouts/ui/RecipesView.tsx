"use client";
import { RecipeComp, RecipeSkeleton, Tabs } from "@/components";
import { Recipe, useRecipesStore } from "@/store/recipesStore";
import { Difficulty } from "@/types/types";
import { useEffect, useState } from "react";
export const RecipesView = () => {
  const { fetchRecipes, recipes, isLoading } = useRecipesStore();
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [tabValue, setTabValue] = useState<Difficulty>();
  useEffect(() => {
    fetchRecipes(60);
  }, [fetchRecipes]);
  const handleFetchRecipes = () => {
    fetchRecipes(60);
  };
  const handleGetRecipesByDifficulty = (difficult: Difficulty) => {
    setTabValue(difficult);
    setFilteredRecipes(recipes.filter((elem) => elem.difficulty === difficult));
  };

  return (
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
  );
};
