import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="h-screen  w-full relative top-0 -mt-[100px] ">
      <div className="absolute w-full h-screen after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gray-950/50 after:z-10">
        <video
          src="/hero.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
      </div>
      <div className="w-full px-5 lg:px-0 lg:max-w-7xl mx-auto h-full flex flex-col text-center  relative z-50 top-1/3 lg:top-0 ">
        {/* Heading */}
        <div className="order-1 lg:order-2 lg:mt-24">
          <h1 className="text-3xl lg:text-9xl font-medium lg:font-extrabold text-white">
            AgCrop
          </h1>
        </div>

        {/* Paragraph */}
        <div className="order-2 lg:order-1 pt-4 lg:pt-36 text-left">
          <p className="text-justify w-full lg:w-[26.8%] ml-auto mr-0 text-white ">
            We are passionate about sustainable agriculture and committed to
            providing high-quality products and services that nourish both
            people and the planet.
          </p>
        </div>

        {/* Button */}
        <div className="order-3 mt-10">
          <Button className="text-gray-700 bg-gray-100">
            Get consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
