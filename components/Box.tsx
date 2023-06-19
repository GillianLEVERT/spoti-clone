import React from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge("bg-[#1b2842] rounded-lg h-fit w-full p-2", className)}
    >
      {children}
    </div>
  );
};
