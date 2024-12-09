'use client';
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center py-16">New Arrivels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={200}
            src="/image 7.png"
            alt="Product 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
           
            <h3 className="mt-2 text-lg font-semibold">T-SHIRT WITH TAPE DETAILS</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$120</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/image 10.png"
            alt="Product 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
           
            <h3 className="mt-2 text-lg font-semibold">SKINNY FIT JEANS</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$240 $260 -20%</p>
                                                        
          
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/ma.png"
            alt="Product 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
           
            <h3 className="mt-2 text-lg font-semibold">CHECKERED SHIRT</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$180</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/org.png"
            alt="Product 4"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
           
            <h3 className="mt-2 text-lg font-semibold">SLEEVE STRIPED T-SHIRT</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$130 $160-30%</p>
           
  </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
