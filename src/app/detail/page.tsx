'use client';

import { Fullscreen } from "lucide-react";
import Image from "next/image";
import ReviewBox from "../reviews/page";

const DetailPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-white p-6">
      {/* Image Grid and Product Details Container */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        {/* Image Grid Section */}
        <div className="grid grid-cols-4 gap-4 md:w-1/2">
          {/* Left Side: 3 Vertical Images */}
          <div className="flex flex-col space-y-4">
            <Image
              src="/bro.png"
              alt="Image 1"
              className="object-cover rounded-lg"
              height={200}
              width={200}
            />
            <Image
              src="/rel.png"
              alt="Image 2"
              className="object-cover rounded-lg"
              height={200}
              width={200}
            />
            <Image
              src="/fa.png"
              alt="Image 3"
              className="object-cover rounded-lg"
              height={200}
              width={200}
            />
          </div>
          {/* Right Side: 1 Larger Image */}
          <div className="col-span-3">
            <Image
              src="/bro.png"
              alt="Large Image"
              height={500}
              width={700}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800">
            <span className="font-bold text-black">One Life Graphic T-Shirt</span>
          </h1>

          {/* Stars */}
          <div className="flex items-center mt-2 text-yellow-500">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431L24 9.576l-6 5.84L19.335 24 12 19.897 4.665 24 6 15.416 0 9.576l8.332-1.558L12 .587z" />
                </svg>
              ))}
          </div>

          {/* Price */}
          <div className="mt-3">
            <span className="text-2xl font-bold text-gray-800">$260</span>
            <span className="text-lg text-gray-500 line-through ml-3">$300</span>
          </div>

          {/* Paragraph */}
          <p className="mt-4 text-gray-600">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric,<br />
            it offers superior comfort and style.
          </p>

          {/* Select Colors Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Select Colors</h2>
            <div className="mt-4">
              <img
                src="/Frame 77.png"
                alt="Color Selection"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Select Size Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Select Size</h2>
            <div className="mt-4">
              <img
                src="/Frame 16.png"
                alt="Size Selection"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex items-center justify-between w-full mt-10 bg-white p-6 rounded-lg shadow">
            <img
              src="/Frame 17.png"
              alt="Product Preview"
              className="rounded-lg object-cover"
            />
            <button className="bg-black text-white text-lg font-semibold py-2 px-6 w-96 h-14 hover:bg-gray-800 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Details, Rating & Reviews, FAQs */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto mt-6 bg-white p-4 rounded-lg shadow">
        <span className="text-lg font-medium text-gray-800">Product Details</span>
        <span className="text-lg font-medium text-gray-800">Rating & Reviews</span>
        <span className="text-lg font-medium text-gray-800">FAQs</span>
      </div>

      {/* All Reviews and Image Row */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto mt-4 bg-white p-4 rounded-lg shadow">
        <span className="text-lg font-medium text-gray-800">
          All Reviews <span className="text-gray-500">(451)</span>
        </span>
        <Image
          src="/Frame 21.png"
          alt="Review Illustration"
          className="object-cover"
          height={100}
          width={400}
        />
      </div>

      <ReviewBox />
              <div>
                 <h1 className="text-3xl font-extrabold text-center py-16">YOU MIGHT ALSO LIKE</h1>
           
                 {/* Product Grid */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                   {/* Card 1 */}
                   <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                     <Image
                       height={100}
                       width={200}
                       src="/polo.png"
                       alt="Product 1"
                       className="w-full h-64 object-cover"
                     />
                     <div className="p-4">
                       <h3 className="mt-2 text-lg font-semibold">Polo with Contrast Trims</h3>
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
                       src="/pink.png"
                       alt="Product 2"
                       className="w-full h-64 object-cover"
                     />
                     <div className="p-4">
                       <h3 className="mt-2 text-lg font-semibold">Polo with Contrast Trims</h3>
                       <div className="flex items-center">
                         <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                       </div>
                       <p className="text-blacl">Rate: $120</p>
                     </div>
                   </div>
           
                   {/* Card 3 */}
                   <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                     <Image
                       height={100}
                       width={400}
                       src="/peech.png"
                       alt="Product 3"
                       className="w-full h-64 object-cover"
                     />
                     <div className="p-4">
                       <h3 className="mt-2 text-lg font-semibold">Polo with Tipping Details</h3>
                       <div className="flex items-center">
                         <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                       </div>
                       <p className="text-black">$180</p>
                     </div>
                   </div>
           
                   {/* Card 4 */}
                   <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                     <Image
                       height={100}
                       width={400}
                       src="/white.png"
                       alt="Product 4"
                       className="w-full h-64 object-cover"
                     />
                     <div className="p-4">
                       <h3 className="mt-2 text-lg font-semibold">Black Striped T-shirt</h3>
                       <div className="flex items-center">
                         <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                       </div>
                       <p className="text-black">$120</p>
                     </div>
                   </div>
                 </div>
      
            </div>
          </div>
          
    
  );
};

export default DetailPage;
