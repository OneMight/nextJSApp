import { SectionIcon } from "@/shared/images";
import Image from "next/image";
import { Button } from "./Button";
import { redirect } from "next/navigation";
import { ROUTES } from "@/shared/routes";
export const HomeSection = () => {
  const handleDirectToRecipes = () => {
    redirect(ROUTES.RECIPES);
  };
  return (
    <section className="flex flex-col items-center rounded-2xl bg-card-dark sm:p-8 p-4 mx-4 gap-7 sm:relative sm:items-start">
      <div className="rounded-2xl bg-hover-orange text-orange py-1 px-2 ">
        #1 Cooking Community
      </div>
      <h1 className="text-white sm:text-5xl text-3xl font-bold sm:w-[70%] w-full">
        Master the Art of <span className="text-orange">Home Cooking</span>
      </h1>
      <p className="text-white sm:w-[60%] w-full">
        Discover thousands of tested recipes, learn new techniques, and share
        your culinary masterpieces with the world.
      </p>
      <div className="flex gap-6 items-center flex-col sm:flex-row ">
        <Button
          className="bg-orange font-normal hover:bg-hover-orange-button active:bg-active-button text-white p-6"
          onClick={handleDirectToRecipes}
        >
          Explore Recipes
        </Button>
        <Button className="text-white hover:bg-black p-6 active:bg-active-button">
          Share Your Own
        </Button>
      </div>
      <Image
        className="absolute right-0 top-0 sm:block hidden"
        width={300}
        alt="icon"
        src={SectionIcon}
      />
    </section>
  );
};
