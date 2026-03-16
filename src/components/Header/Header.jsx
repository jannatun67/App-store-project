import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'Installation', path: '/installation' },
  ];

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom  w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
         <div
  onClick={() => navigate('/')}
  className="cursor-pointer flex gap-3 items-center justify-center group"
>
  <img src={logo} alt="logo" className="w-10" />
  <span className="text-xl font-bold text-[#632EE3]">HERO.IO</span>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-lg font-medium transition-all duration-300 group
                  ${isActive
                    ? 'text-[#800080]'
                    : 'text-gray-600 hover:text-[#800080]'
                  }`
                }
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#800080] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
              </NavLink>
            ))}
          </nav>

          {/* Contribution Button - Desktop */}
          <a
            href="https://github.com/jannatun67"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-[#800080] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <FaGithub />
            <span>Contribute</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 focus:outline-none"
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-lg font-medium transition-all duration-300
                  ${isActive
                    ? 'bg-[#800080]/10 text-[#800080]'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {/* Mobile Contribute Button */}
            <a
              href="https://github.com/jannatun67"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 mt-3 bg-[#632EE3] text-white px-6 py-3 rounded-xl font-medium"
            >
              <FaGithub />
              <span>Contribute</span> 
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;