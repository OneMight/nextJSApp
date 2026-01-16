import { SectionIcon } from "@/shared/images";
import Image from "next/image";
import { Button } from "./Button";

export const HomeSection = () => {
  return (
    <section className="flex flex-col items-start rounded-2xl bg-card-dark p-8 gap-7 relative">
      <div className="rounded-2xl bg-hover-orange text-orange py-1 px-2 ">
        #1 Cooking Community
      </div>
      <h1 className="text-white text-5xl font-bold w-[70%]">
        Master the Art of <span className="text-orange">Home Cooking</span>
      </h1>
      <p className="text-white w-[60%]">
        Discover thousands of tested recipes, learn new techniques, and share
        your culinary masterpieces with the world.
      </p>
      <div className="flex flex-row gap-6 items-center">
        <Button className="bg-orange font-normal hover:bg-hover-orange-button active:bg-active-button text-white p-6">
          Explore Recipes
        </Button>
        <Button className="text-white hover:bg-black p-6 active:bg-active-button">
          Share Your Own
        </Button>
      </div>
      <Image
        className="absolute right-0 top-0"
        width={300}
        alt="icon"
        src={SectionIcon}
      />
    </section>
  );
};
