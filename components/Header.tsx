"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./svg/Logo";
import { BarChart, GitHub, Linkedin, Mail, X } from "react-feather";
import { ChangeEvent, ReactNode, useState } from "react";
import useLastScrollDirection from "@/hooks/useLastScrollDirection";
import useActiveSection from "@/hooks/useActiveSection";
import config from '../app/config';

export type NavItem = {
  text: string;
  href: string;
  className?: string;
  icon?: ReactNode;
};

const navItems: NavItem[] = [
  { text: "About", href: "#about" },
  { text: "Work", href: "#work" },
  // { text: "Values", href: "#values" },  
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

const Header = () => {
  const [lastScrollXDirection, lastScrollYDirection] = useLastScrollDirection();
  const activeSection = useActiveSection();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSidebarOpen(e.target.checked);
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="sidebar"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        onChange={handleSidebarChange}
      />
      <header
        className={`fixed top-0 left-0 right-0 md:absolute z-30 transition-transform duration-300 ${
          lastScrollYDirection === "down"
            ? "-translate-y-full md:translate-y-0"
            : ""
        }`}
      >
        <nav
          className={`navbar px-2 md:p-4 w-full max-w-screen-lg mx-auto 
          justify-between text-amped backdrop-blur-sm md:backdrop-blur-0
          ${activeSection !== 'home' ? 'shadow-md' : ''}`}
        >
          <Link
            href="/"
            className="text-2xl h-10 w-10 grid place-items-center mr-2"
          >
            <Logo />
          </Link>
          <ul className="menu menu-horizontal hidden md:flex gap-8">
            {navItems?.map((nav) => (
              <li
                key={`${nav.text}${nav.href}`}
                className="font-semibold uppercase tracking-wide"
              >
                <a
                  href={nav.href}
                  className={`${nav.className} ${
                    nav.href === `#${activeSection}` ? "active" : ""
                  }`}
                >
                  {nav.text}
                </a>
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
        <div className="w-64 min-h-full p-4 bg-base-100 text-base-content flex flex-col justify-between">
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
                  <a
                    href={nav.href}
                    tabIndex={-1}
                    className={`${
                      nav.href === `#${activeSection}` ? "active" : ""
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {nav.icon && <span className="pr-2">{nav.icon}</span>}
                    {nav.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <address>
              <ul className="flex justify-between gap-2">
                <li>
                  <a
                    href={config.author.linkedin}
                    target="_blank"
                    className="btn btn-square btn-ghost"
                    tabIndex={-1}
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href={config.author.github}
                    target="_blank"
                    className="btn btn-square btn-ghost"
                    tabIndex={-1}
                  >
                    <GitHub />
                  </a>
                </li>
                <li>
                  <a
                    href={config.author.mailto}
                    target="_blank"
                    className="btn btn-square btn-ghost"
                    tabIndex={-1}
                  >
                    <Mail />
                  </a>
                </li>
                <div className="divider divider-horizontal mx-0"></div>
                <li>
                  <ThemeSwitcher
                    className="btn-square btn-ghost"
                    focusable={false}
                  />
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
