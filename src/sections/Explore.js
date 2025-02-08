"use client";

import ExploreCar from "@/components/mainPageComp/ExploreCar";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Explore = () => {
  const buttons = ["Cars", "SUVs"];
  const [exploreNum, setExploreNum] = useState(0);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cars");
        console.log(response);
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);
  return (
    <div className="bg-gray-300 py-20">
      <div className="px-[5%] lg:px-[8%]">
        <div className="2xl:container mx-auto">
          <div className="flex items-center justify-center gap-2">
            <div className="w-[7rem] lg:w-[10rem] h-fit border border-gray-500"></div>
            <h1 className="text-lg font-bold">EXPLORE</h1>
            <div className="w-[7rem] lg:w-[10rem] h-fit border border-gray-500"></div>
          </div>
          <div className="flex gap-5 px-10 justify-center mt-10">
            {buttons.map((btn, index) => (
              <button
                onClick={() => setExploreNum(index)}
                key={index}
                className={`${
                  index == exploreNum
                    ? "bg-red-700 text-white"
                    : "bg-none text-gray-600"
                } text-sm px-4 text-nowrap py-2 rounded-full font-semibold`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-14">
        <div className="hide-scroll flex px-10 overflow-x-scroll flex-shrink-0 pb-5">
          {cars.map((car, indx) => (
            <ExploreCar key={indx} data={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
