import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appsData from '../../../public/appsData.json';

import { formatNumber } from '../../utils/helpers';
import Toast from '../../components/Toast/Toast';
import RatingChart from './RatingChart';

import Loading from '../../components/Loading/Loading';
import InstallButton from './InstallButton';

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const foundApp = appsData.find(a => a.id === parseInt(id));
      if (foundApp) {
        setApp(foundApp);
      }
      setLoading(false);
    }, 800);
  }, [id]);

  const handleInstall = (message) => {
    setToast({ show: true, message });
  };

  if (loading) return <Loading />;

  if (!app) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-4">🔍</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">App Not Found</h2>
          <p className="text-gray-600 mb-6">The app you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/apps')}
            className="btn-primary"
          >
            Browse Apps
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button>

        {/* App Info Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* App Image */}
            <div className="md:w-1/3">
              <div className="relative group">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* App Details */}
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{app.title}</h1>
              <p className="text-gray-600 mb-4">{app.companyName}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <i className="fas fa-star text-yellow-400 text-2xl mb-2"></i>
                  <p className="text-2xl font-bold text-gray-800">{app.ratingAvg}</p>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <i className="fas fa-download text-primary text-2xl mb-2"></i>
                  <p className="text-2xl font-bold text-gray-800">{formatNumber(app.downloads)}</p>
                  <p className="text-sm text-gray-600">Downloads</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <i className="fas fa-comment text-secondary text-2xl mb-2"></i>
                  <p className="text-2xl font-bold text-gray-800">{formatNumber(app.reviews)}</p>
                  <p className="text-sm text-gray-600">Reviews</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <i className="fas fa-hdd text-green-500 text-2xl mb-2"></i>
                  <p className="text-2xl font-bold text-gray-800">{app.size} MB</p>
                  <p className="text-sm text-gray-600">Size</p>
                </div>
              </div>

              <InstallButton app={app} onInstall={handleInstall} />
            </div>
          </div>
        </div>

        {/* Rating Chart */}
        <div className="mb-8">
          <RatingChart ratings={app.ratings} />
        </div>

        {/* Description */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed">{app.description}</p>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          onClose={() => setToast({ show: false, message: '' })}
        />
      )}
    </div>
  );
};

export default AppDetails;