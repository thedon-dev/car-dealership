import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Dealership",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <button className="absolute left-32 top-10 bg-blue-950 text-white px-5 py-2 rounded">
          Back
        </button>
        <nav className="flex gap-5 w-full py-10 justify-center">
          <Link
            href="/admin/viewcars"
            className="border px-4 py-2 rounded bg-blue-950 hover:bg-blue-900 text-white"
          >
            View Cars
          </Link>
          <Link
            href="/admin/addnewcar"
            className="border px-4 py-2 rounded bg-blue-950 hover:bg-blue-900 text-white"
          >
            Add New Car
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
