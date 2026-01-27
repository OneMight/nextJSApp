"use client";
import { NavSide } from "@/layouts";
import { RecipesView } from "@/layouts";
export default function Page() {
  return (
    <main className="flex flex-row w-full">
      <NavSide />
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start p-2 py-5 sm:p-10 gap-10 w-full">
        <div>
          <h1 className="font-bold text-2xl">Explore Recipes</h1>
          <p className="text-secondary-text text-md">
            Find your next favorite meal
          </p>
        </div>
        <RecipesView />
      </div>
    </main>
  );
}
