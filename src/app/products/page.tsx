"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ProductFilter from "@/components/ui/ProductFilter";
import Button from "@/components/ui/Button";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const filterCategory = searchParams.get("category");

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

  const filteredProducts = filterCategory
    ? products.filter((p) => p.category === filterCategory)
    : products;

  return (
    <main className="w-full px-5 lg:px-0 lg:max-w-7xl min-h-screen py-16 mx-auto">
      {/* Hero */}
      <section className="text-left mb-16">
        <h5 className="text-sm md:text-2xl text-gray-700">Our Products</h5>
        <p className="text-gray-600 text-sm w-full lg:w-[30%] mt-5">
          Explore our range of high-performance agrochemical products designed
          to protect and enhance your crops.
        </p>
      </section>

      {/* Filter + Product Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Filter Column */}
        <div className="lg:col-span-1">
          <ProductFilter />
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white border border-gray-100 rounded-lg  hover:shadow-xl transition"
            >
              <div className="h-56 w-full relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg "
                />
                <span className="inline-block text-[12px] text-gray-100 py-1 px-5 rounded-full bg-gray-600/20 backdrop-blur-sm absolute z-10 bottom-2 left-2">
                  {product.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                {/* <p className="text-xs text-gray-400 mt-1">{product.category}</p> */}
                <p className="text-sm text-gray-700 mt-2">
                  {product.description}
                </p>
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
      </section>

      {/* CTA */}
      <section className="text-center mt-24">
        <h2 className="text-2xl font-bold text-green-800">
          Need Help Choosing?
        </h2>
        <p className="text-gray-600 my-2">
          Contact our team to find the right product for your crop.
        </p>
        <Button className="border border-green-700 hover:bg-green-800 text-green-700 hover:text-white font-medium shadow">
          Contact Us
        </Button>
      </section>
    </main>
  );
}
