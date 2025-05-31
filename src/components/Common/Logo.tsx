"use client";
import { Leaf } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="font-bold text-2xl text-gray-50 flex items-center"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            AgCrop
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
