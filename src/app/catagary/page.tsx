'use client';
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronRight, FaChevronUp, FaStar } from 'react-icons/fa';

const Page = () => {
  const [isExpanded] = useState(false);

  const products = [
    { id: 1, Image: "/pink.png", title: "Gradient Graphic T-shirt", price: "$145" },
    { id: 2, Image: "/peech.png", title: "Polo with Tipping Details", price: "$180" },
    { id: 3, Image: "/white.png", title: "Black Striped T-shirt", price: "$120" },
    { id: 4, Image: "/jeans.png", title: "SKINNY FIT JEANS", price: "$240" },
    { id: 5, Image: "/ma.png", title: "CHECKERED SHIRT", price: "$180" },
    { id: 6, Image: "/org.png", title: "SLEEVE STRIPED T-SHIRT", price: "$130" },
    { id: 7, Image: "/shirt.png", title: "VERTICAL STRIPED SHIRT", price: "$212" },
    { id: 8, Image: "/tshirt.png", title: "COURAGE GRAPHIC T-SHIRT", price: "$145" },
    { id: 9, Image: "/short.png", title: "LOOSE FIT BERMUDA SHORTS", price: "$80" },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-gray-100 p-4">
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
              {["T-Shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((category, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between cursor-pointer"
                >
                  {category}
                  <FaChevronRight className="text-gray-500" />
                </li>
              ))}
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
                alt="Price Range"
                height={200}
                width={400}
              />
            </div>
          </div>

          {/* Dress Style Images */}
          <div className="mt-6 flex flex-col space-y-4 items-center">
            {["/color.png", "/size (2).png", "/style.png"].map((src, index) => (
              <Image key={index} src={src} alt={`style-${index}`} height={200} width={400} />
            ))}
          </div>

          {/* Apply Filter Button */}
          <div className="mt-4 flex justify-center">
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Apply Filter
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1 p-4">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-center mb-6">
            CASUAL DRESS
          </h1>
          <div
            className={`grid gap-6 ${isExpanded ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1' : 'lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1'}`}
          >
            {products.map((product) => (
              <div key={product.id} className="text-center">
                <Image
                  src={product.Image}
                  alt={product.title}
                  height={250}
                  width={250}
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
          <div className="flex justify-between items-center mt-6 flex-wrap">
            <button className="text-blue-500 hover:underline">Previous</button>
            <div className="flex flex-wrap space-x-2 mt-2">
              {Array(10)
                .fill(0)
                .map((_, index) => (
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
