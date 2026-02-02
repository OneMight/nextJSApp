import { RecipesView } from "@/layouts";
import { Suspense } from "react";
import Loading from "./loading";
export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start p-2 py-5 sm:p-10 gap-10 w-full">
      <div>
        <h1 className="font-bold text-2xl">Explore Recipes</h1>
        <p className="text-secondary-text text-md">
          Find your next favorite meal
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <RecipesView />
      </Suspense>
    </div>
  );
}
