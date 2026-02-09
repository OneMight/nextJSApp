import { CreateRecipeForm, DialogComponents } from "@/components";

export const CreateRecipeDesktop = () => {
  return (
    <DialogComponents.DialogContent className="sm:max-w-200 w-full bg-white-fg">
      <DialogComponents.DialogHeader>
        <DialogComponents.DialogTitle>
          Create Recipe
        </DialogComponents.DialogTitle>
      </DialogComponents.DialogHeader>
      <CreateRecipeForm />
    </DialogComponents.DialogContent>
  );
};
