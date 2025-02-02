"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  imageUrl: string;
  tags: string[];
  title:string;
}


const ChairLayout = () => {
  // Use state to store fetched data
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch data inside useEffect
    const fetchData = async () => {
      const query = `*[_type == "products" && "gallery" in tags][0..3]{
        _id,
  
        "imageUrl": image.asset->url,
       
        tags
      }`;
      const fetchedData = await client.fetch(query);
      setData(fetchedData); // Store the data in the state
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="w-full bg-gray-50 py-10">
      {/* Outer Container with 20% margin on left and right */}
      <div className="mx-[5%] lg:mx-[20%] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 ">
        
        {/* Left Section: Large Image with Side Text */}
        <div className="relative flex items-center justify-center lg:w-1/2  shadow-sm hover:scale-105 transition-transform duration-300">
          {/* Dynamically load the first product's image */}
          {data[0]?.imageUrl ? (
            <Image
              src={data[0]?.imageUrl}
              alt={data[0]?.title || "Product Image"}
              className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-auto object-cover "
              width={450}
              height={450}
            />
          ) : (
            <div className="w-[450px] h-[450px] bg-gray-200 flex items-center justify-center text-white">No Image</div>
          )}

          {/* Side Text */}
          <div className="absolute left-[-40px] sm:left-[-60px] lg:left-[-160px] top-1/2 -translate-y-1/2 rotate-[-90deg] text-sm sm:text-base lg:text-lg font-semibold text-[#272343] whitespace-nowrap">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        </div>

        {/* Right Section: Grid of Small Images */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:w-1/2">
          {data.map((product:Product, index:number) => (
            <div key={product._id} className="relative">
              {/* Dynamically load small product images */}
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.title || `Product ${index + 1}`}
                  className="w-full h-auto object-cover rounded-md shadow-sm"
                  width={300}
                  height={300}
                />
              ) : (
                <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-white">No Image</div>
              )}

              {/* Product Details (optional) */}
              {/* <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-2"> */}
                {/* <h3 className="text-sm font-semibold">{product.title}</h3> */}
                {/* <p className="text-xs">{product.price ? `$${product.price}` : "Price not available"}</p> */}
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChairLayout;
