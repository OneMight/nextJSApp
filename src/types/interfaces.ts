import { Recipe } from "@/store/recipesStore";
import { Difficulty } from "./types";
export interface ComponentProps {
  children: React.ReactNode;
}
export interface MyAlertProps {
  title: string;
  description: string;
  variant: "default" | "destructive";
}

export interface LinkCompProp extends ComponentProps {
  href: string;
  isMobile?: boolean;
}

export interface RecipeProps {
  recipe: Recipe;
  isSaved?: boolean;
  backpage?: string;
}
export interface ScrollRecipesProps {
  recipes: Recipe[];
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

export interface RecipesResnose {
  recipes: Recipe[];
}
export interface RecipesInputProps {
  tabValue: Difficulty;
  setSkip?: (value: number) => void;
}
export interface FilteredRecipesProps {
  tabValue: string;
}
export interface RecipeCredentionalsProps {
  currentRecipe: Recipe;
  isSaved: boolean;
  handleSaveRecipe: () => void;
}
