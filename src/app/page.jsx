"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";

const HomePage = () => {
  const socialMedias = [
    { icon: <FaGithub size={30} />, url: "https://github.com/rold97" },
    { icon: <BiLogoGmail size={30} />, url: "dima.paraschuk@gmail.com" },
    {
      icon: <RiInstagramFill size={30} />,
      url: "https://www.instagram.com/d_prshchk/",
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 items-center justify-center py-16 h-full gap-10">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 w-1/2 flex items-center justify-center">
          <div className="rounded-full h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px] xl:h-[600px] xl:w-[600px] bg-heroPhoto bg-cover bg-top shadow-2xl" />
        </div>
        {/* TEXT Container */}
        <div className="h-1/2 w-1/2 flex items-center justify-center text-center">
          <div className="flex flex-col gap-2 md:gap-5 justify-center items-center">
            <p className="text-black/70 text-xl">Hello, I&apos;m</p>
            <h1 className="text-[46px] leading-[56px] font-bold">
              Dmytro Parashchuk
            </h1>
            <h2 className="text-3xl font-semibold text-black/70">
              Frontend Developer
            </h2>
            {/* BUTTONS */}
            <div className="flex flex-row gap-2 sm:gap-5 items-center py-1">
              <Link href="/portfolio">
                <button className="rounded-full bg-black text-gray-200 p-3 hover:scale-95 transition-all duration-200">
                  View My Works
                </button>
              </Link>
              <Link href="/contact">
                <button className="rounded-full bg-transparent border border-black text-black py-3 px-5 hover:scale-95 transition-all duration-200 hover:opac">
                  Contact Me
                </button>
              </Link>
            </div>
            {/* SOCIAL MEDIAS */}
            <div className="flex flex-row gap-10 py-1">
              {socialMedias.map((link) => (
                <Link
                  href={link.url}
                  key={link.url}
                  target="_blank"
                  className="hover:scale-95 transition-all duration-200 "
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
