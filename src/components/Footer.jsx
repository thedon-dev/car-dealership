import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  const linkSection = [
    {
      head: "Buying & Selling",
      mainLinks: [
        {
          name: "Find a car",
          link: "",
        },
        {
          name: "Listings by city",
          link: "",
        },
        {
          name: "Sell your car",
          link: "",
        },
        {
          name: "Compare side by side",
          link: "",
        },
      ],
    },
    {
      head: "Resources",
      mainLinks: [
        {
          name: "Blog",
          link: "",
        },
        {
          name: "Guides",
          link: "",
        },
        {
          name: "FAQ",
          link: "",
        },
        {
          name: "Help Center",
          link: "",
        },
      ],
    },
    {
      head: "About",
      mainLinks: [
        {
          name: "Company",
          link: "",
        },
        {
          name: "Career",
          link: "",
        },
        {
          name: "Contact",
          link: "",
        },
      ],
    },
  ];
  return (
    <footer className="bg-slate-200 px-[5%] lg:px-[8%] py-10">
      <div className="2xl:container mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-span-1">
          <h4 className="font-bold text-sm">Subscribe To Our Newsletter</h4>
          <div className="p-2 flex bg-white rounded-full lg:w-1/2 mt-5">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Email..."
              className="ps-3 font-semibold w-full border focus:outline-none border-none"
            />
            <button className="rounded-full p-1 text-white bg-red-700 border">
              <FaAngleRight size={25} />
            </button>
          </div>
        </div>
        <div className="mt-20 lg:mt-0 lg:col-span-1 w-full flex flex-col lg:flex-row justify-between">
          {linkSection.map((links, index) => (
            <div key={index} className="text-sm">
              <h2 className="font-bold">{links.head}</h2>
              <div className="flex flex-col gap-2 mt-5">
                {links.mainLinks.map((link, index) => (
                  <Link key={index} href={link.link} className="">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2 flex flex-col lg:flex-row text-xs lg:text-sm font-semibold justify-start lg:justify-between mt-20 lg:items-center">
          <p className="">@2023 Car Leadership</p>
          <div className="flex flex-col lg:flex-row mt-5 lg:mt-0 gap-2">
            <Link href="/">Terms and Services</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Trust and Safety</Link>
            <Link href="/">Law Enforcement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
