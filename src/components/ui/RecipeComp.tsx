import { cn } from "@/lib/utils";
import { KcalIcon, TimeIcon } from "@/shared/images";
import Image from "next/image";
import { RecipeProps } from "@/types/interfaces";

export const RecipeComp = ({ recipe }: RecipeProps) => {
  return (
    <article className="w-67.5 shrink-0 relative bg-white-fg rounded-2xl hover:drop-shadow-md transition hover:cursor-pointer group">
      <div className="overflow-hidden">
        <Image
          id="image_card"
          className="rounded-t-2xl group-hover:scale-110 transition-transform duration-300"
          width={270}
          height={180}
          src={recipe.image}
          alt={recipe.name}
        />
      </div>

      <p
        className={cn(
          "absolute top-3 left-3 bg-white/30 backdrop-blur-sm p-1 rounded-2xl w-20 text-center text-sm",
          `${
            recipe.difficulty === "Easy"
              ? "text-difficult-easy bg-difficult-easy-bg"
              : recipe.difficulty === "Medium"
              ? "text-difficult-medium bg-difficult-medium-bg"
              : "text-difficult-hard bg-difficult-hard-bg"
          }`
        )}
      >
        {recipe.difficulty}
      </p>

      <div className="flex flex-col gap-2 p-4">
        <h2>{recipe.name}</h2>
        <div className="flex flex-row w-full items-center justify-between">
          <p className="flex flex-row gap-1">
            <Image src={TimeIcon} width={16} alt="time-icon" />
            {recipe.cookTimeMinutes} minutes
          </p>
          <p className="flex flex-row gap-1">
            <Image src={KcalIcon} alt="kcal-icon" />
            {recipe.caloriesPerServing}kcal/several
          </p>
        </div>
      </div>
    </article>
  );
};
