"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded-lg py-2 px-4 ${
        pathName === link.url && "bg-black text-white font-normal"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
