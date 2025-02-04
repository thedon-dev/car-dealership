import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import carSample from "@/assets/Car-Sample.png";

const ExploreCar = ({ data }) => {
  return (
    <div className="grid grid-cols-2 w-[40rem] flex-shrink-0">
      <Image
        src={carSample}
        alt="Tesla-Model"
        className="h-2/3 object-cover rounded-lg translate-x-20 mt-20"
      ></Image>
      <div className="bg-white rounded-lg p-5 w-">
        <h1 className="font-bold text-xl">Tesla Model 3</h1>
        <h4 className="text-gray-500 text-sm font-semibold mt-1">Used</h4>
        <div className="ms-20 mt-5">
          <div className="flex flex-col gap-1 text-sm">
            <p className="text-gray-500 font-semibold flex justify-between">
              Model Year: <span className="text-black">2023</span>{" "}
            </p>
            <p className="text-gray-500 font-semibold flex justify-between">
              Model: <span className="text-black">LC76</span>{" "}
            </p>
            <p className="text-gray-500 font-semibold flex justify-between">
              Power: <span className="text-black">Petrol</span>{" "}
            </p>
          </div>
          <h2 className="mt-7 font-bold text-xl">$36,900</h2>
          <div className="mt-5">
            <a
              href=""
              className="bg-blue-950 gap-5 w-fit flex text-sm font-semibold items-center rounded-full px-5 py-2 text-white"
            >
              Order Now
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCar;
