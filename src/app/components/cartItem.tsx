import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface CartItem {
  id: number;
  imageUrl: string;
  title: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

const CartPage: React.FC = () => {
  const cartItems: CartItem[] = [
    {
      id: 1,
      imageUrl: "/images/Chair.png",
      title: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
    },
    {
      id: 2,
      imageUrl: "/images/WheelCh.png",
      title: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-10">
      {/* Outer Container */}
      <div className="max-w-[1200px] mx-auto bg-white p-6 md:p-8 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Left Section: Bag */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Bag</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center justify-between border-b pb-6 mb-6"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* Image */}
                  <Image
                    src={item.imageUrl}
                    width={500}
                    height={500}
                    alt={item.title}
                    className="w-full sm:w-44 h-44 object-fill object-center rounded-lg"
                  />
                  {/* Item Details */}
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-500">{item.color}</p>
                    <p className="text-gray-500">
                      Size: {item.size} | Quantity: {item.quantity}
                    </p>
                    <div className="flex items-center gap-4 mt-4 text-xl">
                      <FaRegHeart className="cursor-pointer text-gray-500 hover:text-red-500" />
                      <RiDeleteBin6Line className="cursor-pointer text-gray-500 hover:text-red-500" />
                    </div>
                  </div>
                </div>
                {/* Price */}
                <p className="text-lg font-semibold mt-4 sm:mt-0">
                  MRP: ${item.price}
                </p>
              </div>
            ))}
          </div>

          {/* Right Section: Summary */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$198.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Total</span>
              <span>$198.00</span>
            </div>
            <button className="w-full bg-teal-500 text-white py-3 rounded-full hover:bg-teal-600 transition-all">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
