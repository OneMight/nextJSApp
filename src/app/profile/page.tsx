"use client";
import { NavSide, ProfileTabs, ProfileTitle, UnauthUser } from "@/layouts";
import { ProfileTitleSkeleton } from "@/layouts/index";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";

export default function Profile() {
  const { user, getAuth, isLoading } = useUserStore();
  useEffect(() => {
    getAuth();
  }, [getAuth]);
  if (user?.message) {
    return <UnauthUser />;
  }
  return (
    <main className="flex flex-row">
      <NavSide />
      <div className="w-full flex flex-col gap-10 items-center justify-start p-5">
        {isLoading || user?.message ? (
          <ProfileTitleSkeleton />
        ) : (
          user && <ProfileTitle user={user} />
        )}
        <ProfileTabs />
      </div>
    </main>
  );
}
