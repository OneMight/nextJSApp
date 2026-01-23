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
  pages: number;
  setIsLoading: (isLoading: boolean) => void;
  fetchRecipes: (limit?: number, skip?: number) => void;
  findRecipe: (search: string, skip: number) => void;
}
export const useRecipesStore = create<RecipesState>()((set) => ({
  recipes: [],
  isLoading: false,
  error: null,
  pages: 0,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  fetchRecipes: async (limit: number = 0, skip: number = 0) => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}&sortBy=name`,
      );
      const data = await response.json();
      set({
        recipes: data.recipes,
        isLoading: false,
        pages: Math.round(data.total / limit),
      });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
  findRecipe: async (search: string, skip: number, limit = 12) => {
    try {
      set({ isLoading: true });
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${search}&skip=${skip}&limit=${limit}`,
      );
      const data = await response.json();
      set({
        recipes: data.recipes,
        isLoading: false,
        pages: Math.round(data.total / limit),
      });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
