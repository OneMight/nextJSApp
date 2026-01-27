import { Difficulty } from "@/types/types";
import { create } from "zustand";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  difficulty: Difficulty;
  cuisine?: string;
  servings: number;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  image: string;
}
export interface RecipesState {
  recipes: Recipe[];
  isLoading: boolean;
  savedRecipes: Recipe[];
  error: unknown | null;
  pages: number;
  userRecipes: Recipe[];
  currentRecipe: Recipe | null;
  setIsLoading: (isLoading: boolean) => void;
  fetchRecipes: (limit?: number, skip?: number) => void;
  findRecipe: (search: string, skip: number) => void;
  saveRecipe: (recipe: Recipe) => void;
  getUserRecipes: () => void;
  createRecipe: (recipe: Recipe) => void;
  getRecipeById: (id: number) => void;
  removeFromSaved: (id: number) => void;
}
export const useRecipesStore = create<RecipesState>()((set) => ({
  recipes: [],
  isLoading: false,
  error: null,
  savedRecipes: [],
  userRecipes: [],
  currentRecipe: null,
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
  getUserRecipes: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch(`https://dummyjson.com/recipes?limit=3`);
      const data = await response.json();
      set({ userRecipes: data.recipes, isLoading: false });
    } catch (error) {
      set({ error });
    }
  },
  saveRecipe: (recipe: Recipe) => {
    set((state) => ({ savedRecipes: [...state.savedRecipes, recipe] }));
  },
  createRecipe: (recipe: Recipe) => {
    set((state) => ({ userRecipes: [...state.userRecipes, recipe] }));
  },
  getRecipeById: async (id: number) => {
    try {
      set({ isLoading: true });
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      set({ isLoading: false, currentRecipe: await response.json() });
    } catch (error) {
      set({ error });
    }
  },
  removeFromSaved: (id) => {
    set((state) => ({
      savedRecipes: state.savedRecipes.filter((elem) => elem.id !== id),
    }));
  },
}));
