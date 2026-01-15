import { Button, HomeSection } from "@/components";
import { NavSide } from "@/layouts/ui/NavSide";

export default function Home() {
  return (
    <div className="flex flex-row items-start justify-start gap-4">
      <NavSide />
      <div className="flex flex-col justify-center items-center gap-8 w-full p-10">
        <HomeSection />
        <div className="flex flex-row gap-5 w-full">
          <div className="bg-hover-orange w-[50%] p-6 rounded-2xl flex flex-col gap-2">
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
          <div className="bg-card-bg-green w-[50%] p-4 rounded-2xl flex flex-col gap-2">
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
    </div>
  );
}
