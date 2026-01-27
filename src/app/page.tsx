"use client";

import { FooterCard, HomeSection } from "@/components";
import { ScrollRecipes } from "@/layouts/index";
import { useRecipesStore } from "@/store/recipesStore";
import { useEffect } from "react";

export default function Page() {
  const { fetchRecipes, recipes, isLoadingRecipes } = useRecipesStore();

  useEffect(() => {
    fetchRecipes(10);
  }, [fetchRecipes]);

  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full py-4 px-0">
      <HomeSection />
      <ScrollRecipes recipes={recipes} isLoading={isLoadingRecipes} />
      <div className="flex flex-col gap-3 w-full items-center justify-center sm:flex-row px-3">
        <FooterCard
          title="Quick & Easy"
          buttonText="Browse Quick Meals"
          bgColor="bg-hover-orange"
          color="text-orange"
          hoverBg="bg-orange"
        >
          Under 30 minutes? We got you covered.
        </FooterCard>
        <FooterCard
          title="Healthy Living"
          buttonText="Browse Healthy"
          bgColor="bg-card-bg-green"
          borderColor="border-card-green"
          color="text-card-green"
          hoverBg="bg-card-green"
        >
          Recipes for a balanced lifestyle.
        </FooterCard>
      </div>
    </div>
  );
}
