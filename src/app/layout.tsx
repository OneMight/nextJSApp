"use client";

import "./globals.css";
import { MobileBar, NavSide } from "@/layouts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>CookBook</title>
      <body
        className={`flex min-h-screen h-full xlg:flex-row flex-col-reverse justify-between`}
      >
        <NavSide /> <MobileBar />
        {children}
      </body>
    </html>
  );
}
