import React, { ReactNode } from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}
