import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MobileMenu = ({ open, setIsOpen }) => {
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <>
      {open && (
        <motion.div
          className="absolute top-0 left-0 w-screen h-screen bg-black/95 flex flex-col items-center justify-center gap-14 text-4xl z-40"
          variants={listVariants}
          initial="closed"
          animate="opened"
        >
          {links.map((link) => (
            <motion.div
              key={link.title}
              onClick={() => setIsOpen(!open)}
              variants={listItemVariants}
            >
              <Link
                href={link.url}
                className="text-neutral-100 hover:text-neutral-100/70  transition-all duration-200"
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default MobileMenu;
