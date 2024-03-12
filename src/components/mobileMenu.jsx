import Link from "next/link";
import React from "react";

const MobileMenu = ({ open }) => {
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <div>
      {/* MENU LIST */}
      {open && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/95 flex flex-col items-center justify-center gap-14 text-4xl z-40">
          {links.map((link) => (
            <div key={link.title}>
              <Link
                href={link.url}
                className="text-neutral-100 hover:text-neutral-100/70 transition-all duration-200"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
