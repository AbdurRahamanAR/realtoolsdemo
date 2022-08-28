import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white";
  size?: "sm" | "md" | "xl" | "2xl";
}

const getVariantClasses = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return "bg-primary text-white";
    case "secondary":
      return "bg-secondary text-dark";
    default:
      return "bg-white text-dark";
  }
};

const getSizeClasses = (variant: ButtonProps["size"]) => {
  switch (variant) {
    case "2xl":
      return "h-[80px]";
    case "xl":
      return "h-[60px]";
    case "sm":
      return "h-[40px]";
    default:
      return "h-[50px]";
  }
};

export default function Button({
  type,
  size = "md",
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx([
        getVariantClasses(variant),
        getSizeClasses(size),
        "rounded font-semibold leading-5",
        "flex justify-center items-center px-5",
        className,
      ])}
      type={type}
      {...props}
    ></button>
  );
}
