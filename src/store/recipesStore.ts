import { Difficulty } from "@/types/types";
import { create } from "zustand";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  difficulty: Difficulty;
  cuisine: string;
  servings: number;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  image: string;
}
export interface RecipesState {
  recipes: Recipe[];
  isLoading: boolean;
  error: unknown | null;
  setIsLoading: (isLoading: boolean) => void;
  fetchRecipes: (limit?: number) => void;
}
export const useRecipesStore = create<RecipesState>()((set) => ({
  recipes: [],
  isLoading: false,
  error: null,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  fetchRecipes: async (limit: number = 0) => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=${limit}&sortBy=name`,
      );
      const data = await response.json();
      set({ recipes: data.recipes, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
