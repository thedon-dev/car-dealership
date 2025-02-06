"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold mt-10">Cars inventory</h1>
      <div className="flex gap-5">
        {cars.map((car, index) => (
          <div key={index} className="rounded">
            <Image src={car.image} alt="" width={300} height={300}></Image>
            <h2>{car.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
