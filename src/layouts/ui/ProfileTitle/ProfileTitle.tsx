"use client";
import { Avatar } from "@/components";
import { LocationIcon } from "@/shared/images";
import { User } from "@/store/userStore";
import Image from "next/image";
import { EditProfileDrawer } from "../EditProfileDrawer";
export interface ProfileTitleProp {
  user: NonNullable<User>;
}
export const ProfileTitle = ({ user }: ProfileTitleProp) => {
  return (
    <article className="max-w-161 flex flex-col sm:flex-row gap-10 p-4 items-center sm:items-start justify-center rounded-2xl bg-white-fg w-full">
      <Avatar.Avatar className="w-30 h-30 border-4 rounded-full shadow-2xl">
        <Avatar.AvatarImage src={user.image}></Avatar.AvatarImage>
      </Avatar.Avatar>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-2xl font-bold">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-secondary-text">@{user.username}</p>
          </div>

          <div className="flex flex-row gap-2 items-center text-secondary-text">
            <Image src={LocationIcon} alt="location-icon" />
            {user.address.country}
          </div>
        </div>

        {user && <EditProfileDrawer id={user.id} />}
      </div>
    </article>
  );
};
