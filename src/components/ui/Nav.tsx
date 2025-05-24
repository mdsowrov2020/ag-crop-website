"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../Common/Logo";
import NavItem from "./NavItem";
import Button from "./Button";
import clsx from "clsx"; // Optional: for clean conditional class merging

const Nav = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 560);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  const navClasses = clsx(
    "w-full sticky top-0 z-[100] transition-colors duration-300",
    {
      "bg-transparent backdrop-blur-sm": isHome && !scrolled,
      "bg-green-800": !isHome || scrolled,
    }
  );

  return (
    <nav className={navClasses}>
      <div className="flex items-center justify-between w-full px-5 lg:px-0 lg:max-w-7xl mx-auto py-5 lg:py-2">
        <Logo />
        <NavItem />
        <div className="hidden lg:inline-block">
          <Button className="text-gray-100">Get consultation</Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
