import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
   <div className="bg-gradient-to-r from-gray-900 to-gray-800">
     <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-20 w-11/12 mx-auto">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">
              <img src={logo} alt="logo" className="w-15" />
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover the best apps for your device. From productivity to
              entertainment, we've got everything you need.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  My Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-primary" />
                <span>support@appstore.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; 2026 AppStore. All rights reserved. Made with{" "}
            <FaHeart className="inline text-secondary" /> by Your Team
          </p>
        </div>
      </div>
    </footer>
   </div>
  );
};

export default Footer;