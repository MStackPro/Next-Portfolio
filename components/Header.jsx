"use client"
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Logo from "../app/assets/logo.jpg";

const Header = () => {
  const [navbarBg, setnavbarBg] = useState(false);

  const navbarBgChange = () => {
    if (window.scrollY >= 80) {
      setnavbarBg(true);
    } else {
      setnavbarBg(false);
    }
  };

  useEffect(() => {
    navbarBgChange();
    window.addEventListener("scroll", navbarBgChange);
  });
  return (
    <header className={`${navbarBg ? "bg-primary bg-opacity-95 shadow-m transition-all duration-500 ease-in-out" : "bg-transparent"} py-4 text-white h-20 fixed z-20 w-screen top-0`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* ==== NAV LOGO ==== */}
        <div className="overflow-hidden rounded-full">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" className="w-12" />
          </Link>
        </div>

        {/* nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href={"#contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
