import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../utils/helpers';


const AppCard = ({ app }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/app/${app.id}`)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
        
        <p className="text-gray-500 text-sm line-clamp-2">{app.description}</p>
      </div>
    </div>
  );
};

export default AppCard;