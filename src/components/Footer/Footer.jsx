import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                App
              </span>
              Store
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover the best apps for your device. From productivity to entertainment, we've got everything you need.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apps" className="text-gray-300 hover:text-primary transition-colors">
                  Apps
                </Link>
              </li>
              <li>
                <Link to="/installation" className="text-gray-300 hover:text-primary transition-colors">
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
                <i className="fas fa-envelope text-primary"></i>
                <span>support@appstore.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-primary"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 AppStore. All rights reserved. Made with <i className="fas fa-heart text-secondary"></i> by Your Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;