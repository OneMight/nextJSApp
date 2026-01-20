import { LoginForm } from "@/components";
import { NavSide } from "@/layouts";
import { RecipesIcon } from "@/shared/images";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex flex-row xlg:justify-center xlg:items-center h-full">
      <NavSide />
      <div className="flex flex-col items-center justify-center w-full drop-shadow-xl mx-3">
        <div className="bg-orange/5 rounded-t-2xl flex flex-col items-center justify-center gap-4 min-w-75 w-full max-w-100 p-5">
          <div className="bg-orange rounded-2xl size-16 flex items-center justify-center shadow-2xl">
            <Image width={40} src={RecipesIcon} alt="logo-icon" />
          </div>
          <h1 className="font-bold text-xl">Welcome Back</h1>
          <p className="text-lg text-secondary-text text-center">
            Sign in to continue your culinary journey
          </p>
        </div>
        <div className="flex flex-col gap-3 py-4 bg-white-fg p-5 min-w-75 w-full max-w-100 rounded-b-2xl ">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
