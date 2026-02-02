import { Skeleton } from "@/components";

export default function Loading() {
  return (
    <div className="flex flex-col gap-10 justify-between w-full">
      <div className="w-full max-w-200">
        <Skeleton className="h-15 w-full rounded-xl" />
      </div>

      <div className="w-full flex flex-col items-center sm:items-start gap-4">
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          <Skeleton className="h-10 w-16 rounded-md shrink-0" />
          <Skeleton className="h-10 w-16 rounded-md shrink-0" />
          <Skeleton className="h-10 w-20 rounded-md shrink-0" />
          <Skeleton className="h-10 w-16 rounded-md shrink-0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8 w-full mt-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-3 w-full">
              <Skeleton className="h-64 w-full rounded-2xl" />
              <div className="flex flex-col gap-2 px-1">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-16 rounded-full" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <Skeleton className="h-6 w-3/4 mt-1" />
                <div className="flex gap-2 mt-1">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 w-full mt-4">
        <Skeleton className="h-10 w-10 rounded-md" />
        <div className="flex gap-2 sm:flex">
          <Skeleton className="h-10 w-8 rounded-md" />
          <Skeleton className="h-10 w-8 rounded-md" />
          <Skeleton className="h-10 w-8 rounded-md" />
        </div>
        <Skeleton className="h-10 w-10 rounded-md" />
      </div>
    </div>
  );
}
