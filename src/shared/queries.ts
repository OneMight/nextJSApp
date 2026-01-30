import { RecipesResnose } from "@/types/interfaces";

export const FetchRecipes = async (): Promise<RecipesResnose> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}recipes?limit=10&sortBy=name`,
    {
      cache: "no-store",
    },
  );
  return await response.json();
};
export const FetchFilteredRecipes = async (): Promise<RecipesResnose> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}recipes?limit=50&sortBy=name`,
    {
      cache: "no-store",
    },
  );
  return await response.json();
};
