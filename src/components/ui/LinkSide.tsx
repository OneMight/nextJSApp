import Link from "next/link";
import { ComponentProps, LinkCompProp } from "@/types/interfaces";

export const LinkSide = ({ children, href }: ComponentProps & LinkCompProp) => {
  return (
    <Link
      className="w-45
      rounded-xl
       cursor-pointer no-underline flex flex-row
        items-center gap-4 p-2 transition-all hover:bg-hover-orange"
      href={href}
    >
      {children}
    </Link>
  );
};
