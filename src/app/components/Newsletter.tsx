"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Product {
  title: string;
  price: number;
  imageUrl: string;
  category: {
    title: string;
  };
  description: string;
  inventory: number;
  tags: string[];
}

const NewsletterSection = () => {
  // Specify the type of the state as Product[]
  const [instagramProducts, setInstagramProducts] = useState<Product[]>([]);

  // Fetch products with Instagram tag
  useEffect(() => {
    const fetchInstagramProducts = async () => {
      const query = `*[_type == "products" && "instagram" in tags] {
        title,
        price,
        "imageUrl": image.asset->url,
        category->{
          title
        },
        description,
        inventory,
        tags
      }`;
      try {
        const products: Product[] = await client.fetch(query); // Ensure type is Product[]
        setInstagramProducts(products);
      } catch (error) {
        console.error("Error fetching Instagram products:", error);
      }
    };

    fetchInstagramProducts();
  }, []);

  return (
    <section className="bg-gray-100 py-10 px-4 lg:px-8">
      {/* Newsletter */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold my-7">Or Subscribe To The Newsletter</h2>
        <div className="flex justify-center items-center w-full space-x-5">
          <input
            type="email"
            placeholder="Email Address..."
            className="border-b border-black bg-transparent text-[#1E2832] w-full max-w-lg px-2 py-1 focus:outline-none"
          />
          <button
            type="submit"
            className="border-b border-black ml-2 text-sm font-medium uppercase text-[#1E2832] hover:text-black px-2 py-1"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="text-center">
        <h3 className="text-3xl font-bold my-14">
          Follow Products And Discounts On Instagram
        </h3>

        {/* Grid Container with Products */}
        <div className="mx-auto px-8 sm:px-[10%] lg:px-[16%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {instagramProducts.length > 0 ? (
            instagramProducts.map((product, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="text-center mt-2">
                  <h4 className="text-sm font-semibold">{product.title}</h4>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No Instagram products available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
