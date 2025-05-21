"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";
import { usePathname } from "next/navigation";

const RootLayout2 = ({ children }) => {
  const hideLayout = usePathname() === "/shop";
  return (
    <>
      {!hideLayout && <NavBar />}
      {children}
      <Footer />
    </>
  );
};

export default RootLayout2;
