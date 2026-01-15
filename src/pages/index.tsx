import { NavSide } from "@/layouts/ui/NavSide";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh)] flex flex-col items-center justify-start gap-4 bg-color-bg">
      <NavSide />
    </div>
  );
}
