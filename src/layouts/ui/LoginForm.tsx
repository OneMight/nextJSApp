"use client";

import { Button, Form, Input } from "@/components";
import { WhiteDirectIcon } from "@/shared/images";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useUserStore } from "@/store/userStore";
import { redirect } from "next/navigation";
import { ROUTES } from "@/shared/routes";
export const LoginForm = () => {
  const form = useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, setError } = useUserStore();
  const handleSetUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tokens = await login(username, password);
    if (tokens?.accessToken && tokens?.refreshToken) {
      document.cookie = `accessToken=${tokens.accessToken}`;
      document.cookie = `refreshToken=${tokens.refreshToken}`;
      redirect(ROUTES.HOME);
    } else {
      setError("Something went wrong");
    }
  };

  return (
    <Form.Form {...form}>
      <form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-4">
        <Form.FormField
          control={form.control}
          name="username"
          render={() => (
            <>
              <Form.FormItem>
                <Form.FormLabel htmlFor="username">Username</Form.FormLabel>
                <Form.FormControl>
                  <Input
                    id="username"
                    placeholder="username"
                    type="text"
                    value={username}
                    className="w-full"
                    onChange={handleSetUsername}
                  />
                </Form.FormControl>
                <Form.FormMessage />
              </Form.FormItem>
            </>
          )}
        />
        <Form.FormField
          control={form.control}
          name="password"
          render={() => (
            <Form.FormItem>
              <Form.FormLabel htmlFor="password">Password</Form.FormLabel>
              <Form.FormControl>
                <Input
                  id={"password"}
                  onChange={handleSetPassword}
                  value={password}
                  placeholder="********"
                  autoComplete="false"
                  type="password"
                />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Button className="bg-orange text-white-fg py-6 rounded-2xl hover:bg-hover-orange-button active:bg-active-button active:text-black">
          Sign in
          <Image src={WhiteDirectIcon} alt="direction-icon" />
        </Button>
      </form>
    </Form.Form>
  );
};
