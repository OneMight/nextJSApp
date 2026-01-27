"use client";

import { Button, LinkSide } from "@/components";
import { ROUTES } from "@/shared/routes";
import { useUserStore } from "@/store/userStore";
import { redirect } from "next/navigation";
import { useEffect } from "react";
export const MobileBar = () => {
  const { user, logout, getAuth } = useUserStore();
  useEffect(() => {
    getAuth();
  }, [getAuth]);
  const handleLogOut = () => {
    logout();
    redirect(ROUTES.HOME);
  };
  return (
    <>
      <div className="h-16"></div>
      <div className="flex flex-row w-full fixed bg-white-fg bottom-0 left-0 py-3 z-10">
        <LinkSide isMobile href={ROUTES.HOME}>
          Home
        </LinkSide>
        <LinkSide isMobile href={ROUTES.RECIPES}>
          Recipes
        </LinkSide>
        {user?.username && (
          <LinkSide isMobile href={ROUTES.PROFILE}>
            Profile
          </LinkSide>
        )}
        {!user?.username ? (
          <LinkSide isMobile href={ROUTES.LOGIN}>
            Log-in
          </LinkSide>
        ) : (
          <Button
            onClick={handleLogOut}
            className="w-auto  text-black text-md gap-3 "
          >
            Log out
          </Button>
        )}
      </div>
    </>
  );
};
