import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <div>
      <section className="body-font text-white h-screen bg-[#F2F0F1] flex justify-center items-center">
        <div className="container mx-auto flex px-5 py-10 lg:flex-row flex-col items-center">
          {/* Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="font-bold text-black sm:text-6xl text-4xl mb-6 leading-tight">
              FIND CLOTHES<br /> THAT MATCHES<br /> YOUR STYLE
            </h1>
            <p className="mb-8 leading-relaxed text-black sm:text-lg text-base">
              Browse through our diverse range of meticulously crafted garments,
              <br className="hidden sm:block" />
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-3xl text-lg">
                Shop Now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center w-full md:w-1/2">
            <Image
              className="object-center rounded max-w-full h-auto"
              alt="hero"
              src="/Rectangle 2.png"
              height={500}
              width={500}
              priority
            />
            {/* Decorative Images */}
            <div className="absolute top-[100px] mr-96 mt-24  ">
              <Image
                src="/star.png"
                alt="Star Decoration"
                height={100}
                width={50}
                className="w-[-50px] h-[-50px]"
              />
            </div>
            <div className="absolute top-[50px] right-[-50px] ml-2 mr-32">
              <Image
                src="/vstar.png"
                alt="V Star Decoration"
                height={200}
                width={200}
                className="w-[150px] h-auto top-44 "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
