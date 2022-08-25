import React, { ReactNode } from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}
