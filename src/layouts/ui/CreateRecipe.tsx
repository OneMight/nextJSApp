"use client";
import { useState } from "react";
import { Button, DialogComponents, DrawerComponents } from "@/components/index";
import { CreateRecipeDesktop, CreateRecipeMobile } from "@/layouts/index";
import { isDesktopType } from "@/lib/utils";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

export function CreateRecipe() {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 825px)");

  if (isDesktopType(isDesktop)) {
    return (
      <DialogComponents.Dialog open={open} onOpenChange={setOpen}>
        <DialogComponents.DialogTrigger asChild>
          <Button className="hover:border-orange hover:text-orange border-dashed border-2 text-secondary-text w-67.5 h-89.75 border-secondary-text">
            Create New Recipe
          </Button>
        </DialogComponents.DialogTrigger>
        <CreateRecipeDesktop />
      </DialogComponents.Dialog>
    );
  }

  return (
    <DrawerComponents.Drawer open={open} onOpenChange={setOpen}>
      <DrawerComponents.DrawerTrigger asChild>
        <Button className="hover:border-orange hover:text-orange border-dashed border-2 text-secondary-text w-67.5 h-89.75 border-secondary-text">
          Create New Recipe
        </Button>
      </DrawerComponents.DrawerTrigger>
      <DrawerComponents.DrawerContent className="bg-white-fg">
        <CreateRecipeMobile />
        <DrawerComponents.DrawerFooter className="pt-2 flex justify-end ">
          <DrawerComponents.DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerComponents.DrawerClose>
        </DrawerComponents.DrawerFooter>
      </DrawerComponents.DrawerContent>
    </DrawerComponents.Drawer>
  );
}
