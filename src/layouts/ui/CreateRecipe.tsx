"use client";

import { useState } from "react";
import {
  Button,
  CreateRecipeForm,
  DialogComponents,
  DrawerComponents,
} from "@/components/index";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

export function CreateRecipe() {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <DialogComponents.Dialog open={open} onOpenChange={setOpen}>
        <DialogComponents.DialogTrigger asChild>
          <Button className="hover:border-orange hover:text-orange border-dashed border-2 text-secondary-text w-67.5 h-89.75 border-secondary-text">
            Create New Recipe
          </Button>
        </DialogComponents.DialogTrigger>
        <DialogComponents.DialogContent className="sm:max-w-200 w-full bg-white-fg">
          <DialogComponents.DialogHeader>
            <DialogComponents.DialogTitle>
              Create Recipe
            </DialogComponents.DialogTitle>
          </DialogComponents.DialogHeader>
          <CreateRecipeForm />
        </DialogComponents.DialogContent>
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
        <DrawerComponents.DrawerHeader className="text-left">
          <DrawerComponents.DrawerTitle>
            Edit profile
          </DrawerComponents.DrawerTitle>
          <DrawerComponents.DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerComponents.DrawerDescription>
        </DrawerComponents.DrawerHeader>
        <CreateRecipeForm />
        <DrawerComponents.DrawerFooter className="pt-2 flex justify-end">
          <DrawerComponents.DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerComponents.DrawerClose>
        </DrawerComponents.DrawerFooter>
      </DrawerComponents.DrawerContent>
    </DrawerComponents.Drawer>
  );
}
