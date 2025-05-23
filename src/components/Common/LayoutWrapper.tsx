import React, { ReactNode } from "react";
import Nav from "../ui/Nav";
interface LayoutProps {
  children: ReactNode;
}
const LayoutWrapper = ({ children }: LayoutProps) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default LayoutWrapper;
