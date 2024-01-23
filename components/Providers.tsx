"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { PropsWithChildren } from "react";

const themeProviderProps : ThemeProviderProps = {
  enableSystem: false
}

const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider {...themeProviderProps}>{children}</ThemeProvider>
);

export default Providers;
