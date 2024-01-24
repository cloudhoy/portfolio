"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./svg/Logo";
import Searcher from "./Searcher";
import Cart from "./Cart";
import { BarChart, GitHub, Linkedin, Mail, Menu, X } from "react-feather";
import { ReactNode } from "react";
import useLastScrollDirection from "@/hooks/useLastScrollDirection";

export type HeaderProps = {
  navItems?: NavItem[];
};

export type NavItem = {
  text: string;
  href: string;
  icon?: ReactNode;
};

const Header = ({ navItems }: HeaderProps) => {
  const [lastScrollXDirection, lastScrollYDirection] = useLastScrollDirection();

  return (
    <div className="drawer drawer-end">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <header
        className={`fixed top-0 left-0 right-0 md:absolute z-20 transition-transform duration-300 bg-base-100 ${
          lastScrollYDirection === "down"
            ? "-translate-y-full md:translate-y-0"
            : ""
        }`}
      >
        <nav className="navbar px-0 w-full max-w-screen-lg mx-auto justify-between">
          <Link
            href="/"
            className="text-2xl h-12 w-12 grid place-items-center mr-2 "
          >
            <Logo className="hover:fill-primary transition-[fill] ease-in-out duration-200" />
          </Link>
          <ul className="menu menu-horizontal font-bold uppercase tracking-wide hidden md:flex gap-2">
            {navItems?.map((nav) => (
              <li key={`${nav.text}${nav.href}`}>
                <Link href={nav.href}>{nav.text}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 items-center justify-end">
            <span className="hidden md:block">
              <ThemeSwitcher className="btn-square btn-ghost" />
            </span>
            <label
              htmlFor="sidebar"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost md:hidden"
            >
              <BarChart className="-rotate-90" />
            </label>
          </div>
        </nav>
      </header>
      <div className="drawer-side overflow-x-hidden z-50">
        <label
          htmlFor="sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-60 min-h-full p-2 bg-base-100 text-base-content flex flex-col justify-between">
          <div>
            <div className="flex justify-between mb-4">
              <label
                htmlFor="sidebar"
                aria-label="close sidebar"
                className="btn btn-square btn-ghost"
              >
                <X />
              </label>
            </div>

            <ul className="menu p-0 gap-2 font-medium">
              {navItems?.map((nav) => (
                <li key={`${nav.text}${nav.href}`}>
                  <a href={nav.href}>
                    {nav.icon && <span className="pr-2">{nav.icon}</span>}
                    {nav.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 p-4">
            <address>
              <ul className="flex justify-between">
                <li>
                  <a
                    href="https://www.linkedin.com/in/tcheong/"
                    target="_blank"
                    className="btn btn-square btn-ghost"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/cloudhoy"
                    target="_blank"
                    className="btn btn-square btn-ghost"
                  >
                    <GitHub />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:wanhoy.cheong@gmail.com"
                    target="_blank"
                    className="btn btn-square btn-ghost"
                  >
                    <Mail />
                  </a>
                </li>
              </ul>
            </address>
            <div className="divider divider-horizontal mx-0"></div>
            <ThemeSwitcher className="btn-square btn-ghost" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
