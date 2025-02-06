"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Feedback = () => {
  const feedbacks = [
    { id: 1, name: "John Doe", feedback: "Great service! Highly recommend." },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "The team was amazing to work with!",
    },
    { id: 3, name: "Michael Brown", feedback: "Exceeded my expectations." },
    { id: 4, name: "Sarah Johnson", feedback: "Very professional and fast." },
    {
      id: 5,
      name: "Chris Evans",
      feedback: "Will definitely come back again.",
    },
    { id: 6, name: "Emma Wilson", feedback: "Fantastic customer support." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalFeedbacks = feedbacks.length;
  const itemsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalFeedbacks);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalFeedbacks) % totalFeedbacks);
  };

  return (
    <div className="my-20">
      <div className="2xl:container mx-auto">
        <div className="flex items-center justify-center gap-2">
          <div className="w-[10rem] h-fit border border-gray-500"></div>
          <h1 className="text-xl">Our Customer Feedback</h1>
          <div className="w-[10rem] h-fit border border-gray-500"></div>
          <div className="mt-10"></div>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <div className="relative flex items-center">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <FaChevronLeft />
            </button>
            <div className="flex space-x-4 overflow-hidden w-full justify-center">
              {feedbacks
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((feedback) => (
                  <div></div>
                ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
