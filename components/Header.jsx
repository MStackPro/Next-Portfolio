import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Logo from "../app/assets/logo.jpg";

const Header = () => {
  return (
    <header className="py-4 text-white shadow-md h-20 fixed z-20 w-screen top-0 bg-primary">
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
