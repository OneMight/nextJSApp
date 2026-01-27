"use client";
import Link from "next/link";
import { LinkCompProp } from "@/types/interfaces";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const LinkSide = ({ children, href, isMobile }: LinkCompProp) => {
  const path = usePathname();
  return (
    <Link
      className={cn(
        `
      rounded-xl
       cursor-pointer no-underline flex flex-row
        items-center gap-4 p-2 transition-all hover:bg-hover-orange`,
        isMobile ? "justify-center w-full" : "justify-start w-45",
        path == href ? "text-orange" : " text-black",
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
