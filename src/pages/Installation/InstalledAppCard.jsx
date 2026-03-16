import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../utils/helpers';

const InstalledAppCard = ({ app, onUninstall }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
      <div
        onClick={() => navigate(`/app/${app.id}`)}
        className="cursor-pointer"
      >
        <div className="relative overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{app.title}</h3>
          
          <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1">
              <i className="fas fa-download text-primary"></i>
              <span>{formatNumber(app.downloads)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-star text-yellow-400"></i>
              <span>{app.ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <button
          onClick={() => onUninstall(app.id)}
          className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <i className="fas fa-trash-alt mr-2"></i>
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;