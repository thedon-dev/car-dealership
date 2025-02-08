"use client";

import Image from "next/image";
import React from "react";
import { FaAngleRight, FaCar, FaWalking, FaWallet } from "react-icons/fa";
import carSample from "@/assets/Car-Sample.png";

export const OurServices = () => {
  const services = [
    {
      icon: <FaCar size={30} />,
      heading: "Top Buy & Sell Car",
      description:
        "we Provide many of the best servises for you  and you will get the best benefits here ",
    },
    {
      icon: <FaWallet size={30} />,
      heading: "Easy Payment",
      description:
        "we Provide many of the best servises for you  and you will get the best benefits here ",
    },
    {
      icon: <FaWalking size={30} />,
      heading: "Easy To Use",
      description:
        "we Provide many of the best servises for you  and you will get the best benefits here ",
    },
  ];
  return (
    <>
      <div className="py-20 px-[5%]">
        <div className="2xl:container mx-auto">
          <div className="flex items-center justify-center gap-2">
            <div className="w-[7rem] lg:w-[10rem] h-fit border border-gray-500"></div>
            <h1 className="text-lg font-bold">OUR SERVICES</h1>
            <div className="w-[7rem] lg:w-[10rem] h-fit border border-gray-500"></div>
          </div>
          <p className="text-gray-600 font-semibold text-center mt-5">
            We Provide Many Of The Best Services For You And You Will Get The
            Best Benefits Here
          </p>
          <div className="flex flex-col lg:flex-row gap-5 mt-10 px-[10%]">
            {services.map((serv, index) => (
              <div key={index} className="p-7 bg-white rounded-lg">
                <div className="text-red-700">{serv.icon}</div>
                <h2 className="mt-3 font-bold text-blue-950">{serv.heading}</h2>
                <p className="mt-2 text-gray-600">{serv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[2000px] mx-auto my-10 flex flex-col items-center px-[5%] lg:px-0 lg:pe-10">
        <div className="lg:w-3/5 z-10">
          <Image
            src={carSample}
            alt="Electric Vehicle"
            className="object-cover w-4/5 mx-auto lg:mx-0 lg:w-full rounded-lg lg:rounded-none"
            height={400}
          />
        </div>
        <div className="rounded-lg bg-white px-10 lg:px-20 py-20 lg:py-40 flex flex-col gap-5 lg:w-2/5 -translate-y-10 lg:-translate-x-10">
          <h2 className="text-3xl font-bold text-blue-950">EVs For Everyone</h2>
          <p className="">
            we Provide many of the best servises for you and you will get the
            best benefits here{" "}
          </p>
          <a
            href=""
            className="flex gap-1 bg-blue-950 text-white rounded-full w-fit py-2 px-5 items-center"
          >
            Read More <FaAngleRight />
          </a>
        </div>
      </div>
    </>
  );
};
