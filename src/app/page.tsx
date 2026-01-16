import { NavSide } from "@/layouts";
import Home from "@/app/home/Home";

export default function Page() {
  return (
    <div className="flex flex-row">
      <NavSide />
      <Home />
    </div>
  );
}
