"use client";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="font-bold text-2xl text-gray-50">
        AgCrop
      </Link>
    </div>
  );
};

export default Logo;
