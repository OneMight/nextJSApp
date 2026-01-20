import { FooterCardProps } from "@/types/interfaces";
import { Button } from "./Button";

export const FooterCard = ({
  title,
  buttonText,
  children,
  bgColor,
  borderColor,
  hoverBg,
  color,
}: FooterCardProps) => {
  return (
    <div
      className={`${bgColor} p-4 px-5 rounded-2xl flex flex-col gap-2 min-w-70.5`}
    >
      <p className={`${color} font-bold`}>{title}</p>
      <p className="text-sm text-gray">{children}</p>
      <Button
        className={`w-40 ${borderColor} hover:${hoverBg} hover:text-white`}
        variant={"outline"}
      >
        {buttonText}
      </Button>
    </div>
  );
};
