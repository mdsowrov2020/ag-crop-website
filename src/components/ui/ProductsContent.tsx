"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

const products = [
  {
    name: "CropShield Insecticide",
    category: "Insecticide",
    description: "Powerful broad-spectrum insecticide for pest control.",
    image: "/products/insecticide.webp",
  },
  {
    name: "FungiGuard",
    category: "Fungicide",
    description: "Fights fungal infections and protects crop health.",
    image: "/products/fungicide.jpg",
  },
  {
    name: "WeedWipe Pro",
    category: "Herbicide",
    description: "Kills weeds without harming your crops.",
    image: "/products/herbicide.jpg",
  },
  {
    name: "GreenBoost",
    category: "Plant Tonic",
    description: "Improves plant immunity and overall yield.",
    image: "/products/tonic.png",
  },
];

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const filterCategory = searchParams.get("category");

  const filteredProducts = filterCategory
    ? products.filter((p) => p.category === filterCategory)
    : products;

  return (
    <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div
          key={product.name}
          className="bg-white border border-gray-100 rounded-lg hover:shadow-xl transition"
        >
          <div className="h-56 w-full relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg"
            />
            <span className="inline-block text-[12px] text-gray-100 py-1 px-5 rounded-full bg-gray-600/20 backdrop-blur-sm absolute z-10 bottom-2 left-2">
              {product.category}
            </span>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-700 mt-2">{product.description}</p>
            <a
              href="#"
              className="block mt-3 text-sm font-medium text-green-700 hover:underline"
            >
              View Details →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
