import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Explore from "@/sections/Explore";
import Feedback from "@/sections/Feedback";
import Hero from "@/sections/Hero";
import { OurServices } from "@/sections/OurServices";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed z-20 bottom-5 right-5">
        <Link
          href="/admin/viewcars"
          className="rounded-full font-semibold text-white px-5 py-3 bg-red-700"
        >
          View Admin
        </Link>
      </div>
      <Navbar />
      <Hero />
      <Explore />
      <OurServices />
      {/* <Feedback /> */}
      <Footer />
    </div>
  );
}
