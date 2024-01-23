"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "react-feather";

export type ThemeSwitcherProps = {
  className?: string;
  showLabel?: boolean;
};

const ThemeSwitcher = ({ className, showLabel }: ThemeSwitcherProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [label, setLabel] = useState("");
  const myref = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      myref.current?.classList.add("swap-active");
      setLabel("Light Mode");
    } else {
      myref.current?.classList.remove("swap-active");
      setLabel("Dark Mode");
    }
  }, [resolvedTheme]);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <label
      className={`btn swap swap-rotate ${className}`}
      ref={myref}
      onClick={toggleTheme}
    >
      <Sun className="swap-on fill-current" />
      <Moon className="swap-off fill-current" />
      {showLabel && <span className="col-start-2">{label}</span>}
    </label>
  );
};

export default ThemeSwitcher;
