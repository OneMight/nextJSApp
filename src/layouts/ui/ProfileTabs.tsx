"use client";
import { RecipeComp, Tabs } from "@/components";
import { useRecipesStore } from "@/store/recipesStore";
import { ProfileTabsProps } from "@/types/interfaces";
import { CreateRecipe } from "./CreateRecipe";

export const ProfileTabs = ({ userRecipes }: ProfileTabsProps) => {
  const { savedRecipes } = useRecipesStore();
  return (
    <Tabs.Tabs defaultValue="My recipes" className="max-w-300 w-full">
      <Tabs.TabsList>
        <Tabs.TabsTrigger value="My recipes">My recipes</Tabs.TabsTrigger>
        <Tabs.TabsTrigger value="Saved">Saved</Tabs.TabsTrigger>
      </Tabs.TabsList>
      <Tabs.TabsContent value="My recipes">
        {userRecipes} <CreateRecipe />
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
