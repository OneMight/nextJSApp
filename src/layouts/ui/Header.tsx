import Link from "next/link";
export const Header = () => {
  return (
    <header className="w-full flex flex-row items-center justify-between py-4 px-2 ">
      <h1>Welcome to site</h1>
      <nav className="flex flex-row items-center gap-4">
        <Link href={"/"}>Home</Link>
        <Link href="profile">Profile page</Link>
      </nav>
    </header>
  );
};
