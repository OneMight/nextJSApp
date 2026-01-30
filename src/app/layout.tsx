"use client";
import { useUserStore } from "@/store/userStore";
import "./globals.css";
import { MobileBar, NavSide } from "@/layouts";
import { useEffect } from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getAuth } = useUserStore();
  useEffect(() => {
    getAuth();
  }, [getAuth]);
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
