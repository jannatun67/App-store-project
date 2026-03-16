import React from 'react';
import google from "../../assets/google.png"
import app from "../../assets/app.png"

const Banner = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="relative z-10 text-center container-custom py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          <span className="text-black">
           We Build
          </span>
          <br />
          <span className="text-gray-800"><span className='text-[#632EE3]'>Productive</span>Apps</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto">
        AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apple.com/app-store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center space-x-2"
          >
           <img src={google} alt="" />
          </a>
          
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <img src={app} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;