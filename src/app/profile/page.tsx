import { UserRecipes } from "@/components";
import { ProfileTabs, ScrollRecipesSkeleton } from "@/layouts";
import { Suspense } from "react";

export default function Profile() {
  return (
    <ProfileTabs
      userRecipes={
        <Suspense fallback={<ScrollRecipesSkeleton />}>
          <UserRecipes />
        </Suspense>
      }
    />
  );
}
