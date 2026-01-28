import { cn } from "@/lib/utils";
import { KcalIcon, TimeIcon } from "@/shared/images";
import Image from "next/image";
import { RecipeProps } from "@/types/interfaces";
import Link from "next/link";
import { ROUTES } from "@/shared/routes";
import { Button } from "../Button";
import { Trash2 } from "lucide-react";
import { MouseEvent } from "react";
import { useRecipesStore } from "@/store/recipesStore";

export const RecipeComp = ({ recipe, isSaved }: RecipeProps) => {
  const { removeFromSaved } = useRecipesStore();
  const handleDeleteFromSaved = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromSaved(recipe.id);
  };
  return (
    <Link
      href={`${ROUTES.RECIPES}/${recipe.id}`}
      className="w-67.5 shrink-0 relative bg-white-fg rounded-2xl hover:drop-shadow-md transition hover:cursor-pointer group"
    >
      <div className="overflow-hidden">
        <Image
          className="rounded-t-2xl w-auto group-hover:scale-110 transition-transform duration-300"
          width={270}
          height={270}
          src={recipe.image}
          alt={recipe.name}
        />
      </div>
      {isSaved && (
        <Button
          size="icon"
          className="absolute top-3 right-3 bg-white z-10 hover:bg-orange"
          onClick={handleDeleteFromSaved}
        >
          <Trash2 className="w-4 h-4  text-gray-600 hover:text-difficult-hard" />
        </Button>
      )}
      <p
        className={cn(
          "absolute top-3 left-3 bg-white/30 backdrop-blur-sm p-1 rounded-2xl w-20 text-center text-sm",
          `${
            recipe.difficulty === "Easy"
              ? "text-difficult-easy bg-difficult-easy-bg"
              : recipe.difficulty === "Medium"
                ? "text-difficult-medium bg-difficult-medium-bg"
                : "text-difficult-hard bg-difficult-hard-bg"
          }`,
        )}
      >
        {recipe.difficulty}
      </p>

      <div className="flex flex-col gap-2 p-4">
        <h2>{recipe.name}</h2>
        <div className="flex flex-row w-full items-center justify-between">
          <p className="flex flex-row items-center gap-1">
            <Image className="w-4 h-4" src={TimeIcon} alt="cook time" />
            {recipe.cookTimeMinutes} minutes
          </p>
          <p className="flex flex-row gap-1 items-center">
            <Image src={KcalIcon} className="w-4 h-4" alt="kcal" />
            {recipe.caloriesPerServing}kcal/several
          </p>
        </div>
      </div>
    </Link>
  );
};
