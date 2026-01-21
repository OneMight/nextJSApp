import { Input } from "@/components";
import { NavSide } from "@/layouts";
import { RecipesView } from "@/layouts";
export default function Page() {
  return (
    <main className="flex flex-row w-full">
      <NavSide />
      <div className="flex flex-col justify-start items-start p-2 sm:p-10 gap-10 w-full">
        <div>
          <h1 className="font-bold text-2xl">Explore Recipes</h1>
          <p className="text-secondary-text text-md">
            Find your next favorite meal
          </p>
        </div>
        <div className="flex flex-row w-full gap-10 justify-start">
          <Input
            placeholder="Search recipes..."
            className="h-15 bg-white-fg pl-10 max-w-200"
          />
        </div>
        <RecipesView />
      </div>
    </main>
  );
}
