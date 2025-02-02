import React from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  image,
}) => {
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-lg overflow-hidden">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col w-full lg:w-1/2 p-6 gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
         <div className="h-9 w-32 rounded-3xl bg-teal-500 text-white text-center flex items-center justify-center"> <p className="text-xl font-medium  text-white">{price}</p></div>
          <p className="text-gray-600">{description}</p>
          <div>
          <button className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition">
            <CiShoppingCart size={20} />
            <span>Add To Cart</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
