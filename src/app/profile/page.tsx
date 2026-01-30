"use client";
import { ProfileTabs, ProfileTitle, UnauthUser } from "@/layouts";
import { ProfileTitleSkeleton } from "@/layouts/index";
import { useUserStore } from "@/store/userStore";

export default function Profile() {
  const { user, isLoading } = useUserStore();

  if (user?.message) {
    return <UnauthUser />;
  }

  return (
    <div className="w-full flex flex-col gap-10 items-center justify-start p-5">
      {isLoading || user?.message ? (
        <ProfileTitleSkeleton />
      ) : (
        user && <ProfileTitle user={user} />
      )}
      <ProfileTabs />
    </div>
  );
}
