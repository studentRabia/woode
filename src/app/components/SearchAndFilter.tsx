"use client"
import { useState } from "react";

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ categories, onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onFilter(value);
  };

  return (
    <div className="container py-10 mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border p-2 rounded w-full md:w-1/2"
      />
      <select title="select"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="border p-2 rounded w-full md:w-1/4"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category._id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;






// "use client";
// import React, { useState } from "react";

// interface SearchAndFilterProps {
//   categories: { _id: string; title: string }[];
//   onSearch: (term: string) => void;
//   onFilter: (category: string) => void;
// }

// const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ categories, onSearch, onFilter }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="flex flex-col md:flex-row gap-4 justify-between p-4 bg-gray-100 rounded-lg">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={(e) => {
//           setSearchTerm(e.target.value);
//           onSearch(e.target.value);
//         }}
//         className="px-3 py-2 border rounded-lg w-full md:w-1/2"
//       />

//       <select title="select"
//         onChange={(e) => onFilter(e.target.value)}
//         className="px-3 py-2 border rounded-lg w-full md:w-1/4"
//       >
//         <option value="">All Categories</option>
//         {categories.map((cat) => (
//           <option key={cat._id} value={cat.title}>
//             {cat.title}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default SearchAndFilter;
