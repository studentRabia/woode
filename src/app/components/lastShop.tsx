"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { ProductListing } from "./productsListing";
import Pagination from "./pagination";

interface Category {
  _id: string;
  title: string;
}

interface Product {
  id: string;
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageUrl: string;
  category: Category;
  inventory: number;
  description: string;
  tags: string[];
}

async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "products"] | order(_createdAt desc) {
    "id": _id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url,
    category->{ _id, title },
    inventory
  }`;
  return await client.fetch(query);
}

const LastShop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    async function getData() {
      const data = await fetchProducts();
      setProducts(data);
    }
    getData();
  }, []);

  const totalItems = products.length;
  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <div className="container py-10 mx-auto max-w-[1200px] px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-28">
        {paginatedProducts.map((product) => (
          <ProductListing product={product} key={product.id} />
        ))}
      </div>
      <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />
    
{/*     
      <Pagination totalItems={0} itemsPerPage={0} currentPage={0} onPageChange={function (page: number): void {
        throw new Error("Function not implemented.")
      } }/> */}
    </div>
  );
};

export default LastShop;
