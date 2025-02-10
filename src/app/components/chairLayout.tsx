"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  imageUrl: string;
  tags: string[];
  title: string;
}

const ChairLayout = () => {
  const [data, setData] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "products" && "gallery" in tags][0..3]{
        _id,
        "imageUrl": image.asset->url,
        title,
        tags
      }`;
      const fetchedData = await client.fetch(query);
      setData(fetchedData);
      if (fetchedData.length > 0) setSelectedProduct(fetchedData[0]); // Default to first product
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-gray-50 py-10">
      <div className="mx-[5%] lg:mx-[20%] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Section: Large Image */}
        <div className="relative flex items-center justify-center lg:w-1/2 shadow-sm hover:scale-105 transition-transform duration-300">
          {selectedProduct ? (
            <Image
              src={selectedProduct.imageUrl}
              alt={selectedProduct.title || "Product Image"}
              className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-auto object-cover"
              width={450}
              height={450}
            />
          ) : (
            <div className="w-[450px] h-[450px] bg-gray-200 flex items-center justify-center text-gray-600">
              No Image
            </div>
          )}

          {/* Side Text */}
          <div className="absolute left-[-40px] sm:left-[-60px] lg:left-[-160px] top-1/2 -translate-y-1/2 rotate-[-90deg] text-sm sm:text-base lg:text-lg font-semibold text-[#272343] whitespace-nowrap">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        </div>

        {/* Right Section: Grid of Small Images */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:w-1/2">
          {data.map((product) => (
            <div key={product._id} className="relative cursor-pointer" onClick={() => setSelectedProduct(product)}>
              <Image
                src={product.imageUrl}
                alt={product.title || "Product"}
                className={`w-full h-auto object-cover rounded-md shadow-sm transition-transform duration-300 ${
                  selectedProduct?._id === product._id ? "ring-2 ring-blue-500" : ""
                }`}
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChairLayout;
