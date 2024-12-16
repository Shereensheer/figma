'use client';
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronRight, FaChevronUp, FaStar } from 'react-icons/fa';
import ReviewBox from "../reviews/page";

const Page = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const products = [
    { id: 1, img: "/pink.png", title: "Gradient Graphic T-shirt", price: "$145" },
    { id: 2, img: "/peech.png", title: "Polo with Tipping Details", price: "$180" },
    { id: 3, img: "/white.png", title: "Black Striped T-shirt", price: "$120" },
    { id: 4, img: "/jeans.png", title: "SKINNY FIT JEANS", price: "$240" },
    { id: 5, img: "/ma.png", title: "CHECKERED SHIRT", price: "$180" },
    { id: 6, img: "/org.png", title: "SLEEVE STRIPED T-SHIRT", price: "$130" },
    { id: 7, img: "/shirt.png", title: "VERTICAL STRIPED SHIRT", price: "$212" },
    { id: 8, img: "/tshirt.png", title: "COURAGE GRAPHIC T-SHIRT", price: "$145" },
    { id: 9, img: "/short.png", title: "LOOSE FIT BERMUDA SHORTS", price: "$80" },
  ];

  const handleViewAll = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
    <div className="flex flex-wrap lg:flex-nowrap">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-gray-100 p-4 overflow-y-auto">
        {/* Filter Heading */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold flex items-center justify-between">
            Filter
            <span className="text-gray-500">
              <FaChevronRight />
            </span>
          </h2>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2">Categories</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-between cursor-pointer">
              T-Shirts
              <FaChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between cursor-pointer">
              Shorts
              <FaChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between cursor-pointer">
              Shirts
              <FaChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between cursor-pointer">
              Hoodies
              <FaChevronRight className="text-gray-500" />
            </li>
            <li className="flex items-center justify-between cursor-pointer">
              Jeans
              <FaChevronRight className="text-gray-500" />
            </li>
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="text-md font-medium flex items-center justify-between mb-2">
            Price
            <FaChevronUp className="text-gray-500" />
          </h3>
          <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
            <Image
              src="/Group 7.png"
              alt="pro"
              height={200}
              width={400}
            />
          </div>
        </div>

        {/* Dress Style Images */}
        <div className="mt-6 flex flex-col space-y-4 items-center">
          <Image src="/color.png" alt="final" height={200} width={400} />
          <Image src="/size (2).png" alt="additional" height={200} width={400} />
          <Image src="/style.png" alt="another" height={200} width={400} />
        </div>

        {/* Apply Filter Button */}
        <div className="mt-4 flex justify-center">
          <button className="px-4 py-2 bg-black text-white rounded- hover:bg-black">
            Apply Filter
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1 p-4">
        <h1 className="text-xl font-semibold  mr-56">Causal</h1>
        <div className={`grid gap-4 ${isExpanded ? 'lg:grid-cols-4 md:grid-cols-3 grid-cols-2' : 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1'}`}>
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <Image
                src={product.img}
                alt={product.title}
                height={isExpanded ? 350 : 200} // Increased height
                width={isExpanded ? 350 : 200}
                className="object-cover mx-auto"
              />
              <h3 className="text-md font-medium mt-2">{product.title}</h3>
              <div className="flex justify-center space-x-1 text-yellow-500 mt-1">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} />
                  ))}
              </div>
              <p className="text-gray-600 mt-2">{product.price}</p>
            </div>
          ))}
        </div>
          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <button className="text-blue-500 hover:underline">Previous</button>
            <div className="flex space-x-2">
              {Array(10).fill(0).map((_, index) => (
                <button
                  key={index}
                  className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button className="text-blue-500 hover:underline">Next</button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
