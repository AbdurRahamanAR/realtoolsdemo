import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white";
}

const getVariantClasses = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return "bg-primary text-white";
    case "secondary":
      return "bg-secondary text-white";
    default:
      return "bg-white text-dark";
  }
};

export default function Button({
  type,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx([
        getVariantClasses(variant),
        "rounded",
        "h-[50px]  py-[15px] px-5 w-max",
        className,
      ])}
      type={type}
      {...props}
    ></button>
  );
}
