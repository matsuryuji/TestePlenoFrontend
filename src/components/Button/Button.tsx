import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-medium rounded-[7px] focus:outline-none px-3 py-2 sm:px-2 sm:py-1 lg:px-4 lg:py-3 lg:w-[265px] lg:h-[45px]";
  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
