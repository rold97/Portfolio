"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Travel App",
    desc: `Hilink is your go-to application for seamless and stress-free travel experiences. Whether you're a seasoned globetrotter or a first-time explorer, RoamEase has everything you need to plan, organize, and enjoy your trips to the fullest. Adventure around the world with just one app.`,
    img: "/project1.jpg",
    link: "https://hi-link-travel.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js E-commerce",
    desc: "Shoppy is one-stop destination for all your shopping needs! At Shoppy offered a wide range of high-quality products at affordable prices, carefully curated to cater to your diverse tastes and preferences. Shop with confidence knowing that we prioritize customer satisfaction above all else. Start exploring our selection today and let us help you find exactly what you're looking for!",
    img: "/project2.jpg",
    link: "https://e-commerce-clothes-shop-one.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "React Interior Shop",
    desc: "Daunku Interior Shop, where your dream home finds its perfect expression. Step into a realm of exquisite design and unparalleled style, where every corner is infused with inspiration and every piece tells a story of refined elegance.Discover the art of refined living at Daunku Interior Shop, where every visit is a journey of discovery and every purchase is a step towards creating the home of your dreams.",
    img: "/project3.jpg",
    link: "https://daunku-interior-shop.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "React Traveling Website",
    desc: "Embark on unforgettable adventures with WEEKAWAY, your trusted companion in creating tailor-made travel experiences that exceed your expectations. As avid explorers and passionate adventurers ourselves, we understand the desire for unique and enriching journeys that leave lasting memories.",
    img: "/project4.jpg",
    link: "https://weekaway-phi.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex border-none">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen border-none flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-6 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[600px] lg:h-[350px] xl:w-[840px] xl:h-[458px] group rounded-lg">
                    <Link href={item.link} target="_blank">
                      <Image
                        src={item.img}
                        alt=""
                        fill
                        className="group-hover:scale-95 transition-all duration-200 rounded-lg hover:shadow-[0px_0px_30px_30px_rgba(255,255,255,0.2)]"
                      />
                    </Link>
                  </div>
                  <p className="w-80 md:w-96 lg:w-[600px] lg:text-lg xl:w-[840px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:px-8 lg:py-4 lg:text-lg bg-white text-gray-600 font-semibold rounded-lg hover:scale-95 hover:shadow-[0px_0px_20px_10px_rgba(255,255,255,0.2)] transition-all duration-200">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center pb-6 md:pb-0">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath
                xlinkHref="#circlePath"
                className="text-xl tracking-widest"
              >
                Front-end (React) Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
