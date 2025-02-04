"use client";

import ExploreCar from "@/components/mainPageComp/ExploreCar";
import React, { useState } from "react";

const Explore = () => {
  const buttons = [
    "Cars & Minivan",
    "Vans",
    "Crossovers & SUVs",
    "Electrified",
  ];
  const [exploreNum, setExploreNum] = useState(0);
  return (
    <div className="bg-gray-300 py-20">
      <div className="px-[10%]">
        <div className="2xl:container mx-auto">
          <div className="flex items-center justify-center gap-2">
            <div className="w-[10rem] h-fit border border-gray-500"></div>
            <h1 className="text-xl">EXPLORE</h1>
            <div className="w-[10rem] h-fit border border-gray-500"></div>
          </div>
          <div className="flex gap-5 justify-center mt-10 w-1/2 mx-auto">
            {buttons.map((btn, index) => (
              <button
                onClick={() => setExploreNum(index)}
                key={index}
                className={`${
                  index == exploreNum
                    ? "bg-red-700 text-white"
                    : "bg-none text-gray-600"
                } text-sm px-4 py-2 rounded-full font-semibold`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-14">
        <div className="hide-scroll px-[10%] flex overflow-x-scroll flex-shrink-0 pb-5">
          <ExploreCar />
          <ExploreCar />
          <ExploreCar />
        </div>
      </div>
    </div>
  );
};

export default Explore;
