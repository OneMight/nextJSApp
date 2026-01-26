import { Skeleton } from "@/components/index";

export const ProfileTitleSkeleton = () => {
  return (
    <article className="w-161 flex flex-col sm:flex-row gap-10 p-4 items-center sm:items-start justify-center rounded-2xl bg-white-fg ">
      <Skeleton className="w-30 h-30 rounded-full shadow-sm" />

      <div className="flex flex-row gap-6 w-full sm:w-auto justify-center sm:justify-start">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-8 w-48 rounded-md" />
            <Skeleton className="h-4 w-24 rounded-md" />
          </div>

          <div className="flex flex-row gap-2 items-center mt-1">
            <Skeleton className="w-5 h-5 rounded-full" />
            <Skeleton className="h-4 w-32 rounded-md" />
          </div>
        </div>
        <div>
          <Skeleton className="h-10 w-36 rounded-md" />
        </div>
      </div>
    </article>
  );
};
