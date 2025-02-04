import React from "react";
import { FaCar } from "react-icons/fa";

export const OurServices = () => {
  const services = [
    {
      icon: <FaCar />,
      service: "Top Buy & Sell Car",
      description:
        "we Provide many of the best servises for you  and you will get the best benefits here ",
    },
    {
      icon: <FaCar />,
      service: "Easy Payment",
      description:
        "we Provide many of the best servises for you  and you will get the best benefits here ",
    },
    {
      icon: <FaCar />,
      service: "Easy To Use",
      description:
        "we Provide many of the best servises for you  and you will get the best benefits here ",
    },
  ];
  return (
    <div className="py-20 px-[5%]">
      <div className="flex items-center justify-center gap-2">
        <div className="w-[10rem] h-fit border border-gray-500"></div>
        <h1 className="text-xl">EXPLORE</h1>
        <div className="w-[10rem] h-fit border border-gray-500"></div>
      </div>
      <p className="text-gray-600 font-semibold text-center mt-5">
        We Provide Many Of The Best Services For You And You Will Get The Best
        Benefits Here
      </p>
      <div className="flex gap-5">
        {services.map((serv, index) => (
          <div key={index} className="p-5 bg-white rounded-lg">
            <div>{serv.icon}</div>
            <p>{serv.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
