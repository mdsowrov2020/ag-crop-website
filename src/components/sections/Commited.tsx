import React from "react";

const Commited = () => {
  return (
    <div className="w-full px-5 lg:px-0 lg:max-w-7xl mx-auto mt-16 lg:mt-24">
      <header className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[30%]">
          <h5 className="text-gray-500 text-lg">{"//"} Harvesting Legacy</h5>
          <h5 className="text-gray-700 text-lg ml-28">Palanting Tomorrow</h5>
        </div>

        <p className="w-full lg:w-[60%] text-sm text-gray-700 mt-5">
          At AgCrop, we are committed to advancing sustainable agriculture by
          delivering high-quality products and smart solutions that support both
          people and the environment. With a foundation in tradition and a
          vision for innovation, we strive to cultivate a better tomorrow for
          generations to come.
        </p>
      </header>
    </div>
  );
};

export default Commited;
