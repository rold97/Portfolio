"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "ReactJS",
    "NextJS",
    "Redux Toolkit",
    "Framer Motion",
    "Git",
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8  md:p-12 md:pt-8 lg:p-20 lg:pt-10 xl:p-48 xl:pt-12 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/hero2.jpg"
              alt="heroPhoto"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover top-0"
            />

            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl uppercase">
              a little about me...
            </h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Hi. I am 26 years old and web development is my passion. I really
              enjoy what I do. I do this full time and currently available to
              take on new projects. I&apos;m actually motivated to work closely
              with you. You can trust to get the job done RIGHT. Feel free to
              start our cooperation to get THE BEST result of our work.
            </p>

            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Behind every great website is a web developer with a good sense of
              humor...and a lot of coffee. :)
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="382"
                height="104"
                viewBox="0 0 382 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M101.128 16.3944C87.3209 39.1031 70.4643 59.7515 56.7304 82.5676C53.2687 88.3185 49.638 97.4429 44.0454 101.637"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M116.35 24.0054C108.243 36.3578 100.45 48.911 92.3328 61.2569C85.1543 72.1752 77.0026 82.6663 70.261 93.8573C69.385 95.3114 68.178 99.9439 67.7663 98.297C67.2184 96.1053 70.7586 94.6313 72.206 94.1956C83.2054 90.8839 91.6595 97.6158 102.143 97.8319C116.011 98.1179 130.259 90.6571 136.773 78.2125C145.152 62.2026 145.986 37.2033 136.434 21.3839C132.161 14.3055 125.352 3.6244 116.265 2.44098C103.972 0.83997 94.3755 12.7195 88.8656 21.9335C82.4593 32.6466 77.7912 44.9423 74.2356 56.9018C73.2673 60.159 75.093 61.0455 78.3371 61.0455C89.6891 61.0455 99.705 55.7624 108.57 49.1217C113.752 45.2396 121.72 40.181 124.553 33.8997C124.773 33.4108 125.159 32.4158 124.637 32.2929C122.667 31.8293 118.552 36.2091 117.745 36.9864C112.57 41.9725 108.189 47.9709 106.202 54.9567C102.195 69.0437 127.192 51.9871 130.219 49.8828C133.695 47.4662 140.498 43.4108 141.381 38.5509C141.975 35.2844 137.663 36.7655 136.223 37.7052C128.333 42.8529 122.671 53.3127 119.563 61.9335C116.561 70.2615 127.362 65.6902 130.895 63.6248C142.061 57.0981 153.235 47.3007 161.254 37.1132C161.438 36.8804 161.924 36.2456 161.635 36.3098C161.147 36.4183 160.822 36.9059 160.493 37.2824C157.247 40.9983 154.949 45.3152 153.813 50.1365C150.834 62.7715 162.786 63.3866 172.417 64.0053C175.61 64.2105 181.72 64.2795 185.187 64.1745C187.305 64.1103 195.144 63.7164 183.918 63.6248C136.697 63.2393 89.8581 61.4327 42.8615 56.5635C27.2193 54.9429 25.6875 54.5003 11.741 53.4345C8.64334 53.1978 -0.527631 53.152 2.481 52.3775C12.7256 49.7402 24.0991 48.2743 34.1934 46.9229C101.018 37.9767 168.246 32.2104 235.335 25.6968C279.878 21.372 324.564 17.5413 368.95 11.701C371.325 11.3884 377.9 10.2734 380.451 9.54456"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-32"
            ref={skillRef}
          >
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skillsList.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-black/60 transition-all duration-200"
                >
                  <p>{skill}</p>
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
