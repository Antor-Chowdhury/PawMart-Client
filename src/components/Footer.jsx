import React from "react";
import { Link } from "react-router";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/pets-supplies">Pets & Supplies</Link>
      <Link to="#">About Us</Link>
      <Link to="#">Contact</Link>
      <Link to="#">FAQs</Link>
      <Link to="#">Terms & Conditions</Link>
    </>
  );
  return (
    <div className="flex flex-col items-center justify-center bg-[#ede9e6] text-gray-500 pt-20 pb-10 text-center px-2.5">
      <Link to="/" className="flex items-center gap-1">
        <h1 className="text-xl md:text-2xl gradient-text font-bold text-black">
          🐾 Paw<span className="text-[#ff8c00]">Mart</span>
        </h1>
      </Link>
      <p className="my-5 max-w-3xl md:text-lg">
        PawMart is a digital marketplace where pet owners and buyers connect for
        adoption services and quality pet care items.
      </p>
      <div className="flex items-center justify-center gap-10 flex-wrap mb-5">
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <FaXTwitter />
        </a>
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <RiInstagramFill />
        </a>
      </div>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {links}
      </div>
      <hr className="w-[50%] h-2 text-gray-300 mt-8 mb-2" />
      <p>© 2025 PawMart. All rights reserved.</p>
    </div>
  );
};

export default Footer;
