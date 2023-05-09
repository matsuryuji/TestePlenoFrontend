import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
};

const Input: React.FC<InputProps> = ({
  error,
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  ...rest
}) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      <input
        {...rest}
        className={`border bg-gray border-gray rounded-md py-[14px] pl-[21px] text-medium font-medium font-sans font-poppins leading-5 placeholder-placeholder transition-opacity duration-700 opacity-600 focus:placeholder-opacity-0 focus:outline-none focus:ring-2 focus:ring-red ${
          error ? "border-red-500" : ""
        } ${inputClassName}`}
      />
      {error && <p className="text-red-500 text-lg mt-1">{error}</p>}
    </div>
  );
};

export default Input;
