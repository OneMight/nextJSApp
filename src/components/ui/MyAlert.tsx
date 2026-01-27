"use client";

import { Alert } from "@/components/index";
import { useUserStore } from "@/store/userStore";
import { MyAlertProps } from "@/types/interfaces";
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import { useEffect, useState } from "react";
export function MyAlert({ title, description, variant }: MyAlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { setError } = useUserStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [setError]);

  if (!isVisible) return null;
  return (
    <div className="grid w-full max-w-75 items-start gap-4 absolute top-10">
      <Alert.Alert variant={variant}>
        {variant === "default" ? <CheckCircle2Icon /> : <AlertCircleIcon />}
        <Alert.AlertTitle>{title}</Alert.AlertTitle>
        <Alert.AlertDescription>{description}</Alert.AlertDescription>
      </Alert.Alert>
    </div>
  );
}
