"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
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

  const deleteItem = () => {};
  return (
    <div className="">
      <div className="2xl:container mx-auto">
        <h1 className="text-center text-4xl font-bold mt-10">Cars inventory</h1>
        <div className="w-full mt-14 hide-scroll flex overflow-x-scroll flex-shrink-0 pb-5 px-10">
          {cars.map((car, index) => (
            <div
              key={index}
              className="grid grid-cols-2 w-[30rem] flex-shrink-0"
            >
              <Image
                src={car.image}
                width={600}
                height={300}
                alt="Tesla-Model"
                className="h-[55%] object-cover rounded-lg mt-20 z-10"
              ></Image>
              <div className="relative bg-white rounded-lg p-5 -translate-x-20">
                <h1 className="font-bold text-xl">{car.name}</h1>
                <h4 className="text-gray-500 text-sm font-semibold mt-1">
                  {car.status}
                </h4>
                <div className="ms-20 mt-5">
                  <div className="flex flex-col gap-1 text-xs lg:text-sm">
                    <p className="text-gray-500 font-semibold flex justify-between">
                      Model Year:{" "}
                      <span className="text-black">{car.modelYear}</span>{" "}
                    </p>
                    <p className="text-gray-500 font-semibold flex justify-between">
                      Model: <span className="text-black">{car.model}</span>{" "}
                    </p>
                    <p className="text-gray-500 font-semibold flex justify-between">
                      Power: <span className="text-black">{car.power}</span>{" "}
                    </p>
                  </div>
                  <h2 className="mt-7 font-bold text-xl">${car.price}</h2>
                  <div className="mt-5">
                    <a
                      href=""
                      className="bg-blue-950 gap-2 w-fit flex text-xs lg:text-sm text-nowrap font-semibold items-center rounded-full px-5 py-2 text-white"
                    >
                      Order Now
                      <FaArrowRight />
                    </a>
                  </div>
                  <div className="absolute left-0 bottom-0 p-[0.8rem]">
                    <button onClick={deleteItem} className="">
                      <BsTrash color="red" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
