import React from "react";
import Link from "next/link";
import { Theme } from "@/components/(navbar)/Theme";
import NavigationNavbar from "@/components/(navbar)/NavigationNavbar";
import Language from "@/components/(navbar)/Language";
import Image from "next/image";
import Search from "@/components/(navbar)/Search";

const Navbar = () => {
  return (
    <>
      <nav className="relative flex h-24 w-full items-end bg-white px-10 dark:bg-black dark:text-white">
        <div className="ml-40 pb-0.5">
          <Link href="/">
            <Image src="/images/Home.png" alt="Home" width={80} height={80} />
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <NavigationNavbar />
        </div>

        <div className="ml-216 flex space-x-1">
          <div className="font-playfair-semi-bold-italic h-[42px]">
            <Search />
          </div>
          <div className="h-[42px] text-black dark:text-white">
            <Language />
          </div>
          <div className="h-[42px] text-black dark:text-white">
            <Theme />
          </div>
        </div>
      </nav>

      <div className="h-0.5 bg-black"></div>
    </>
  );
};

export default Navbar;
