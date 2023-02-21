import React from "react";
import { GoLocation, GoMail } from "react-icons/go";
import { GiPhone } from "react-icons/gi";
import { HiPhone } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-22 bg-black md:h-[340px] ">
      <div className="hidden px-10 mx-auto text-white sm:grid mt-20 grid-cols-4 justify-items-center gap-3 py-10">
        <div className="text-[16px]  arch">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            className="w-22 "
          />
          <div className="mt-4 flex flex-col gap-2">
            <p className="flex gap-1 items-start">
              <GoLocation className="mt-1" />
              184 Main Rd E, St Albans VIC 3021, Australia
            </p>
            <p className="flex gap-1 items-start">
              <GoMail className="mt-1" />
              contact@company.com
            </p>
            <p className="flex gap-1 items-start">
              <HiPhone className="mt-1" />
              +001 2233 456
            </p>
            <div className="flex gap-4 mt-2 items-center">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
            <div></div>
          </div>
        </div>

        <div>
          <p className="arch text-2xl text-[#FFBB38]">Categories</p>
          <p className="text-[16px]  arch">Men</p>
          <p className="text-[16px] arch">Home</p>
          <p className="text-[16px]  arch">Women</p>
          <p className="text-[16px]  arch">Fashion</p>
          <p className="text-[16px]  arch">Electronics</p>
        </div>

        <div>
          <p className="arch text-2xl  text-[#FFBB38]">Infomation</p>
          <p className="text-[16px]  arch">About Us</p>
          <p className="text-[16px]  arch">Contact Us</p>
          <p className="text-[16px]  arch">Terms & Conditions</p>
          <p className="text-[16px]  arch">Returns & Exchanges</p>
          <p className="text-[16px]  arch">Privacy Policy</p>
        </div>

        <div>
          <p className="arch text-2xl  text-[#FFBB38]">Useful links</p>
          <p className="text-[16px] arch">Latest News</p>
          <p className="text-[16px]  arch">My Account</p>
          <p className="text-[16px]  arch">Size Guide</p>
          <p className="text-[16px]  arch">FAQs</p>
        </div>
      </div>

      <div className="p-4 text-gray-400 gap-4 md:hidden flex justify-center mt-10 bg-black">
        <p className="text-[16px]  arch">Categories</p>
        <p className="text-[16px]  arch">My Account</p>
        <p className="text-[16px]  arch">About</p>
        <p className="text-[16px]  arch flex gap-3 items-center">
          {" "}
          <FaFacebookF />
          <FaInstagram />
        </p>
      </div>
    </footer>
  );
};

export default Footer;