import React from "react";
import NavLink from "./navLink";

const Menu = () => {
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  return (
    <div className="hidden lg:block">
      {/* MENU LIST */}
      <div className="flex flex-row gap-10 font-light ">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
