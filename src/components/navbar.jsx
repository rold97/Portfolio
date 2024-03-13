"use client";

import Link from "next/link";

import { useState } from "react";
import Menu from "./menu";
import MenuButton from "./menuButton";
import MobileMenu from "./mobileMenu";

const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
      {/* LOGO */}

      <Link
        href="/"
        className="text-xl font-normal rounded-full bg-black text-white py-2 px-5"
      >
        Dmytro Parashchuk
      </Link>

      {/* MENU */}
      <Menu />
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div onClick={() => setIsOpen(!open)}>
          <MenuButton open={open} />
        </div>
        <MobileMenu open={open} setIsOpen={setIsOpen} className="md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
