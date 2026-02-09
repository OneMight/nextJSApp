"use server";
import { GetUserRecipes } from "@/shared/queries";
import { RecipeComp } from "./recipeComp/RecipeComp";

export const UserRecipes = async () => {
  const { recipes } = await GetUserRecipes();

  return recipes.map((recipe) => (
    <RecipeComp recipe={recipe} backpage="/profile" key={recipe.id} />
  ));
};
