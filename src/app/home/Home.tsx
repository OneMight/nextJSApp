"use client";
import { Button, HomeSection, ScrollRecipes } from "@/components";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecipesStore } from "@/store/recipesStore";
import { useEffect } from "react";
export default function Home() {
  const { fetchRecipes, recipes, isLoading } = useRecipesStore(
    (state) => state
  );

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full p-10 ">
      <HomeSection />
      <ScrollRecipes recipes={recipes} isLoading={isLoading} />

      <div className="flex flex-row gap-5 w-full items-center justify-center">
        <div className="bg-hover-orange px-8 p-4 rounded-2xl flex flex-col gap-2">
          <p className="text-orange font-bold">Quick & Easy</p>
          <p className="text-sm text-gray">
            Under 30 minutes? We got you covered.
          </p>
          <Button
            className="w-40 hover:bg-orange hover:text-white"
            variant={"outline"}
          >
            Browse Quick Meals
          </Button>
        </div>

        <div className="bg-card-bg-green p-4 px-8 rounded-2xl flex flex-col gap-2">
          <p className="text-card-green font-bold">Healthy Living</p>
          <p>Nutritious recipes for a balanced lifestyle.</p>

          <Button
            className="border-card-green hover:bg-card-green hover:text-card-bg-green w-35 text-card-green"
            variant={"outline"}
          >
            Browse Healthy
          </Button>
        </div>
      </div>
    </div>
  );
}
