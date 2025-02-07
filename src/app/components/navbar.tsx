"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { GiSofa } from "react-icons/gi";
import React, { useState } from "react";
import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
import { PiWarningCircle } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { UserButton, useUser } from "@clerk/nextjs";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-[#272343] text-white flex justify-between items-center px-4 md:px-40 h-[3rem] relative lg:px-40">
      {/* Left Section */}
      <div className="flex items-center gap-2 text-sm ">
        <FaCheck /> <span>Shipping on all orders over $50</span>
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <IoClose className="size-6 text-white" />
          ) : (
            <FaBars className="size-6 text-white" />
          )}
        </button>
      </div>

      {/* Right Section */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row absolute md:relative top-[3rem] left-0 w-full bg-[#272343] md:w-auto md:top-0 md:bg-transparent md:items-center md:justify-end md:space-x-4 px-4 md:px-0`}
      >
        <select
          title="options"
          className="bg-[#272343] text-white border-none outline-none mb-2 md:mb-0 sm:w-auto overflow-hidden w-44"
          onChange={closeMenu}
        >
          <option value="english">English</option>
          <option value="urdu">Urdu</option>
          <option value="arabic">Arabic</option>
          <option value="chines">Chinese</option>
          <option value="franch">French</option>
        </select>
        <div>
          <Link href="/faqs" onClick={closeMenu}>
            Faqs
          </Link>
        </div>
        <div className="flex items-center gap-1 text-sm" onClick={closeMenu}>
          <PiWarningCircle /> Need Help
        </div>
      </div>
    </div>
  );
};

export const HeaderMid = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="h-[4rem] w-full bg-gray-100 flex flex-row justify-between items-center px-6 md:px-40 lg:px-40">
      {/* Left Section - Brand */}
      <div className="flex items-center gap-2 font-semibold text-xl">
        <GiSofa className="text-[#029FAE]" />
        Comforty
      </div>

      {/* Right Section - Cart */}
      <div className="flex justify-center items-center gap-2
      ">
      {!isSignedIn ? (
          <Link href="/login">
            <button className="bg-[#029FAE] text-white px-1 py-2 rounded-full hover:bg-[#272343]">
              SignIn
            </button>
          </Link>
        ) : (
          <UserButton/>
        )}

        <Link href={"/cart"}>
          <button className="bg-white text-black font-semibold h-11 px-4 flex items-center gap-2 border border-gray-300 rounded-md hover:shadow-md">
            <FiShoppingCart />
            <span>Cart</span>
            <TbCircleNumber2Filled className="text-[#029FAE]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle hamburger menu
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="h-[4.5rem] w-full flex justify-between items-center border-b-2 px-6 sm:px-16 md:px-40 lg:px-40 text-[#272343]">
      {/* Hamburger Icon (Visible only on small screens) */}
      <div className="sm:hidden flex items-center">
        <button onClick={handleMenuToggle} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Right Section - Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute sm:relative top-[4.5rem] left-0 sm:top-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none flex-col sm:flex-row sm:flex items-center gap-6 py-4 sm:py-0 px-4 sm:px-0`}
      >
        <Link
          href="/"
          onClick={handleLinkClick}
          className="text-[#029FAE] hover:underline hover:underline-offset-4 mb-4 sm:mb-0"
        >
          Home
        </Link>
        <Link
          href="/shop"
          onClick={handleLinkClick}
          className="text-black hover:underline hover:underline-offset-4 mb-4 sm:mb-0"
        >
          Shop
        </Link>
        <Link
          href="/product"
          onClick={handleLinkClick}
          className="text-black hover:underline hover:underline-offset-4 mb-4 sm:mb-0"
        >
          Product
        </Link>
        <Link
          href="/pages"
          onClick={handleLinkClick}
          className="text-black hover:underline hover:underline-offset-4 mb-4 sm:mb-0"
        >
          Pages
        </Link>
        <Link
          href="/about"
          onClick={handleLinkClick}
          className="text-black hover:underline hover:underline-offset-4 mb-4 sm:mb-0"
        >
          About
        </Link>
        <Link href="/categories" onClick={handleLinkClick}>
          <select
            title="options"
            className="text-black border-none outline-none mb-2 md:mb-0 sm:w-auto overflow-hidden hover:underline hover:underline-offset-4 sm:mb-0"
          >
            <option value="categories">Categories</option>
            <option value="woodenchair">Wooden Chair</option>
            <option value="deskchair">Desk Chair</option>
            <option value="wingchair">Wing Chair</option>
          </select>
        </Link>
      </nav>

      {/* Contact Information (Visible on medium and larger screens) */}
      <div className="hidden sm:block text-black text-sm">
        <Link href="/contact">Contact: (808) 555-0111</Link>
      </div>
    </div>
  );
};
