import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./svg/Logo";
import Searcher from "./Searcher";
import Cart from "./Cart";
import { GitHub, Linkedin, Mail, Menu, X } from "react-feather";
import { ReactNode } from "react";

export type HeaderProps = {
  navItems?: NavItem[];
};

export type NavItem = {
  text: string;
  href: string;
  icon?: ReactNode;
};

const Header = ({ navItems }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 md:absolute z-20 backdrop-blur-md">
      <nav className="navbar w-full max-w-screen-xl mx-auto grid grid-flow-col">
        <div>
          <Link
            href="/"
            className="text-2xl h-12 w-12 grid place-items-center mr-2"
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
        </div>
        <div className="place-self-end">
          <div className="flex w-full gap-2 items-center justify-end">
            <address className="hidden md:block">
              <ul className="flex gap-2">
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
            <div className="divider divider-horizontal my-2 mx-0 hidden md:flex"></div>
            <Searcher className="btn-square btn-ghost" />
            <Cart className="btn-square btn-ghost" />
            <span className="hidden md:block">
              <ThemeSwitcher className="btn-square btn-ghost" />
            </span>
            <div className="drawer drawer-end md:hidden">
              <input id="sidebar" type="checkbox" className="drawer-toggle" />
              <label
                htmlFor="sidebar"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <Menu />
              </label>

              <div className="drawer-side overflow-x-hidden">
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
                            {nav.icon && (
                              <span className="pr-2">{nav.icon}</span>
                            )}
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
