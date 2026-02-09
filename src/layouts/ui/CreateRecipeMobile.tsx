import { CreateRecipeForm, DrawerComponents } from "@/components";

export const CreateRecipeMobile = () => {
  return (
    <>
      <DrawerComponents.DrawerHeader className="text-left">
        <DrawerComponents.DrawerTitle>
          Edit profile
        </DrawerComponents.DrawerTitle>
        <DrawerComponents.DrawerDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DrawerComponents.DrawerDescription>
      </DrawerComponents.DrawerHeader>
      <CreateRecipeForm />
    </>
  );
};
