"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "react-feather";

export type ThemeSwitcherProps = {
  className?: string;
  showLabel?: boolean;
  focusable?: boolean;
};

const ThemeSwitcher = ({ className, showLabel, focusable = true }: ThemeSwitcherProps) => {
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
      tabIndex={focusable ? 0 : -1}
    >
      <Sun className="swap-on" />
      <Moon className="swap-off" />
      {showLabel && <span className="col-start-2">{label}</span>}
    </label>
  );
};

export default ThemeSwitcher;
