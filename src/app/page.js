import Navbar from "@/components/Navbar";
import Explore from "@/sections/Explore";
import Feedback from "@/sections/Feedback";
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
      <Feedback />
    </div>
  );
}
