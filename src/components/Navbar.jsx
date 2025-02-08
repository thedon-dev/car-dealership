"use client";

import { useState } from "react";
import { BsX } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="relative px-[5%] lg:px-[8%] py-10">
        <div className="absolute left-0  w-full flex items-center justify-center">
          <h1 className="top-0 left-1/2 text-3xl text-blue-950 font-extrabold">
            CAR <span className="text-sm text-red-700">DEALERSHIP</span>
          </h1>
        </div>
        {/* <button>
          <FaBars />
        </button>
        <nav className="2xl:container bg-red-700 lg:bg-transparent h-screen lg:h-fit w-1/2 lg:w-full left-0 top-0 z-50 text-white lg:text-black justify-center  gap-5 fixed lg:relative flex-col lg:flex-row mx-auto border-red-600 flex lg:justify-between">
          <div className="border absolute">
            <button>
              <BsX />
            </button>
          </div>
          <ul className="flex flex-col lg:flex-row items-center gap-5">
            <li className="p-2">Home</li>
            <li className="p-2">Explore</li>
            <li className="p-2">Services</li>
          </ul>

          <ul className="flex flex-col lg:flex-row items-center gap-5">
            <li className="p-2">Feedbacks</li>
            <li className="p-2">Blogs</li>
            <li className="p-2">Contact</li>
          </ul>
        </nav> */}
      </div>
    </>
  );
};

export default Navbar;
