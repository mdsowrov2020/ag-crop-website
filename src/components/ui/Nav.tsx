"use client";
import React from "react";
import Logo from "../Common/Logo";
import NavItem from "./NavItem";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="w-full   py-5 lg:py-3 sticky top-0 z-[100]   bg-gray-50/10 backdrop-blur-sm">
      <div className="flex items-center justify-between  w-full px-5 lg:px-0 lg:max-w-7xl mx-auto">
        <Logo /> <NavItem />
        <div className=" hidden  w-full lg:w-auto lg:inline-block  lg:bg-transparent">
          <Button className="text-gray-100"> Get consultation</Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
