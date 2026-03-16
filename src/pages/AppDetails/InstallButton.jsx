// src/pages/AppDetails/InstallButton.jsx
import React, { useState } from 'react';
import { installApp, isAppInstalled } from '../../utils/localStorage';
import { FaDownload, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const InstallButton = ({ app, onInstall }) => {
  const [installed, setInstalled] = useState(isAppInstalled(app.id));
  const [loading, setLoading] = useState(false);

  const handleInstall = () => {
    setLoading(true);

    setTimeout(() => {
      const success = installApp(app);
      if (success) {
        setInstalled(true);
        onInstall('App installed successfully!');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleInstall}
      disabled={installed || loading}
      className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2
        ${installed 
          ? 'bg-green-500 text-white cursor-not-allowed'
          : loading
          ? 'bg-gray-400 text-white cursor-wait'
          : 'bg-[#00D390] text-black py-1 px-3 hover:shadow-xl transform hover:scale-105'
        }`}
    >
      {loading ? (
        <FaSpinner className="animate-spin" />
      ) : installed ? (
        <>
          <FaCheckCircle />
          <span>Installed</span>
        </>
      ) : (
        <>
          <FaDownload />
          <span>Install Now (291 MB)</span>
        </>
      )}
    </button>
  );
};

export default InstallButton;