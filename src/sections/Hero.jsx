"use client";

import React, { useState } from "react";
import Image from "next/image";
import CarImage from "@/assets/Hero-Car.png";
import { FaArrowLeft, FaArrowRight, FaDotCircle } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { logos } from "@/data/Brands";
import { HeroData } from "@/data/HeroCar";

const Hero = () => {
  const [imageNum, setImageNum] = useState(0);
  return (
    <div className="px-[8%] pt-16 pb-10">
      <div className="relative flex py-10 justify-between 2xl:container mx-auto">
        <div className="ps-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">Find Your Dream</h1>
          <div className="flex items-center">
            <h1 className="text-red-700 text-9xl font-bold">CAR</h1>
            <a
              href=""
              className="flex items-center text-sm gap-3 px-5 text-white ms-7 py-3 rounded-full bg-blue-950"
            >
              Order Now
              <FaArrowRight className="animate-ping" />
            </a>
          </div>
        </div>
        <div className="z-10 flex">
          <Image
            src={HeroData[imageNum].image}
            alt="audi car"
            className="object-cover h-[23rem]"
          />
        </div>
        <div className="flex gap-0 h-fit flex-col">
          {HeroData.map((_, index) => (
            <BsDot
              key={index}
              size={60}
              className={`${
                imageNum == index ? "text-red-700" : "text-gray-500"
              } p-0 `}
            />
          ))}
        </div>
        <div className="absolute -top-20 flex justify-center w-full">
          <h1 className="text-[15rem] uppercase opacity-15 font-bold">
            {HeroData[imageNum].name}
          </h1>
        </div>
        <div className="flex absolute p-5 gap-3 right-20 -bottom-10">
          <buton
            onClick={() => setImageNum(0)}
            className={`${
              imageNum == 1 ? "text-gray-800" : "text-gray-400"
            }  bg-white shadow-lg rounded-full p-3 cursor-pointer`}
          >
            <FaArrowLeft size={30} />
          </buton>
          <buton
            onClick={() => setImageNum(1)}
            className={`${
              imageNum == 1 ? "text-gray-400" : "text-gray-800"
            }  bg-white shadow-lg rounded-full p-3 cursor-pointer`}
          >
            <FaArrowRight size={30} />
          </buton>
        </div>
      </div>
      <div className="py-8 my-10">
        <div className="rounded-full w-1/2 mx-auto bg-white flex px-10 py-5">
          <div>
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div></div>
          <div></div>
          <div></div>
          {/* git commit --date="2025-02-2 10:25:45" -m "Missed a commit Day" */}
        </div>
        <div className="flex gap-2 justify-center mt-20 items-center">
          <div className="w-[8rem] h-fit border border-gray-400"></div>
          <h2 className="text-xl">BRANDS</h2>
          <div className="w-[8rem] h-fit border border-gray-400"></div>
        </div>
        <div className="flex gap-14 mt-10 justify-center">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={70}
              alt="car brands"
              className="opacity-45"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
