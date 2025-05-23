import React from "react";
import Button from "../ui/Button";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const Service = () => {
  return (
    <div className="w-full px-5 lg:px-0 lg:max-w-7xl mx-auto mt-0 lg:mt-24">
      <header>
        <h5 className="text-gray-700 text-lg">Service</h5>
        <h3 className="text-gray-700 text-lg lg:text-2xl tracking-wide w-full lg:w-[63%] font-semibold py-10 ">
          <span className="text-gray-500">Why Choose Our Service</span> for Your
          Agricultural Needs? Experience personalized support, reliable
          logistics, and expert guidance. Delivering efficiency, building trust,
          and <span className="text-gray-500">growing success - together</span>.
        </h3>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
          <p className="text-gray-700 text-sm">
            Discover the benefits of partnering with our team
          </p>
          <Button className="text-gray-100 bg-green-800">
            Get consultation
          </Button>
        </div>
      </header>

      {/* <div className="grid grid-rows-3 lg:grid-cols-3 h-auto gap-6 mt-14"> */}
      <div className="flex flex-col lg:flex-row h-auto gap-7 mt-14">
        <div className="flex flex-col justify-between h-[300px] px-5 py-6 bg-green-800">
          <header className="flex justify-between items-center">
            <h5 className="text-lg text-gray-50 font-semibold">
              Agro consulting
            </h5>
            <p className="text-gray-100 text-4xl -rotate-45 ">
              <HiOutlineArrowCircleRight />
            </p>
          </header>

          <p className="text-sm text-gray-200 w-[70%] lg:w-[90%]">
            Our experts choose the best solutions for crop cultivation,
            technology selection and yeld optimization
          </p>
        </div>

        <div className="group flex flex-col justify-between h-[300px] px-5 py-6 bg-gray-200 lg:mt-12 hover:bg-green-800 transition-colors duration-300">
          <header className="flex justify-between items-center">
            <h5 className="text-lg text-gray-600 font-semibold group-hover:text-gray-50">
              Logistics & supply
            </h5>
            <p className="text-gray-700 text-4xl -rotate-45 group-hover:text-gray-100 ">
              <HiOutlineArrowCircleRight />
            </p>
          </header>

          <p className="text-sm text-gray-700 w-[70%] lg:w-[90%] group-hover:text-gray-200">
            We provide timely delivery of seeds, fertilizers, and equipment
            across Bangladesh- fast, secure, and reliable.
          </p>
        </div>

        {/* Last col with heading-- */}
        <div>
          <header className="text-right mb-5 lg:mb-10">
            <h5 className="text-gray-500 text-lg pr-0 lg:pr-10 ">
              {"//"} Sustainable Agriculture,
            </h5>
            <h5 className="text-gray-700 text-lg">Shared Value</h5>
          </header>
          <div className="group flex flex-col justify-between h-[300px] px-5 py-6 bg-gray-200 hover:bg-green-800 transition-colors duration-300">
            <header className="flex justify-between items-center">
              <h5 className="text-lg text-gray-600 font-semibold group-hover:text-gray-50">
                Farm management support
              </h5>
              <p className="text-gray-700 text-4xl -rotate-45 group-hover:text-gray-100">
                <HiOutlineArrowCircleRight />
              </p>
            </header>

            <p className="text-sm text-gray-700 w-[70%] lg:w-[90%] group-hover:text-gray-200">
              We offer full-cycle assistance - from planning to harvest, with
              analytics, reporting, and tailored strategies for your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
