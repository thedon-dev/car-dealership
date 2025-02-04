import Navbar from "@/components/Navbar";
import Explore from "@/sections/Explore";
import Hero from "@/sections/Hero";
import { OurServices } from "@/sections/OurServices";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Explore />
      <OurServices />
    </div>
  );
}
