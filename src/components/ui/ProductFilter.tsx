"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = ["Insecticide", "Fungicide", "Herbicide", "Plant Tonic"];

export default function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const handleFilterChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="bg-gray-50 rounded-lg  p-5 sticky top-10">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Filter by Category
      </h3>
      <ul className="space-y-2">
        <li
          onClick={() => handleFilterChange(null)}
          className={`cursor-pointer px-3 py-2  text-sm font-medium ${
            !currentCategory
              ? "bg-gray-500 text-white"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          All Products
        </li>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`cursor-pointer px-3 py-2  text-sm font-medium ${
              currentCategory === category
                ? "bg-gray-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
