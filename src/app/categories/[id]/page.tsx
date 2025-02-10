import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { notFound } from "next/navigation";

// ✅ Manually Define PageProps
interface PageProps<T = {}> {
  params: T;
}

// TypeScript interface for category details
interface CategoryDetail {
  id: string;
  title: string;
  imageUrl: string;
  products: number;
  description: string;
}

// Fetch category details from Sanity
async function getCategoryDetails(id: string): Promise<CategoryDetail | null> {
  console.log("Fetching category for ID:", id);

  const query = `*[_type == "categories" && _id == $id][0] {
    title,
    _id,
    "imageUrl": image.asset->url,
    products,
    description
  }`;

  try {
    const category = await client.fetch(query, { id });
    return category || null;
  } catch (error) {
    console.error("Error fetching category details:", error);
    return null;
  }
}

// Generate static paths (Optional)
export async function generateStaticParams() {
  const query = `*[_type == "categories"]{ _id }`;
  const categories = await client.fetch(query);

  return categories.map((category: { _id: string }) => ({
    id: category._id,
  }));
}

// ✅ Fix: Use manually defined `PageProps`
const CategoryPage = async ({ params }: PageProps<{ id: string }>) => {
  console.log("Category ID received from URL:", params.id);
  const decodedId = decodeURIComponent(params.id);

  const category = await getCategoryDetails(decodedId);

  if (!category) return notFound();

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={category.imageUrl}
            alt={category.title}
            width={500}
            height={500}
            className="w-full max-h-96 object-contain rounded-lg"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold">{category.title}</h1>
            <p className="text-gray-600 mt-2">{category.description}</p>
            <p className="text-gray-800 font-semibold mt-4">
              Total Products: {category.products}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
