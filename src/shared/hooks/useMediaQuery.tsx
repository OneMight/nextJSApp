"use client";

import { DeviceType } from "@/types/types";
import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string): DeviceType {
  const subscribe = (callback: () => void) => {
    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener("change", callback);
    return () => {
      matchMedia.removeEventListener("change", callback);
    };
  };
  const getSnapshot = () => {
    return (
      window.matchMedia(query).matches ? "desktop" : "mobile"
    ) as DeviceType;
  };
  const getServerSnapshot = () => {
    return "mobile" as DeviceType;
  };
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
