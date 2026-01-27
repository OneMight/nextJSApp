"use client";

import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import "./globals.css";
import { MobileBar, NavSide } from "@/layouts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 825px)");

  return (
    <html lang="en">
      <title>CookBook</title>
      <body
        className={`flex min-h-screen h-full ${isDesktop ? "flex-row" : "flex-col-reverse justify-between"}`}
      >
        {isDesktop ? <NavSide /> : <MobileBar />}

        {children}
      </body>
    </html>
  );
}
