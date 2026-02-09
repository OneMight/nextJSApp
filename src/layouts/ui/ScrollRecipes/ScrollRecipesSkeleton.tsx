import { RecipeSkeleton } from "@/components";

export const ScrollRecipesSkeleton = ({ count = 8 }: { count?: number }) => {
  return Array.from({ length: count }, (_, index) => (
    <RecipeSkeleton key={index} />
  ));
};
