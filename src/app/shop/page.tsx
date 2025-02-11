// "use client";
// import { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import { ProductListing } from "../components/productsListing";
// import SearchAndFilter from "../components/SearchAndFilter";
// import Pagination from "../components/pagination";
// import NewsletterSection from "../components/Newsletter";


// interface Category {
//   _id: string;
//   title: string;
//   products: number;
//    imageUrl: string;
// }

// async function fetchProducts(): Promise<Product[]> {
//   const query = `*[_type == "products"] | order(_createdAt desc) {
//     "id": _id,
//     title,
//     price,
//     priceWithoutDiscount,
//     badge,
//     "imageUrl": image.asset->url,
//     category->{
//       _id,
//       title
//     },
//     inventory
//   }`;
//   return await client.fetch(query);
// }

// const Shop = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8; // Adjust as needed

//   useEffect(() => {
//     async function getData() {
//       const data = await fetchProducts();
//       setProducts(data);
//       setFilteredProducts(data);

//       // Extract unique categories
//       const uniqueCategories = Array.from(
//         new Map(data.map((p) => [p.category._id, { ...p.category, products: 0, imageUrl: '' }])).values()
//       );
//       setCategories(uniqueCategories);
//     }
//     getData();
//   }, []);

//   const handleSearch = (term: string) => {
//     const filtered = products.filter((p) =>
//       p.title.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//     setCurrentPage(1); // Reset to first page
//   };

//   const handleFilter = (category: string) => {
//     if (!category) {
//       setFilteredProducts(products);
//     } else {
//       setFilteredProducts(products.filter((p) => p.category.title === category));
//     }
//     setCurrentPage(1); // Reset to first page
//   };

//   // **Pagination Logic**
//   const totalItems = filteredProducts.length;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);




//   return (
//     <div>
//       <SearchAndFilter categories={categories} onSearch={handleSearch} onFilter={handleFilter} />
//       <div className="container py-10 mx-auto max-w-[1200px] px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-28">
//       {paginatedProducts.map((product) => (
//   <ProductListing product={product} key={product._id || product._id || Math.random()} />
// ))}



//       </div>
//       {/* Pagination Component */}
//       <Pagination
//         totalItems={totalItems}
//         itemsPerPage={itemsPerPage}
//         currentPage={currentPage}
//         onPageChange={setCurrentPage}
        
//       />


//       <NewsletterSection/>

      
//     </div>
//   );
// };

// export default Shop;
"use client"
import FutureProduct from "../components/futureProduct"
import LastShop from "../components/lastShop"
import NewsletterSection from "../components/Newsletter"
import SearchAndFilter from "../components/SearchAndFilter"
import Titlebar from "../components/titlebar"


const Shop = () => {
  return (
    <div>
          <Titlebar title="All Products"/>

      <SearchAndFilter categories={[]} onSearch={function () {
        throw new Error("Function not implemented.")
      } } onFilter={function (): void {
        throw new Error("Function not implemented.")
      } }/>

<FutureProduct/>
  <LastShop/>

<NewsletterSection/>
    </div>
  )
}

export default Shop
