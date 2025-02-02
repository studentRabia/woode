"use client";

import React from "react";
import { GiSofa } from "react-icons/gi";
import { FaFacebook, FaTwitter, FaPalfed, FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Image from "next/image";
import Footerlo from "../../../public/images/Footerlo.png";

const Footer = () => {
  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer className="text-[#272343] body-font">
        <div className="container text-[#272343] px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Brand Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="flex items-center gap-1 text-2xl title-font font-semibold text-[#272343] tracking-widest mb-3">
                <GiSofa className="text-[#029FAE] size-10 w-9" />
                Comforty
              </h2>
              <nav className="list-none mb-10">
                <ul>
                  <li>
                    <h3>
                      Vivamus tristique odio sit amet velit semper,
                      <br /> eu posuere turpis interdum.
                      <br />
                      Cras egestas purus
                    </h3>
                  </li>
                </ul>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex items-center justify-center rounded-full h-14 w-14 border-2 border-[#029FAE]">
                    <FaFacebook className="bg-[#029FAE] size-7 rounded-full" />
                  </div>
                  <FaTwitter className="size-5" />
                  <CiInstagram className="size-5" />
                  <div
                    onClick={scrollToTop}
                    aria-label="Scroll to Top"
                    className=" flex items-center justify-center text-[#272343]  hover:text-[#029FAE] transition duration-300"
                  >
                  <FaPalfed className="size-5" />
                  
                  </div>
                  

                  <FaYoutube className="size-5" />

                  {/* Arrow Icon to Scroll to Top */}
                 
                </div>
              </nav>
            </div>

            {/* Categories Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <ul>
                  <li>
                    <a className="text-gray-600 font-bold hover:text-gray-800">Sofa</a>
                  </li>
                  <li>
                    <a className="text-gray-600 font-bold hover:text-gray-800">Armchair</a>
                  </li>
                  <li>
                    <a className="text-[#029FAE] hover:text-gray-800 underline underline-offset-2">
                      Desk Chair
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 font-bold hover:text-gray-800">
                      Wooden Chair
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 font-bold hover:text-gray-800">
                      Park Bench
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Support Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">
                Support
              </h2>
              <nav className="list-none mb-10">
                <ul>
                  <li>
                    <a className="text-gray-600 font-bold hover:text-gray-800">
                      Help & Support
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 font-bold hover:text-gray-800">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 font-bold hover:text-gray-800">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 font-bold hover:text-gray-800">Help</a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Newsletter Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">
                Newsletter
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <input
                    placeholder="Your email"
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-[#272343] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#272343] rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-[#686380] text-sm mt-2 md:text-left text-center">
                Bitters chicharrones fanny pack
                <br className="lg:block hidden" />
                waistcoat green juice
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="lg:bg-gray-100 sm:bg-[#272343] text-black">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm sm:text-white lg:text-[#272343] sm:ml-6 sm:mt-0 mt-4">
              © 2021 - Blogy - Designed & Developed by Zakirsoft
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Image src={Footerlo} alt="footer pic" width={227} height={27} />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
