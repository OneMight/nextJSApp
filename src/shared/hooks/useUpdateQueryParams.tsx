"use client";

import { Difficulty } from "@/types/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useUpdateQueryParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentSkip = Number(searchParams.get("skip")) || 0;
  const currentDifficulty =
    (searchParams.get("difficulty") as Difficulty) || "All";
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const updateParams = (newDifficulty: string, newSkip: number) => {
    if (newDifficulty !== "All") {
      params.set("difficulty", newDifficulty);
    } else {
      params.delete("difficulty");
    }
    if (newSkip > 0) {
      params.set("skip", newSkip.toString());
    } else {
      params.delete("skip");
    }
    router.push(`${pathname}?${params.toString()}`);
  };
  return { currentDifficulty, currentSkip, updateParams };
};
