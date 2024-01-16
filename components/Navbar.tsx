"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./svg/Logo";
import Searchbar from "./Searchbar";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 left-0 right-0 z-20 p-4 md:pt-8 md:px-12 max-w-[1920px] mx-auto">
      <div className="navbar-start grow gap-4">
        <Link href="/" className="text-2xl mr-4">
          <Logo className="hover:fill-primary transition-[fill] ease-in-out duration-200"/>
        </Link>
        <ul className="menu menu-horizontal px-1 font-bold uppercase tracking-wide hidden md:flex gap-1 lg:gap-4">
          <li>
            <Link href="/">Men</Link>
          </li>
          <li>
            <Link href="/">Women</Link>
          </li>
          <li>
            <Link href="/">Children</Link>
          </li>
          <li>
            <Link href="/">Explore</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end w-1/2 md:w-[30%]">
        <div className="w-full gap-4 items-center justify-end flex">
          <Searchbar />
          <Cart />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
