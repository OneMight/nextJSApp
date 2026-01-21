import { handleGetToken } from "@/utils/cookiesFunc";
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
}
export const useUserStore = create<UserData>()((set) => ({
  user: null,
  isLoading: false,
  error: null,
  login: async (
    username: string,
    password: string,
  ): Promise<Tokens | undefined> => {
    try {
      set({ isLoading: true });
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
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
      const response = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "omit",
      });
      set({ user: await response.json(), isLoading: false });
    } catch (error) {
      set({ error });
    }
  },
  logout: () => {
    set({ user: null });
  },
}));
