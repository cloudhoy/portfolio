"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { Moon, Sun } from "react-feather";

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const myref = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (resolvedTheme === "dark") myref.current?.classList.add("swap-active");
    else myref.current?.classList.remove("swap-active");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <label className="btn btn-circle btn-ghost swap swap-rotate" ref={myref} onClick={toggleTheme}>
      <Sun className="swap-on fill-current" />
      <Moon className="swap-off fill-current" />
    </label>
  );
};

export default ThemeSwitcher;
