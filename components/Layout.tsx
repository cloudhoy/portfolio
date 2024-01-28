import { PropsWithChildren } from "react";
import Header, { NavItem } from "./Header";
import { Gift, GitBranch, Heart } from "react-feather";
import Footer from "./Footer";

export type LayoutProps = PropsWithChildren & {
  className?: string;
};

const Layout = ({ className, children }: LayoutProps) => {
  const navItems: NavItem[] = [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen antialiased">
        <Header navItems={navItems} />
        <div className="grow">
          <main className={`content-grid ${className ?? ""}`}>{children}</main>
        </div>
        <Footer className="px-4 py-8" />
      </div>
    </>
  );
};

export default Layout;
