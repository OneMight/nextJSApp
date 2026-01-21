import { Skeleton } from "@/components/ui/Skeleton";

export const RecipeSkeleton = () => {
  return (
    <article className="w-67.5 shrink-0 relative bg-white-fg rounded-2xl overflow-hidden">
      <Skeleton className="w-full h-45 rounded-t-2xl rounded-b-none bg-slate-200/80" />

      <Skeleton className="absolute top-3 left-3 w-20 h-6 rounded-2xl bg-slate-200/80" />
      <div className="flex flex-col gap-2 p-4">
        <Skeleton className="h-6 w-3/4 rounded-md bg-slate-200/80" />
        <div className="flex flex-row w-full items-center justify-between mt-1">
          <div className="flex flex-row gap-2 items-center">
            <Skeleton className="w-4 h-4 rounded-full bg-slate-200/80" />
            <Skeleton className="w-12 h-3 bg-slate-200/80" />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <Skeleton className="w-4 h-4 rounded-full bg-slate-200/80" />
            <Skeleton className="w-16 h-3 bg-slate-200/80" />
          </div>
        </div>
      </div>
    </article>
  );
};
