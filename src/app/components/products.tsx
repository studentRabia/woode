"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { client } from "@/sanity/lib/client";


const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 8;

  const fetchProducts = async (page: number) => {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage - 1;

    const query = `
      *[_type == "products"] | order(_createdAt desc)[${start}..${end}] {
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url,
        category->{
          _id,
          title
        },
        description,
        inventory,
        tags
      }
    `;
    const totalCountQuery = `count(*[_type == "products"])`;

    const [fetchedProducts, totalCount] = await Promise.all([
      client.fetch(query),
      client.fetch(totalCountQuery),
    ]);

    setProducts(fetchedProducts);
    setTotalPages(Math.ceil(totalCount / productsPerPage));
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="pb-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product:Product) => (
            <div
              key={product._id}
              className="bg-white hover:shadow-lg overflow-hidden rounded-lg shadow hover:scale-105 transition-transform duration-300"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.imageUrl || "/images/placeholder.png"}
                  alt={product.title || "Product Image"}
                  width={400}
                  height={400}
                  className="w-full h-60 object-fill object-center"
                />
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded ${
                      product.badge === "New" ? "bg-green-500" : "bg-orange-500"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1">
                  {product.title}
                </h3>
                <div className="flex items-center gap-1">
                  <p className="text-lg font-semibold text-gray-900">
                    ${product.price?.toFixed(2)}
                  </p>
                  {product.priceWithoutDiscount && (
                    <p className="text-sm line-through text-gray-400">
                      ${product.priceWithoutDiscount?.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
              {/* Add to Cart Button */}
              <div className="flex justify-end p-4">
                <button
                  title="Add to cart"
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-teal-500 hover:text-white transition duration-300"
                >
                  <CiShoppingCart />
                  <span className="text-sm">Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l hover:bg-teal-500 hover:text-white transition duration-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 bg-white text-gray-700 border-t border-b border-gray-200">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r hover:bg-teal-500 hover:text-white transition duration-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
