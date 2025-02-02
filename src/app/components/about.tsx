// components/AboutSection.tsx
import Image from 'next/image';
import React from 'react';
import Chair from '../../../public/images/Chairwe.png';

const About: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-evenly items-stretch max-w-7xl mx-auto py-16 space-y-6 md:space-y-0">
      {/* Text Section */}
      <div className="bg-teal-700 text-white p-6 md:w-5/12 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-semibold mt-10 mb-4 mx-8">About Us - Comforty</h2>
          <p className="mb-4 mx-8">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-600 text-white py-2 px-4 rounded mb-14 mx-8 self-start">
          View collection
        </button>
      </div>
      
      {/* Image Section */}
      <div className="md:w-5/12 flex-shrink-0">
        <Image
          src={Chair}
          alt="Chair"
          width={500} // Specify width
          height={500} // Specify height
          className="w-full h-full object-cover"
          priority // Optional: Preload image for better performance
        />
      </div>
    </section>
  );
};

export default About;
