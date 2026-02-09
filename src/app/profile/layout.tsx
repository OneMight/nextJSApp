"use client";
import { ProfileTitle, ProfileTitleSkeleton, UnauthUser } from "@/layouts";
import { useUserStore } from "@/store/userStore";
import { ComponentProps } from "@/types/interfaces";

export default function ProfileLayout({ children }: ComponentProps) {
  const { user, isLoading } = useUserStore();

  if (user?.message) {
    return <UnauthUser />;
  }

  return (
    <div className="w-full flex flex-col gap-10 items-center justify-start p-5">
      {isLoading ? (
        <ProfileTitleSkeleton />
      ) : (
        user && <ProfileTitle user={user} />
      )}
      {children}
    </div>
  );
}
