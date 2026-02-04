import { Button } from "@/components";
import { ROUTES } from "@/shared/routes";
import { redirect } from "next/navigation";

export const UnauthUser = () => {
  const handleDirect = (route: string) => () => {
    redirect(route);
  };
  return (
    <main className="flex items-center justify-center h-screen ">
      <div className="flex flex-col md:max-w-300 max-w-75 gap-4">
        <h1 className="font-bold text-4xl">Expired session</h1>
        <p className="text-xl">
          You have been logout from your account. Do you want to authorize
          again?
        </p>
        <div className="flex flex-row gap-3">
          <Button
            onClick={handleDirect(ROUTES.LOGIN)}
            className="bg-orange w-35"
          >
            Yes
          </Button>
          <Button
            onClick={handleDirect(ROUTES.HOME)}
            className="w-35"
            variant={"outline"}
          >
            No
          </Button>
        </div>
      </div>
    </main>
  );
};
