import { ChangeCredintionalsType } from "@/types/types";
import { handleGetToken } from "@/utils/cookiesFunc";
import { deleteCookieToken } from "@/utils/cookiesFunc";

import { create } from "zustand";
type AdressData = {
  country: string;
};
export type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  image: string;
  address: AdressData;
  error?: unknown;
  message?: string;
};
export type Tokens = {
  refreshToken: string;
  accessToken: string;
};
export interface UserData {
  user: User | null;
  isLoading: boolean;
  error: unknown;
  setError: (error: string) => void;
  login: (username: string, password: string) => Promise<Tokens | undefined>;
  getAuth: () => void;
  logout: () => void;
  updateUser: (userProp: ChangeCredintionalsType) => void;
}
export const useUserStore = create<UserData>()((set) => ({
  user: null,
  isLoading: false,
  error: null,
  userRecipes: [],
  login: async (
    username: string,
    password: string,
  ): Promise<Tokens | undefined> => {
    try {
      set({ isLoading: true });
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 60 * 2,
        }),
        credentials: "omit",
      });
      set({ isLoading: false });
      return await response.json();
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
  setError: (error: string) => {
    set({ error });
  },
  getAuth: async () => {
    try {
      set({ isLoading: true });
      const token = handleGetToken("accessToken");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "omit",
      });
      set({ user: await response.json(), isLoading: false });
    } catch (error) {
      deleteCookieToken("accessToken");
      deleteCookieToken("refreshToken");
      set({ error, isLoading: false });
    }
  },
  logout: async () => {
    deleteCookieToken("accessToken");
    deleteCookieToken("refreshToken");
    set({ user: null });
  },
  updateUser: async (userProp: ChangeCredintionalsType) => {
    try {
      set((state) => ({ user: { ...state.user, ...userProp } as User }));
      await fetch(`${process.env.NEXT_PUBLIC_API}users/${userProp.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...userProp,
        }),
      });
    } catch (error) {
      set({ error });
    }
  },
}));
