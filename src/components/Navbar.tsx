import React from "react";
import Link from "next/link";
import { Theme } from "@/components/(navbar)/Theme";
import NavigationNavbar from "@/components/(navbar)/NavigationNavbar";
import Language from "@/components/(navbar)/Language";
import Search from "@/components/(navbar)/Search";

const Navbar = () => {
  return (
    <>
      <nav className="flex h-24 w-full items-end justify-center space-x-10 bg-white dark:bg-black dark:text-white">
        <div>
          <Link href="/">
            <img src="/images/Home.png" alt="Home" className="h-23 w-23" />
          </Link>
        </div>
        <div>
          <NavigationNavbar />
        </div>
        <div className="h-[42px]">
          <Language />
        </div>
        <div className="font-playfair-semi-bold-italic h-[42px]">
          <Search />
        </div>
        <div className="h-[42px]">
          <Theme />
        </div>
      </nav>
      <div className="h-0.5 bg-black"></div>
    </>
  );
};

export default Navbar;
