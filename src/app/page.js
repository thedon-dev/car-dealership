import Navbar from "@/components/Navbar";
import Explore from "@/sections/Explore";
import Hero from "@/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Explore />
    </div>
  );
}
