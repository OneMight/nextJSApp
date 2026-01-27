import { Recipe } from "@/store/recipesStore";
import { Difficulty } from "./types";

export interface ComponentProps {
  children: React.ReactNode;
}

export interface LinkCompProp extends ComponentProps {
  href: string;
}

export interface RecipeProps {
  recipe: Recipe;
  isSaved?: boolean;
}
export interface ScrollRecipesProps {
  recipes: Recipe[];
  isLoading: boolean;
}
export interface FooterCardProps extends ComponentProps {
  title: string;
  buttonText: string;
  bgColor: string;
  color: string;
  borderColor?: string;
  hoverBg: string;
}
export interface ProfileFormType {
  className?: string;
  userId: number;
}
export interface EditProfileProp {
  id: NonNullable<number>;
}
export interface SelectDifficultProps {
  onValueChange: (value: Difficulty) => void;
  value?: string;
  defaultValue?: string;
}
