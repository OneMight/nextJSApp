"use client";

import { useState } from "react";
import { Button, DialogComponents, DrawerComponents } from "@/components/index";
import { EditProfileForm } from "@/components/index";
import { SettingsIcon } from "@/shared/images";
import Image from "next/image";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { EditProfileProp } from "@/types/interfaces";

export function EditProfileDrawer({ id }: EditProfileProp) {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <DialogComponents.Dialog open={open} onOpenChange={setOpen}>
        <DialogComponents.DialogTrigger asChild>
          <Button
            variant="outline"
            className="hover:bg-orange hover:border-orange hover:text-white-fg text-black-text flex flex-row gap-2 items-center"
          >
            <Image src={SettingsIcon} alt="edit-profile" />
            Edit Profile
          </Button>
        </DialogComponents.DialogTrigger>
        <DialogComponents.DialogContent className="sm:max-w-106.25 bg-white-fg">
          <DialogComponents.DialogHeader>
            <DialogComponents.DialogTitle>
              Edit profile
            </DialogComponents.DialogTitle>
            <DialogComponents.DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogComponents.DialogDescription>
          </DialogComponents.DialogHeader>
          <EditProfileForm userId={id} />
        </DialogComponents.DialogContent>
      </DialogComponents.Dialog>
    );
  }

  return (
    <DrawerComponents.Drawer open={open} onOpenChange={setOpen}>
      <DrawerComponents.DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerComponents.DrawerTrigger>
      <DrawerComponents.DrawerContent className="bg-white-fg">
        <DrawerComponents.DrawerHeader className="text-left">
          <DrawerComponents.DrawerTitle>
            Edit profile
          </DrawerComponents.DrawerTitle>
          <DrawerComponents.DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerComponents.DrawerDescription>
        </DrawerComponents.DrawerHeader>
        <EditProfileForm className="px-4" userId={id} />
        <DrawerComponents.DrawerFooter className="pt-2">
          <DrawerComponents.DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerComponents.DrawerClose>
        </DrawerComponents.DrawerFooter>
      </DrawerComponents.DrawerContent>
    </DrawerComponents.Drawer>
  );
}
