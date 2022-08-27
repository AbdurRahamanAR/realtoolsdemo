import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  type,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx([
        variant === "primary" ? "bg-primary" : "bg-secondary",
        "rounded",
        "h-[50px] text-white py-[15px] px-5 w-max",
        className,
      ])}
      type={type}
      {...props}
    ></button>
  );
}
