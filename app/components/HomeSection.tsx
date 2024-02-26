"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import card1 from "../../public/card1.jpeg";
import card2 from "../../public/card2.jpeg";
import card3 from "../../public/card3.jpeg";
import card4 from "../../public/card4.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/ultis/motion";

const objectVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      stggerChildren: 0.1,
    },
  },
};

export default function HomeSection() {
  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full h-auto pb-20 relative max-w-[1200px] mx-auto"
      >
        <div className="grid sm:grid-cols-2 h-full">
          <div className=" content section items-center flex-row justify-center  leading-snug">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
              <div className="leading-tight">
                Uncle Pepe Coin <br /> on
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Solana{" "}
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={slideInFromLeft(0.75)}
              className="mt-8 text-gray-400 text-[16px] leading-[24px] sm:leading-[28px]"
            >
              {/* <div className="text-[20px] font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                "We{"'"}re not just creating a cryptocurrency, we{"'"}re building a movement."{" "}
              </span>
            </div> */}

              <div className="mt-4 text-white font-medium text-[14px] sm:text-[16px]">
                At Uncle PepeCoin, we{"'"}re pioneering the next chapter in
                cryptocurrency, boldly positioning ourselves as the Doge Killer
                with a clear mission to dethrone Dogecoin from its current
                pedestal. Our innovative approach, driven by a commitment to
                efficiency, speed, and community engagement, sets us apart in
                the digital currency landscape. <br />
              </div>

              <div className="mt-10 text-white font-medium">
                <div className="text-[20px] font-bold">Contract Address : </div>
                <div className="border-[1.5px] text-[12px] sm:text-[14px] border-white px-4 py-1.5 w-fit rounded-lg mt-4">
                  8jzRznet3cR3Y1KhciwUxKEqPku3BLcfiJLpVjMU3NF7
                </div>
              </div>

              <button className="text-[14px] sm:text-[16px] mt-8 font-medium px-5 py-1.5 sm:py-2 sm:px-8  rounded-lg bg-green-600 text-white">
                Explore now
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={slideInFromRight(0.75)}
            className="sm:flex hidden items-center justify-center z-10"
          >
            <Image
              src="/uncle-pepe-logo.png"
              width={500}
              height={500}
              alt="image logo"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
