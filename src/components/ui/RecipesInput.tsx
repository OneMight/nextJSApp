"use client";
import { cn } from "@/lib/utils";
import { Input } from "./Input";
import { Button } from "./Button";
import { CircleXIcon } from "lucide-react";
import { ChangeEvent, useEffect } from "react";
import { RecipesInputProps } from "@/types/interfaces";

export const RecipesInput = ({
  tabValue,
  setSkip,
  search,
  setSearch,
  setDebouncedSearch,
}: RecipesInputProps) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [search, setDebouncedSearch]);
  const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSkip(0);
  };
  return (
    <div
      className={cn(`w-full relative max-w-200`, `${!!tabValue && "hidden"}`)}
    >
      <Input
        value={search}
        onChange={(e) => handleSetSearch(e)}
        placeholder="Search recipes..."
        className={cn("h-15 bg-white-fg pl-10 max-w-200")}
      />

      <Button
        onClick={() => setSearch("")}
        size={"icon"}
        className="absolute top-3 right-2 hover:bg-orange"
      >
        <CircleXIcon />
      </Button>
    </div>
  );
};
