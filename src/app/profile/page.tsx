"use client";
import { NavSide, ProfileTitle } from "@/layouts";
import { ProfileTitleSkeleton } from "@/layouts/index";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";

export default function Profile() {
  const { user, getAuth, isLoading } = useUserStore();

  useEffect(() => {
    getAuth();
  }, [getAuth]);
  return (
    <main className="flex flex-row">
      <NavSide />
      <div className="w-full flex flex-row gap-10 items-start justify-center p-5">
        {isLoading && user?.message ? (
          <ProfileTitleSkeleton />
        ) : (
          user && <ProfileTitle user={user} />
        )}
      </div>
    </main>
  );
}
