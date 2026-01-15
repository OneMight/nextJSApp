import { HomeSection } from "@/components";
import { NavSide } from "@/layouts/ui/NavSide";

export default function Home() {
  return (
    <div className="flex flex-row items-start justify-start gap-4">
      <NavSide />
      <div className="flex flex-col justify-center items-center w-full p-10">
        <HomeSection />
      </div>
    </div>
  );
}
