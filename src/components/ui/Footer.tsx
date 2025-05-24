import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16">
      <div className=" w-full px-5 lg:px-0 lg:max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl text-gray-100">AgroCrop</h2>
            <p className="text-sm text-gray-10 mt-6">
              Rooted in expertise, <br /> Growing for a sustainable future
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex  justify-between items-center">
            <div>
              <h5 className="text-xl">Explore</h5>
              <ul className="mt-5">
                <li className="mt-4">
                  <Link href="/" className="text-sm">
                    Home
                  </Link>
                </li>
                <li className="mt-4">
                  <Link href="/about" className="text-sm">
                    About
                  </Link>
                </li>
                <li className="mt-4">
                  <Link href="/products" className="text-sm">
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl">Office Location</h5>
              <ul className="mt-5">
                <li className="mt-4">
                  <p className="text-sm">Dhaka,Bangladesh</p>
                </li>
                <li className="mt-4">
                  <p className="text-sm">+88 01687458957</p>
                </li>
                <li className="mt-4">
                  <p className="text-sm">+88 01687458957</p>
                </li>
                <li className="mt-4">
                  <p className="text-sm">+88 01687458957</p>
                </li>
                <li className="mt-4">
                  <p className="text-sm">agcrop@mail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <p>@ {new Date().getFullYear()}</p>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/"
                className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300/30 "
              >
                ic
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300/30 "
              >
                ic
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-300/30 "
              >
                ic
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
