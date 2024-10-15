"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-3 ">
      <motion.h1
        initial={{
          y: "10px",
          opacity: 0,
        }}
        whileInView={{
          y: "0px",
          opacity: 100,
        }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600  to-indigo-400  inline-block text-transparent bg-clip-text   text-3xl sm:text-4xl  lg:text-5xl xl:text-6xl 2xl:text-7xl font-[900]"
      >
        {PORTFOLIO_DATA.landing_page.hero.name}
      </motion.h1>

      <motion.p
        initial={{
          y: "10px",
          opacity: 0,
        }}
        whileInView={{
          y: "0px",
          opacity: 100,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.1 }}
        className=" text-white/40 font-[500]   w-[90%] md:w-[60%] lg:w-[40%] text-center"
      >
        {PORTFOLIO_DATA.landing_page.hero.description}
      </motion.p>
      <motion.div
        initial={{
          y: "10px",
          opacity: 0,
        }}
        whileInView={{
          y: "0px",
          opacity: 100,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center gap-2"
      >
        {PORTFOLIO_DATA.landing_page.hero.socials.map((url) => (
          <SocialIcon
            key={url}
            style={{ width: "30px", height: "30px" }}
            bgColor="#282A2C"
            url={url}
            target="_blank"
            className="hover:opacity-20 cursor-pointer"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          y: "10px",
          opacity: 0,
        }}
        whileInView={{
          y: "0px",
          opacity: 100,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center gap-2 "
      >
        <Button variant={"custom"}>
          <a href="/resume.pdf" download>
            {PORTFOLIO_DATA.landing_page.hero.buttons.resume_text}
          </a>
        </Button>
        <Button variant={"custom_inverse"}>
          <Link href={"/hire-me"}>
            {PORTFOLIO_DATA.landing_page.hero.buttons.hire_me_text}
          </Link>
        </Button>
      </motion.div>
      <motion.div
        initial={{
          width: "0px",
          opacity: 0,
        }}
        whileInView={{
          width: "300px",
          opacity: 100,
        }}
        viewport={{ once: true }}
        className="h-1 w-[300px] my-5 border-t border-white/30"
      />
    </main>
  );
};

export default Hero;
