// // FutureProduct.tsx
// import Image from "next/image";
// import React from "react";
// import { client } from "@/sanity/lib/client";
// import { CiShoppingCart } from "react-icons/ci";

// export const dynamic = "force-dynamic"; // Ensure server-side rendering

// const FutureProduct = async () => {
//   const query = `*[_type == "products" && "featured" in tags]{
//     _id,
//     title,
//     price,
//     priceWithoutDiscount,
//     badge,
//     "imageUrl": image.asset->url,
//     category->{
//       title
//     },
//     description,
//     inventory,
//     tags
//   }`;

//   const fetchData = await client.fetch(query);

//   return (
//     <div>
//       <section className="bg-white body-font">
//         <div className="container py-10 mx-auto max-w-[1200px] px-4">
//           <div className="flex flex-wrap -m-4">
//             {/* Product Cards */}
//             {fetchData.map((product: any) => (
//               <div key={product._id} className="p-4 w-full sm:w-1/2 lg:w-1/4">
//                 <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
//                   <Image
//                     className="lg:h-48 md:h-36 w-full object-cover object-center"
//                     src={product.imageUrl || "/fallback-image.png"} // Add a fallback image
//                     alt={product.title}
//                     width={300}
//                     height={300}
//                   />
//                   <div className="p-6">
//                     <h2 className="text-lg font-medium text-gray-900 mb-3">{product.title}</h2>
//                     <p className="text-sm text-gray-600 mb-2">{product.description}</p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-lg font-semibold">${product.price}</span>
//                       <CiShoppingCart className="bg-[#029FAE] text-white p-2 rounded-full w-8 h-8 cursor-pointer" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FutureProduct;




// FutureProduct.tsx
"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { CiShoppingCart } from "react-icons/ci";

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string | null; // Nullable if badge is not always present
  imageUrl: string; // URL of the product image
  category: {
    _id: string;
    title: string;
  } | null; // Nullable if no category is assigned
  description: string; // Product description
  inventory: number; // Inventory count
  tags: string[]; // Array of tags
}


const FutureProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products" && "featured" in tags]{
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url,
        category->{
          title
        },
        description,
        inventory,
        tags
      }`;

      try {
        const fetchData = await client.fetch(query);
        setProducts(fetchData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <section className="bg-white body-font">
        <div className="container py-10 mx-auto max-w-[1200px] px-4">
          <div className="flex flex-wrap -m-4 ">
            {/* Product Cards */} 
            {products.map((product) => (
              <div key={product._id} className="p-4 w-full sm:w-1/2 lg:w-1/4 hover:scale-105 transition-transform duration-300">
                <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm ">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={product.imageUrl || "/fallback-image.png"} // Add a fallback image
                    alt={product.title}
                    width={300}
                    height={300}
                  />
                  <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-3">{product.title}</h2>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">${product.price}</span>
                      <CiShoppingCart className="bg-[#029FAE] text-white p-2 rounded-full w-8 h-8 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureProduct;
