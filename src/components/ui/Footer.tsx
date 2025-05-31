import Link from "next/link";
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Leaf,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-5 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  AgCrop
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                Rooted in expertise, growing for a sustainable future.
                Empowering farmers with innovative agricultural solutions.
              </p>

              {/* Newsletter Signup */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h5 className="text-xl font-semibold text-white mb-6 relative">
                Explore
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </h5>
              <ul className="space-y-4">
                {[
                  "Home",
                  "About",
                  "Products",
                  "Services",
                  "Blog",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h5 className="text-xl font-semibold text-white mb-6 relative">
                Get in Touch
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </h5>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>+88 01687458957</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>agcrop@mail.com</span>
                </li>
              </ul>

              {/* Business Hours */}
              <div className="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                <h6 className="text-white font-medium mb-2">Business Hours</h6>
                <p className="text-gray-400 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-400 text-sm">Sat: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className="text-gray-400">
                © {new Date().getFullYear()} AgroCrop. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 animate-pulse"></div>
    </footer>
  );
};

export default Footer;
