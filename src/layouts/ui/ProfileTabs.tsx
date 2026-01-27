"use client";

import { RecipeComp, RecipeSkeleton, Tabs } from "@/components";
import { useRecipesStore } from "@/store/recipesStore";
import { useEffect } from "react";
import { CreateRecipe } from "./CreateRecipe";

export const ProfileTabs = () => {
  const { getUserRecipes, userRecipes, isLoadingRecipes, savedRecipes } =
    useRecipesStore();

  useEffect(() => {
    getUserRecipes();
  }, [getUserRecipes]);
  return (
    <Tabs.Tabs defaultValue="My recipes" className="max-w-300 w-full">
      <Tabs.TabsList>
        <Tabs.TabsTrigger value="My recipes">My recipes</Tabs.TabsTrigger>
        <Tabs.TabsTrigger value="Saved">Saved</Tabs.TabsTrigger>
      </Tabs.TabsList>
      <Tabs.TabsContent value="My recipes">
        {!isLoadingRecipes ? (
          <>
            {userRecipes.map((recipe, index) => (
              <RecipeComp recipe={recipe} key={index} />
            ))}
            <CreateRecipe />
          </>
        ) : (
          Array.from({ length: 6 }, (_, index) => (
            <RecipeSkeleton key={index} />
          ))
        )}
      </Tabs.TabsContent>
      <Tabs.TabsContent
        className={savedRecipes.length === 0 ? "flex" : ""}
        value="Saved"
      >
        {savedRecipes.length !== 0 ? (
          savedRecipes.map((recipe) => (
            <RecipeComp recipe={recipe} key={recipe.id} isSaved />
          ))
        ) : (
          <p className="font-bold text-3xl w-full text-center">
            You didn&apos;t save any recipe
          </p>
        )}
      </Tabs.TabsContent>
    </Tabs.Tabs>
  );
};
