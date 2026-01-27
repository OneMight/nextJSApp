"use client";
import { Button } from "@/components";
import { cn } from "@/lib/utils";
import { useRecipesStore } from "@/store/recipesStore";
import Image from "next/image";
import { use, useEffect } from "react";
import {
  ServingsIcon,
  KcalIcon,
  TimeIcon,
  LikeIcon,
  SuccessIcon,
} from "@/shared/images";
export default function Page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);
  const { getRecipeById, currentRecipe, saveRecipe, savedRecipes } =
    useRecipesStore();
  const isSaved = !savedRecipes.some((item) => item.id === currentRecipe?.id);
  useEffect(() => {
    getRecipeById(id);
  }, [getRecipeById, id, isSaved]);
  const handleSaveRecipe = () => {
    if (isSaved) {
      saveRecipe(currentRecipe!);
    }
  };
  return (
    <main className="flex flex-row">
      <div className="flex flex-col items-center xlg:p-10 w-full justify-start ">
        {currentRecipe && (
          <>
            <div className="w-full xlg:rounded-t-2xl overflow-hidden max-w-325">
              <div className="relative h-64 xlg:h-96 w-full">
                <Image
                  fill
                  src={currentRecipe.image}
                  alt={currentRecipe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white w-full">
                  <div className="flex flex-row items-center gap-3 mb-4">
                    <p
                      className={cn(
                        "bg-white/30 backdrop-blur-sm p-1 rounded-2xl w-20 text-center text-sm",
                        `${
                          currentRecipe.difficulty === "Easy"
                            ? "text-difficult-easy bg-difficult-easy-bg"
                            : currentRecipe.difficulty === "Medium"
                              ? "text-difficult-medium bg-difficult-medium-bg"
                              : "text-difficult-hard bg-difficult-hard-bg"
                        }`,
                      )}
                    >
                      {currentRecipe.difficulty}
                    </p>
                    <span className="text-white/80 text-sm font-medium">
                      from {currentRecipe.cuisine}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    {currentRecipe.name}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white-fg px-2 py-5 bml:p-5 w-full max-w-325 rounded-b-2xl">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col bml:flex-row items-start gap-10 bml:items-center ">
                  <div className="flex flex-row gap-3">
                    <Image src={TimeIcon} alt="cooking time" />
                    {currentRecipe.cookTimeMinutes} min
                  </div>
                  <div className="flex flex-row gap-3">
                    <Image src={ServingsIcon} alt="servings" />
                    <p>{currentRecipe.servings} servings</p>
                  </div>
                  <div className="flex flex-row gap-3">
                    <Image src={KcalIcon} alt="kcal" />
                    <p>{currentRecipe.caloriesPerServing} kcal</p>
                  </div>
                </div>
                <Button
                  className={cn(
                    "rounded-full",
                    isSaved
                      ? "bg-difficult-hard/10 hover:bg-difficult-hard/30"
                      : "bg-difficult-easy/10 hover:bg-difficult-easy/30   ",
                  )}
                  size="icon"
                  onClick={handleSaveRecipe}
                >
                  {isSaved ? (
                    <Image src={LikeIcon} alt="save recipe" />
                  ) : (
                    <Image src={SuccessIcon} alt="Actual saved" />
                  )}
                </Button>
              </div>
              <article className="flex flex-col slt:flex-row items-start justify-between w-full gap-3 pt-5 max-w-325">
                <div className="flex flex-col gap-4 items-start justify-start w-full slt:w-auto">
                  <h2 className="font-bold md:text-4xl text-2xl text-center w-full slt:w-auto slt:text-start">
                    Ingredients
                  </h2>
                  <div className="flex flex-col gap-3 bml:pl-5">
                    {currentRecipe.ingredients.map((item, index) => (
                      <p key={index} className="text-xl">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full slt:w-auto">
                  <h2 className="font-bold md:text-4xl text-2xl text-center w-full slt:w-auto slt:text-start">
                    Instructions
                  </h2>
                  <div className="flex flex-col gap-10 bml:pl-5">
                    {currentRecipe.instructions.map((item, index) => (
                      <div key={index} className="flex flex-row gap-2 ">
                        <p className="rounded-full text-white p-2 bg-orange  bml:text-[16px] text-center  w-10 h-10">
                          {index + 1}
                        </p>
                        <p className="text-xl max-w-60 bml:max-w-100 break-normal">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
