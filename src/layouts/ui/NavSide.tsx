"use client";
import { ROUTES } from "@/shared/routes";
import { Button, LinkSide } from "@/components/index";
import Image from "next/image";
import {
  ExitIcon,
  HomeIcon,
  LogoIcon,
  ProfileIcon,
  RecipesIcon,
} from "@/shared/images";
import { useState } from "react";
export const NavSide = () => {
  const [loggetIn, setLoggedIn] = useState(false);
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
          <LinkSide href={ROUTES.PROFILE}>
            <Image
              src={ProfileIcon}
              width={20}
              height={20}
              alt="profile-icon"
            />
            Profile
          </LinkSide>
        </nav>
      </div>
      {!loggetIn ? (
        <LinkSide href={ROUTES.LOGIN}>
          <Image src={ExitIcon} width={20} height={20} alt="log-in" />
          Log-in
        </LinkSide>
      ) : (
        <Button>Log in</Button>
      )}
    </aside>
  );
};
