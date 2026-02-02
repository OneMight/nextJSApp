import { Skeleton } from "@/components";

export default function Loading() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full max-w-325 flex justify-start">
        <Skeleton className="h-10 w-32 rounded-lg" />
      </div>

      <div className="w-full rounded-t-2xl overflow-hidden max-w-325 relative h-72 xlg:h-96 bg-gray-200 animate-pulse">
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <div className="flex gap-3 mb-4">
            <Skeleton className="h-6 w-20 rounded-2xl" />
            <Skeleton className="h-6 w-24 bg-white/20" />
          </div>
          <Skeleton className="h-10 w-3/4 md:w-1/2 bg-white/40" />
        </div>
      </div>

      <div className="flex flex-col bg-white-fg px-2 py-5 bml:p-5 w-full max-w-325 rounded-b-2xl gap-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col bml:flex-row items-start gap-10 bml:items-center">
            <div className="flex gap-3 items-center">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-5 w-16" />
            </div>
            <div className="flex gap-3 items-center">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-5 w-20" />
            </div>
            <div className="flex gap-3 items-center">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-5 w-16" />
            </div>
          </div>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>

        <article className="flex flex-col slt:flex-row items-start justify-between w-full gap-8 pt-5">
          <div className="flex flex-col gap-4 w-full slt:w-1/3">
            <Skeleton className="h-8 w-40 mb-2" />
            <div className="flex flex-col gap-3 bml:pl-5">
              {Array.from({ length: 6 }, (_, index) => (
                <Skeleton key={index} className="h-5 w-full" />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full slt:w-2/3">
            <Skeleton className="h-8 w-40 mb-2" />
            <div className="flex flex-col gap-8 bml:pl-5">
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="flex flex-row gap-3">
                  <Skeleton className="shrink-0 w-10 h-10 rounded-full" />
                  <div className="flex flex-col gap-2 w-full pt-1">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-[90%]" />
                    <Skeleton className="h-5 w-[60%]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
