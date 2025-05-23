import React from "react";

const Stat = () => {
  return (
    <div className="px-5 lg:px-0 lg:max-w-7xl mx-auto mt-16 lg:mt-24">
      <div className="flex flex-wrap lg:flex-row justify-between items-center gap-8">
        <div>
          <h1 className="text-4xl lg:text-6xl text-gray-700 ">60+</h1>
          <p className="text-sm text-gray-500 pt-3">
            Types of agriculture crops
          </p>
        </div>
        <div>
          <h1 className="text-4xl lg:text-6xl text-gray-700 ">1200+</h1>
          <p className="text-sm text-gray-500 pt-3">
            Hactares of Cultivated Land
          </p>
        </div>
        <div>
          <h1 className="text-4xl lg:text-6xl text-gray-700 ">500+</h1>
          <p className="text-sm text-gray-500 pt-3">
            Partners across Bangladesh
          </p>
        </div>
        <div>
          <h1 className="text-4xl lg:text-6xl text-gray-700 ">24/7</h1>
          <p className="text-sm text-gray-500 pt-3">
            Quality Control and Logistics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
