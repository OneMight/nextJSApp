"use client";
import { ROUTES } from "@/shared/routes";
import { Button, LinkSide } from "@/components/index";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation";
import {
  ExitIcon,
  HomeIcon,
  LogoIcon,
  ProfileIcon,
  RecipesIcon,
} from "@/shared/images";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
export const NavSide = () => {
  const { user, getAuth, logout } = useUserStore();
  const pathName = usePathname();
  useEffect(() => {
    getAuth();
  }, [getAuth, pathName]);
  const handleLogOut = () => {
    logout();
    redirect(ROUTES.HOME);
  };
  return (
    <aside className="hidden xlg:flex flex-col h-screen justify-between items-center w-60 bg-white-fg sticky left-0 top-0 py-3 px-4">
      <div className="flex flex-col">
        <div className="my-5 text-2xl flex flex-row items-center gap-2">
          <Image
            className="text-white-fg"
            src={LogoIcon}
            width={50}
            height={50}
            alt="Logo"
          />
          <p className="text-2xl text-center text-orange font-bold">CookBook</p>
        </div>
        <nav className="flex flex-col gap-4 mt-3">
          <LinkSide href={ROUTES.HOME}>
            <Image
              className="text-white-fg"
              src={HomeIcon}
              width={20}
              height={20}
              alt="Logo"
            />
            Home
          </LinkSide>
          <LinkSide href={ROUTES.RECIPES}>
            <Image
              src={RecipesIcon}
              width={20}
              height={20}
              alt="recipes-icon"
            />
            Recipes
          </LinkSide>
          {user?.username && (
            <LinkSide href={ROUTES.PROFILE}>
              <Image
                src={ProfileIcon}
                width={20}
                height={20}
                alt="profile-icon"
              />
              Profile
            </LinkSide>
          )}
        </nav>
      </div>
      {!user?.username ? (
        <LinkSide href={ROUTES.LOGIN}>
          <Image src={ExitIcon} width={20} height={20} alt="log-in" />
          Log-in
        </LinkSide>
      ) : (
        <Button
          onClick={handleLogOut}
          className="bg-orange w-full text-white text-md flex flex-row items-center justify-center gap-3 py-5"
        >
          Log out
          <Image src={ExitIcon} width={20} height={20} alt="log-in" />
        </Button>
      )}
    </aside>
  );
};
