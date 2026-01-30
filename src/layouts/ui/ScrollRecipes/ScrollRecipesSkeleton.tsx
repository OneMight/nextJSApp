import { RecipeSkeleton } from "@/components";

export const ScrollRecipesSkeleton = () => {
  return Array.from({ length: 6 }, (_, index) => (
    <RecipeSkeleton key={index} />
  ));
};
