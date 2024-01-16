import { PropsWithChildren } from "react";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col min-h-screen antialiased">
    <Header />
    <main className="w-full">{children}</main>
  </div>
);

export default Layout;
