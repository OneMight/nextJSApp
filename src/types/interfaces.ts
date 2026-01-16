import { Recipe } from "@/store/recipesStore";

export interface ComponentProps {
  children: React.ReactNode;
}

export interface LinkCompProp {
  href: string;
}

export interface RecipeProps {
  recipe: Recipe;
}
export interface ScrollRecipesProps {
  recipes: Recipe[];
  isLoading: boolean;
}
