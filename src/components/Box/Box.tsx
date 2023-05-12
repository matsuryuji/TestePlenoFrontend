import React, { ReactNode } from "react";

type BoxProps = {
  children?: ReactNode;
  boxClassName?: string;
  bgColor?: string;
  borderRadius?: string;
};

const Box = ({
  children,
  bgColor = "",
  borderRadius = "0",
  boxClassName = "",
}: BoxProps) => {
  return (
    <div className={`bg-${bgColor} rounded-${borderRadius} ${boxClassName}`}>
      {children}
    </div>
  );
};

export default Box;
