'use client';
import Image from "next/image";
import React from "react";

const Topselling = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center py-16">Top Selling</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={200}
            src="/shirt.png"
            alt="Product 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            
            <h3 className="mt-2 text-lg font-semibold">VERTICAL STRIPED SHIRT</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$212</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/tshirt.png"
            alt="Product 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
          
            <h3 className="mt-2 text-lg font-semibold">COURAGE GRAPHIC T-SHIRT</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">Rate: $129</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/box.png"
            alt="Product 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
           
            <h3 className="mt-2 text-lg font-semibold">LOOSE FIT BERMUDA SHORTS</h3> <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>

            <p className="text-gray-500">$80</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/jeans.png"
            alt="Product 4"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            
            <h3 className="mt-2 text-lg font-semibold">FADED SKINNY JEANS</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$210</p>
          </div>
        </div>


      </div>
 
      <div  className="ml-80 py-14">
        <Image
            height={900}
            width={1000}
            src="/Frame 60.png"
            alt="Product 4"
            className=" object-cover "
          />
</div>
    </div>
  );
};

export default Topselling;
