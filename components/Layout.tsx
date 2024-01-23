import { PropsWithChildren } from "react";
import Header, { NavItem } from "./Header";
import { Gift, Grid, Heart, Truck } from "react-feather";

export type LayoutProps = PropsWithChildren & {
  className?: string;
};

const Layout = ({ className, children }: LayoutProps) => {
  const navItems: NavItem[] = [
    // { text: "Men", href: "/", icon: <Gift /> },
    // { text: "Women", href: "/", icon: <Heart /> },
    // { text: "Children", href: "/", icon: <Truck /> },
    // { text: "Explore", href: "/", icon: <Grid />},
  ];
  
  return (
    <div className="min-h-screen antialiased">
      <Header navItems={navItems} />
      <main className={`content-grid ${className ?? ""}`}>{children}</main>
    </div>
  );
};

export default Layout;
