"use client";

import { motion } from "framer-motion";

const MenuButton = ({ open }) => {
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  return (
    <>
      {/* MENU BUTTON */}
      <button className="w-10 h-8 flex flex-col justify-between z-50 relative">
        <div
          variants={topVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"
        ></div>
        <div
          variants={centerVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded "
        ></div>
        <div
          variants={bottomVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"
        ></div>
      </button>
    </>
  );
};

export default MenuButton;
