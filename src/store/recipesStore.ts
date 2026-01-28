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
  isLoadingRecipes: boolean;
  savedRecipes: Recipe[];
  allRecipes: Recipe[];
  error: unknown | null;
  pages: number;
  userRecipes: Recipe[];
  currentRecipe: Recipe | null;
  setisLoadingRecipes: (isLoadingRecipes: boolean) => void;
  fetchRecipes: (limit?: number, skip?: number) => void;
  fetchAllRecipes: (limit?: number) => void;
  findRecipe: (search: string, skip: number) => void;
  saveRecipe: (recipe: Recipe) => void;
  getUserRecipes: () => void;
  createRecipe: (recipe: Recipe) => void;
  getRecipeById: (id: number) => void;
  removeFromSaved: (id: number) => void;
}
export const useRecipesStore = create<RecipesState>()((set) => ({
  recipes: [],
  isLoadingRecipes: false,
  allRecipes: [],
  error: null,
  savedRecipes: [],
  userRecipes: [],
  currentRecipe: null,
  pages: 0,
  setisLoadingRecipes: (isLoadingRecipes: boolean) => set({ isLoadingRecipes }),
  fetchRecipes: async (limit: number = 0, skip: number = 0) => {
    set({ isLoadingRecipes: true });
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}&sortBy=name`,
      );
      const data = await response.json();
      set({
        recipes: data.recipes,
        isLoadingRecipes: false,
        pages: Math.round(data.total / limit),
      });
    } catch (error) {
      set({ error, isLoadingRecipes: false });
    }
  },
  findRecipe: async (search: string, skip: number, limit = 12) => {
    try {
      set({ isLoadingRecipes: true });
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${search}&skip=${skip}&limit=${limit}`,
      );
      const data = await response.json();
      set({
        recipes: data.recipes,
        isLoadingRecipes: false,
        pages: Math.round(data.total / limit),
      });
    } catch (error) {
      set({ error, isLoadingRecipes: false });
    }
  },
  getUserRecipes: async () => {
    try {
      set({ isLoadingRecipes: true });
      const response = await fetch(`https://dummyjson.com/recipes?limit=3`);
      const data = await response.json();
      set({ userRecipes: data.recipes, isLoadingRecipes: false });
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
      set({ isLoadingRecipes: true });
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      set({ isLoadingRecipes: false, currentRecipe: await response.json() });
    } catch (error) {
      set({ error });
    }
  },
  removeFromSaved: (id) => {
    set((state) => ({
      savedRecipes: state.savedRecipes.filter((elem) => elem.id !== id),
    }));
  },
  fetchAllRecipes: async (limit = 50) => {
    set({ isLoadingRecipes: true });
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=${limit}`,
      );
      const data = await response.json();
      set({
        allRecipes: data.recipes,
        isLoadingRecipes: false,
      });
    } catch (error) {
      set({ error, isLoadingRecipes: false });
    }
  },
}));
