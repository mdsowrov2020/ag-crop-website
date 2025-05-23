"use client";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer px-7 py-3 rounded-full border-2 border-gray-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
