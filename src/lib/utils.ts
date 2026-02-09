import { DeviceType } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isDesktopType(value: DeviceType): value is "desktop" {
  return value === "desktop";
}
