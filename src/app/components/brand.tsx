// components/BrandDifferentiators.tsx
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { VscBrowser } from "react-icons/vsc";
import { LuSprout } from "react-icons/lu";


const BrandDifferentiators: React.FC = () => {
  return (
    <section className="py-12 bg-white ">
      <div className="container mx-auto  lg:px-40 text-center  ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#007580]">
          {/* Card 1 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition text-[#007580] bg-gray-100 text-start ">
            <div className="text-teal-500 text-3xl mb-4">
              {/* Icon */}
              <FaShippingFast />

            </div>
            <h3 className="text-lg font-semibold mb-2">Next day as standard</h3>
            <p >
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
             {/* Card 2 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition text-[#007580] bg-gray-100 text-start ">
            <div className="text-teal-500 text-3xl mb-4">
              {/* Icon */}
              <FaRegCheckCircle />

            </div>
            <h3 className="text-lg font-semibold mb-2">Made by true artisans</h3>
            <p >
            Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
           {/* Card 3 */}
           <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition text-[#007580] bg-gray-100 text-start ">
            <div className="text-teal-500 text-3xl mb-4">
              {/* Icon */}
              <VscBrowser />

            </div>
            <h3 className="text-lg font-semibold mb-2">Unbeatable prices</h3>
            <p >
            For our materials and quality you won’t find better prices anywhere
            </p>
          </div>
           {/* Card 4 */}
           <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition text-[#007580] bg-gray-100 text-start ">
            <div className="text-teal-500 text-3xl mb-4">
              {/* Icon */}
              <LuSprout />

            </div>
            <h3 className="text-lg font-semibold mb-2">Recycled packaging</h3>
            <p >
            We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default BrandDifferentiators;
