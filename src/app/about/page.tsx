import Button from "@/components/ui/Button";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}

      <div className="w-full px-5 lg:px-0 lg:max-w-7xl mx-auto pt-16 ">
        <header>
          <h1 className="text-3xl w-full pr-10 lg:pr-0 lg:text-7xl lg:w-[85%] text-left font-medium  text-gray-700">
            <span className="text-gray-400">
              We empower farmers through sustainable
            </span>
            ,<br /> science-backed crop protection solutions.
          </h1>
        </header>
      </div>

      {/* Core Content */}
      <section className="w-full px-5 lg:px-0 lg:max-w-7xl mx-auto mt-16 lg:mt-24 space-y-24">
        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h5 className="text-sm md:text-2xl text-gray-700"> Who We Are</h5>
            <p className="text-gray-600 text-sm w-full lg:w-[82.8%] my-10">
              AgroCrop is a next-generation agrochemical company committed to
              supporting farmers with effective and environmentally-responsible
              crop protection. Founded by experts in agronomy and chemistry, we
              deliver products that strike the perfect balance between
              performance and sustainability.
            </p>
          </div>
          <div>
            <h3 className="text-gray-700 text-lg lg:text-2xl tracking-wide w-full  font-semibold  ">
              “<span className="text-gray-500">Our purpose is simple:</span> to
              help farmers grow better, safer, and more profitably.”
            </h3>
          </div>
        </div>

        {/* Mission & Vision */}

        <div className="space-y-8  flex flex-col justify-center items-center">
          {/* Mission Card */}
          <div className="bg-gray-100 md:-ml-[22%]  p-6   max-w-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To deliver innovative agrochemical solutions that improve yield
              and safeguard the environment, ensuring food security for
              generations to come.
            </p>
          </div>

          {/* Vision Card with Responsive Left Offset */}
          <div className="bg-gray-100    p-6  max-w-2xl mx-auto md:ml-[35%]">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become a globally trusted name in crop protection by putting
              farmers and sustainability at the heart of everything we do.
            </p>
          </div>
        </div>

        {/* What We Do */}

        <div className="w-full px-5 lg:px-0 lg:max-w-7xl mx-auto mt-0 lg:mt-24">
          <header>
            <h5 className="text-gray-700 text-lg">What we do</h5>
          </header>

          {/* <div className="grid grid-rows-3 lg:grid-cols-3 h-auto gap-6 mt-14"> */}
          <div className="flex flex-col lg:flex-row h-auto gap-7 mt-14">
            {[
              {
                title: "Insecticides",
                desc: "Protect your crops from pest damage with fast-acting and long-lasting solutions.",
              },
              {
                title: "Fungicides",
                desc: "Combat fungal infections and diseases to ensure healthy crop development.",
              },
              {
                title: "Herbicides",
                desc: "Eliminate unwanted weeds with precision-targeted weed management products.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between h-[300px] px-5 py-6 bg-gray-200 lg:mt-12 hover:bg-green-800 transition-colors duration-300"
              >
                <header className="flex justify-between items-center">
                  <h5 className="text-lg text-gray-600 font-semibold group-hover:text-gray-50">
                    {item.title}
                  </h5>
                  <p className="text-gray-700 text-4xl -rotate-45 group-hover:text-gray-100 ">
                    <HiOutlineArrowCircleRight />
                  </p>
                </header>

                <p className="text-sm text-gray-700 w-[70%] lg:w-[90%] group-hover:text-gray-200">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Why Choose AgroCrop?
          </h2>
          <ul className="grid md:grid-cols-3 gap-6 text-gray-700 text-base">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 mt-1">✔</span> ISO-certified
              quality & safety
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 mt-1">✔</span> Eco-friendly &
              biodegradable formulas
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 mt-1">✔</span> Field-tested for
              maximum yield
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 mt-1">✔</span> Trusted by farmers
              & distributors
            </li>
          </ul>
        </div>

        {/* Sustainability Section */}

        <div className="w-full ">
          <header className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-[30%]">
              <h5 className="text-gray-500 text-lg">{"//"} Sustainability</h5>
              <h5 className="text-gray-700 text-lg ml-28">Matters</h5>
            </div>

            <p className="w-full lg:w-[60%] text-sm text-gray-700 mt-5">
              We believe that protecting crops shouldn&apos;t come at the cost
              of the environment. Our research and development focuses on
              reducing chemical impact while maximizing productivity. We
              actively educate farmers on safe usage and support regenerative
              farming practices.
            </p>
          </header>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-800">
            Grow with AgroCrop
          </h3>
          <p className="mt-2 text-gray-600">
            Let’s build a sustainable future together.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button className=" bg-green-700 hover:bg-green-800 text-white font-medium shadow">
              View Products
            </Button>

            <Button className="border border-green-700 hover:bg-green-800 text-green-700 hover:text-white font-medium shadow">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
