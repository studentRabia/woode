"use client"; 

import { addToCart } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ProductPage = () => {
  const params = useParams(); // ✅ Directly access params
  const { id } = params; // ✅ Extracting id correctly

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const query = `*[_type == "products" && _id == $id][0] {
        "id": _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url,
        category->{ _id, title },
        description,
        inventory,
        tags
      }`;

      const fetchedProduct = await client.fetch(query, { id });
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} Added to Cart`,
      showConfirmButton: false,
      timer: 2000,
    });
    addToCart(product);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl w-full m-10 shadow-lg rounded-lg overflow-hidden">
        <div className="relative p-4 hover:scale-105 transition-transform duration-300">
          <Image
            src={product.imageUrl || "/images/placeholder.png"}
            alt={product.title || "Product Image"}
            width={500}
            height={500}
            className="w-full max-h-96 object-contain rounded-lg"
          />
          {product.badge && (
            <span
              className={`absolute top-4 left-4 px-2 py-1 text-sm font-semibold text-white rounded ${
                product.badge === "New" ? "bg-green-500" : "bg-orange-500"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        <div className="p-16">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-6 leading-9">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <p className="text-xl font-bold text-teal-600">${product.price?.toFixed(2)}</p>
            {product.priceWithoutDiscount && (
              <p className="text-lg text-gray-500 line-through">${product.priceWithoutDiscount?.toFixed(2)}</p>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button
                          className="w-3/5 bg-gradient-to-r from-blue-950 to-purple-700 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out font-semibold mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"

              // className="w-3/5 bg-teal-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
