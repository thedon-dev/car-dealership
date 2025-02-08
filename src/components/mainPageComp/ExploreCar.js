import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ExploreCar = ({ data }) => {
  return (
    <div className="grid grid-cols-2 w-[30rem] flex-shrink-0">
      <Image
        src={data.image}
        width={600}
        height={300}
        alt="Tesla-Model"
        className="h-[55%] object-cover rounded-lg mt-20 z-10"
      ></Image>
      <div className="bg-white rounded-lg p-5 -translate-x-20">
        <h1 className="font-bold text-xl">{data.name}</h1>
        <h4 className="text-gray-500 text-sm font-semibold mt-1">
          {data.status}
        </h4>
        <div className="ms-20 mt-5">
          <div className="flex flex-col gap-1 text-xs lg:text-sm">
            <p className="text-gray-500 font-semibold flex justify-between">
              Model Year: <span className="text-black">{data.modelYear}</span>{" "}
            </p>
            <p className="text-gray-500 font-semibold flex justify-between">
              Model: <span className="text-black">{data.model}</span>{" "}
            </p>
            <p className="text-gray-500 font-semibold flex justify-between">
              Power: <span className="text-black">{data.power}</span>{" "}
            </p>
          </div>
          <h2 className="mt-7 font-bold text-xl">{data.price}</h2>
          <div className="mt-5">
            <a
              href=""
              className="bg-blue-950 gap-2 w-fit flex text-xs lg:text-sm text-nowrap font-semibold items-center rounded-full px-5 py-2 text-white"
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
