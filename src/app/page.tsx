"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
const LandingPage = () => {
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
        // transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-blue-600  to-indigo-400  inline-block text-transparent bg-clip-text   text-3xl sm:text-4xl  lg:text-5xl xl:text-6xl 2xl:text-7xl font-[900]"
      >
        ZakirAli
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
        Results-oriented full-stack web developer with a strong eye for design
        and a focus on building robust, optimised web applications. Proficient
        in modern technologies and frameworks.
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
        <SocialIcon
          style={{ width: "30px", height: "30px" }}
          bgColor="#282A2C"
          url="https://www.linkedin.com/in/zakirali-dhuka-baab89259/"
          target="_blank"
          className="hover:opacity-20 cursor-pointer"
        />
        <SocialIcon
          style={{ width: "30px", height: "30px" }}
          bgColor="#282A2C"
          url="https://x.com/zakirali_05"
          target="_blank"
          className="hover:opacity-20 cursor-pointer"
        />
        <SocialIcon
          style={{ width: "30px", height: "30px" }}
          bgColor="#282A2C"
          url="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRqhkhDlfvzvcRqcFTtwLpDTnPwHMkHHxXzhhpNFvLMlHXDxzftwmMwpFZnRfBqckFnRpqQ"
          target="_blank"
          className="hover:opacity-20 cursor-pointer"
        />
        <SocialIcon
          style={{ width: "30px", height: "30px" }}
          bgColor="#282A2C"
          url="https://github.com/zakirali05"
          target="_blank"
          className="hover:opacity-20 cursor-pointer"
        />
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
            Download Resume
          </a>
        </Button>
        <Button variant={"custom_inverse"}>
          <Link href={"/hire-me"}>Hire Me!</Link>
        </Button>
      </motion.div>
      <motion.div
        initial={{
          // y: "10px",
          width: "0px",
          opacity: 0,
        }}
        whileInView={{
          // y: "0px",
          width: "300px",
          opacity: 100,
        }}
        viewport={{ once: true }}
        // transition={{ duration: 0.4 }}
        className="h-1 w-[300px] my-5 border-t border-white/30"
      />
    </main>
  );
};

export default LandingPage;
