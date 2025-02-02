import Image from "next/image";
import HeroImage from "../../../public/images/Hero.png";

import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => (
  <section className="flex flex-col lg:flex-row items-center justify-between py-12 bg-gray-100 rounded-bl-3xl mx-auto max-w-[1200px] px-[5%]">
    {/* Left Section */}
    <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
      <p className="text-[#272343] mb-4 text-sm sm:text-base">Welcome to Chairy</p>
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-[#272343]">
        Best Furniture <br /> Collection For Your <br /> Interior
      </h1>
      <button className="flex items-center gap-2 px-6 py-2 bg-[#029FAE] text-white rounded-lg hover:text-[#272343] mt-4 sm:mt-6">
        Shop Now
        <FaArrowRightLong />
      </button>
    </div>

    {/* Right Section */}
    <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
      <Image src={HeroImage} alt="Hero Image" height={300} width={300} />
    </div>
  </section>
);

export default Hero;
