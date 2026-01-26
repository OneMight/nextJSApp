"use client";

import { cn } from "@/lib/utils";
import { ProfileFormType } from "@/types/interfaces";
import { ChangeEvent, useState } from "react";
import { Label, Input, Button } from "@/components/index";
import { ChangeCredintionalsType } from "@/types/types";
import { useUserStore } from "@/store/userStore";
export default function EditProfileForm({
  className,
  userId,
}: ProfileFormType) {
  const [userProp, setUserProp] = useState<ChangeCredintionalsType>({
    lastName: "",
    username: "",
    id: userId,
  });
  const { updateUser } = useUserStore();
  const handleSetUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUserProp({ ...userProp, [e.target.id]: e.target.value });
  };
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(userProp);
  };

  return (
    <form
      onSubmit={handleUpdate}
      className={cn("grid items-start gap-6", className)}
    >
      <div className="grid gap-3">
        <Label htmlFor="Lastname">LastName</Label>
        <Input
          type="LastName"
          id="lastName"
          placeholder="Lastname"
          onChange={handleSetUser}
          value={userProp.lastName}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          placeholder="Username"
          value={userProp.username}
          onChange={handleSetUser}
        />
      </div>
      <Button
        type="submit"
        className="bg-orange hover:border-orange hover:text-white-fg text-black-text flex flex-row gap-2 items-center"
      >
        Save changes
      </Button>
    </form>
  );
}
