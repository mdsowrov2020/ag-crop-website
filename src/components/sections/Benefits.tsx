import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="w-full px-5 lg:px-0 lg:max-w-7xl mx-auto mt-0 lg:mt-24">
      <header className="mt-16 lg:mt-0">
        <div>
          <h5 className="text-gray-500 text-lg">
            {"//"} Innovation in agriculture
          </h5>
          <h5 className="text-gray-700 text-lg ml-32">Growth for all</h5>
        </div>

        <div className="mt-20">
          <h5 className="text-gray-700 text-lg">Benefits</h5>
          <div className="flex flex-col lg:flex-row  justify-between items-center">
            <h3 className="text-gray-700 text-lg lg:text-2xl tracking-wide w-full lg:w-[63%] font-semibold py-10 ">
              <span className="text-gray-500">We offer more than products</span>{" "}
              - we build lasting partnerships through innovation and care.
            </h3>
            <Button className="text-gray-100 bg-green-800">
              Get consultation
            </Button>
          </div>
        </div>
      </header>

      <div className="relative h-full w-full py-10 lg:py-0 px-6 lg:px-0 mt-20 lg:mt-0 lg:h-[550px]">
        <Image
          src="/benefits.jpg"
          alt="Benifits"
          fill
          objectFit="cover"
          className="object-cover"
        />

        <div className="relative lg:absolute w-full lg:w-1/2 lg:top-1/2 lg:right-[2%] lg:transform lg:-translate-y-1/2 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <div className="p-6 bg-gray-200/60 backdrop-blur-2xl">
              <h5 className="text-xl text-gray-800">
                1. Quality and Reliability
              </h5>
              <p className="text-gray-600 text-sm pt-7">
                We maintain high standards at every stage - from the field to
                delivery. Quality control is our priority.
              </p>
            </div>
            <div className="p-6 bg-gray-200/60 backdrop-blur-2xl">
              <h5 className="text-xl text-gray-800">2. Sustainable approach</h5>
              <p className="text-gray-600 text-sm pt-7">
                We use eco-friendly methods and care for land and resources.
                Working for the good of future generations.
              </p>
            </div>
            <div className="p-6 bg-gray-200/60 backdrop-blur-2xl">
              <h5 className="text-xl text-gray-800">3. Professional support</h5>
              <p className="text-gray-600 text-sm pt-7">
                We provide expert advice and ongoing assistance. From first
                contact to harvest - we&apos;re here for you.
              </p>
            </div>
            <div className="p-6 bg-gray-200/60 backdrop-blur-2xl">
              <h5 className="text-xl text-gray-800">
                4. Flexibility and speed
              </h5>
              <p className="text-gray-600 text-sm pt-7">
                We adapt to you needs and respond quickly. Your success is our
                priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
