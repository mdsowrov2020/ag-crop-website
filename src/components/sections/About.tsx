import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const About = () => {
  return (
    <div className="w-full px-5 lg:px-0 lg:max-w-7xl mx-auto mt-28">
      <header>
        <h1 className="text-3xl w-full pr-10 lg:pr-0 lg:text-7xl lg:w-[65%] text-left font-medium  text-gray-700">
          <span className="text-gray-400">Rooted in expertise</span>,<br />{" "}
          Growing for a sustainable future
        </h1>
      </header>

      <div className="flex flex-col md:flex-row justify-between mt-15">
        {/* Left part */}
        <div className="w-full lg:w-[40%]">
          <h5 className="text-sm md:text-2xl text-gray-700">About us</h5>
          <p className="text-gray-600 text-sm w-full lg:w-[82.8%] my-10">
            We are a team that combines a loves for the land with innvation. Our
            mission is to make Bangladesh agriculture efficient , sustainable
            and modern.
          </p>

          <div className="relative w-full lg:w-[75%] h-[300px] lg:h-[400px]">
            <Image
              src="/about-left.jpg"
              alt="About Left"
              objectFit="cover"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-600 text-sm w-full lg:w-[60%] my-6">
            From soil to final product - we oversee every step with care for
            quality an nature.
          </p>
          <Button className="text-gray-100 bg-green-800">
            Get consultation
          </Button>
        </div>
        {/* Right part */}

        <div className="w-full lg:w-[55%] my-44 lg:my-0">
          <div className="relative h-[400px] lg:h-full w-full">
            <Image
              src="/farming.jpg"
              alt="Farming"
              fill
              objectFit="cover"
              className="object-cover"
            />
            <div className="absolute w-[80%] lg:w-[46%] p-5  z-30 bg-gray-100/20 backdrop-blur-sm -top-16 lg:top-[25%] left-1/2 lg:-left-10 transform -translate-x-1/2 lg:-translate-x-24  lg:-translate-y-1/2 border border-gray-100/80 ">
              <h3 className="text-xl text-gray-600">
                Quickly control at every stage
              </h3>
              <p className="text-sm text-gray-500">
                We personally ensure product standards, starting from the field.
              </p>
            </div>
            <div className="absolute w-[80%] lg:w-[46%] p-5  z-30 bg-gray-100/20 backdrop-blur-sm -bottom-16 lg:bottom-[3%] left-1/2 lg:-left-20 transform -translate-x-1/2 lg:-translate-x-0  lg:-translate-y-1/2  border border-gray-100/80 ">
              <h3 className="text-xl text-gray-600">
                Modern equipment - eficient service
              </h3>
              <p className="text-sm text-gray-500">
                We invest in innovation to ensure stable growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
