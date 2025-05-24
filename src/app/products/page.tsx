import { Suspense } from "react";
import ProductFilter from "@/components/ui/ProductFilter";
import ProductsContent from "@/components/ui/ProductsContent";
import Button from "@/components/ui/Button";

export default function ProductsPage() {
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
      {/* <section className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <ProductFilter />
        </div>

        <Suspense fallback={<p>Loading products...</p>}>
          <ProductsContent />
        </Suspense>
      </section> */}

      <Suspense fallback={<p>Loading products...</p>}>
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <ProductFilter />
          </div>
          <ProductsContent />
        </section>
      </Suspense>

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
