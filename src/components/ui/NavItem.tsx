"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";

const NavItem = () => {
  const [toggleNavItem, setToggleNavItem] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setToggleNavItem(false);
  }, [pathname]);

  return (
    <div className="w-auto ">
      <div className="block lg:hidden relative z-[1000]">
        <button onClick={() => setToggleNavItem((open) => !open)}>
          {!toggleNavItem ? <GiHamburgerMenu /> : <LiaTimesSolid />}
        </button>
      </div>

      <ul
        className={`bg-emerald-500 lg:bg-transparent list-none flex flex-col lg:flex-row items-center lg:justify-center gap-2 lg:gap-8 absolute lg:relative top-0  left-0 z-50 w-full lg:w-auto h-auto transition-all duration-300
          ${toggleNavItem ? "block" : "hidden"} lg:flex`}
      >
        <li>
          <Link
            href="/"
            className="inline-block py-6 text-emerald-50 font-light text-lg"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="inline-block py-6 text-emerald-50 font-light text-lg"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="inline-block py-6 text-emerald-50 font-light text-lg"
          >
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
