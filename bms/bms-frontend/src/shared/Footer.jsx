import React from "react";
import mainlogo from "../assets/main-icon.png";
import { Dribbble, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-400 text-sm">
      <div className="border-t border-gray-600 w-full px-4 md:px-32 py-6">

        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <img src={mainlogo} alt="logo" className="w-24 md:w-28 mb-4" />
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
          <Facebook className="w-8 h-8 p-2 rounded-full bg-red-500/50 text-white" />
          <Instagram className="w-8 h-8 p-2 rounded-full bg-red-500/50 text-white" />
          <Twitter className="w-8 h-8 p-2 rounded-full bg-red-500/50 text-white" />
          <Youtube className="w-8 h-8 p-2 rounded-full bg-red-500/50 text-white" />
          <Linkedin className="w-8 h-8 p-2 rounded-full bg-red-500/50 text-white" />
          <Dribbble className="w-8 h-8 p-2 rounded-full bg-red-500/50 text-white" />
        </div>

        {/* Copyright */}
        <div className="text-center md:text-left mb-2">
          <p>
            &copy; 2025 c bookmyscreen pvt ltd. All rights reserved.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="text-center md:text-left text-xs leading-relaxed">
          <small>
            The content and images used on this site are copyright protected and
            copyrights vest with the respective owners. The usage of the content
            and images on this website is intended to promote the works and no
            endorsement of the artist shall be implied.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
