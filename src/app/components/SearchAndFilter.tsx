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
    <div className="flex flex-col md:flex-row gap-4 mb-6">
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
