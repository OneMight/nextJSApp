import { RecipesResnose } from "@/types/interfaces";

export const FetchRecipes = async (): Promise<RecipesResnose> => {
  const response = await fetch(
    `https://dummyjson.com/recipes?limit=10&sortBy=name`,
    { cache: "no-store" },
  );
  return await response.json();
};
