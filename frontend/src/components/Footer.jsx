import React from "react";
import fbIcon from "../assets/fb 2.png";
import youtubeIcon from "../assets/youtube.png";
import xIcon from "../assets/x 3.png";
import igIcon from "../assets/ig 2.png";

const Footer = () => {
  return (
    <footer className="bg-[#2563eb] shadow-inner mt-6">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">About MedDirectory</h3>
          <p className="text-sm text-white">
            MedDirectory is a trusted platform to find and connect with licensed medical
            professionals including doctors, nurses, and researchers across the country.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="/" className="hover:text-gray">Home</a></li>
            <li><a href="/medical-professionals" className="hover:text-gray">Medical Professionals</a></li>
            <li><a href="#" className="hover:text-gray">About Us</a></li>
            <li><a href="#" className="hover:text-gray">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
          <p className="text-sm text-white">📍 Eldoret, Kenya</p>
          <p className="text-sm text-white">📞 +254 700 123 456</p>
          <p className="text-sm text-white">✉ info@meddirectory.org</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-500 hover:text-gray"><img src={fbIcon} alt="Facebook" className="w-6 h-6"/></a>
            <a href="#" className="text-gray-500 hover:text-gray"><img src={youtubeIcon} alt="Youtube" className="w-6 h-6"/></a>
            <a href="#" className="text-gray-500 hover:text-gray"><img src={xIcon} alt="X" className="w-6 h-6"/></a>
            <a href="#" className="text-gray-500 hover:text-gray"><img src={igIcon} alt="IG" className="w-6 h-6"/></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#065997]py-3 text-center text-sm text-white">
        © {new Date().getFullYear()} MedDirectory. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
