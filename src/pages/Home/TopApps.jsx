import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppCard from '../Apps/AppCard';
import appsData from '../../../public/appsData.json';

const TopApps = () => {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8);

  return (
    <div className="container-custom py-16">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Top <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Apps</span>
          </h2>
          <p className="text-gray-600">Most popular apps this week</p>
        </div>
        
        <button
          onClick={() => navigate('/apps')}
          className="group flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <span>Show All</span>
          <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topApps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default TopApps;