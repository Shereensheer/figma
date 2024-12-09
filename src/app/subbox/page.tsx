import React from 'react';

const SubscribeBox = () => {
  return (
   
    <div className="flex justify-center items-center rounded-lg  text-white h-full bg-black">
      <div className="flex flex-col md:flex-row   rounded-lg p-6  w-screen max-w-[800px]">
        {/* Left Section */}
        <div className="md:w-1/2 w-screen text-center md:text-left flex flex-col justify-center">
          <h2 className="text-4xl font-bold  mb-4">Stay Up To Date About Latest Offers</h2>
          <p >Subscribe now and never miss out on our exclusive deals and discounts!</p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-[90%] p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Subscribe to Newsletter"
            className="w-full md:w-[90%] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeBox;
