import Link from "next/link";
import Image from "next/image";
import { RecipeComp } from "@/components";
import { DirectIcon } from "@/shared/images";
import { ROUTES } from "@/shared/routes";
import { Recipe } from "@/store/recipesStore";
import { Suspense } from "react";
import { ScrollRecipesSkeleton } from "./ScrollRecipesSkeleton";
import { FetchRecipes } from "@/shared/queries";
export const ScrollRecipes = async () => {
  const { recipes } = await FetchRecipes();
  return (
    <article className="min-h-115.5 flex flex-col w-full items-start justify-start gap-2 p-2 px-4 max-w-360">
      <div className="w-full flex flex-col sm:flex-row items-start gap-2 sm:items-center justify-between">
        <div>
          <h2 className="font-bold">Trending Now</h2>
          <p>Most popular recipes this week</p>
        </div>
        <Link
          href={ROUTES.RECIPES}
          className="flex flex-row items-center gap-3"
        >
          View All <Image src={DirectIcon} alt="direct to recipes" />
        </Link>
      </div>

      <div className="overflow-x-auto w-full">
        <div className="flex flex-row gap-4 no-scrollbar py-4 w-100">
          <Suspense fallback={<ScrollRecipesSkeleton />}>
            {recipes.map((recipe: Recipe) => (
              <RecipeComp key={recipe.id} recipe={recipe} />
            ))}
          </Suspense>
        </div>
      </div>
    </article>
  );
};
