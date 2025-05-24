import React, { ReactNode } from "react";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";
interface LayoutProps {
  children: ReactNode;
}
const LayoutWrapper = ({ children }: LayoutProps) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
