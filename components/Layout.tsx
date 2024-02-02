import { PropsWithChildren } from "react";
import Header, { NavItem } from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export type LayoutProps = PropsWithChildren & {
  className?: string;
};

const Layout = ({ className, children }: LayoutProps) => {
  const navItems: NavItem[] = [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Values", href: "#values" },  
    { text: "Projects", href: "#projects" },
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
        <ScrollToTop />
      </div>
    </>
  );
};

export default Layout;
