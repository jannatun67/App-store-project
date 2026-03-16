import React, { useState, useEffect } from 'react';

import Toast from '../../components/Toast/Toast';
import InstalledAppCard from './InstalledAppCard';
import { getInstalledApps, uninstallApp } from '../../utils/localStorage';
import { sortApps } from '../../utils/helpers';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    loadInstalledApps();
  }, []);

  const loadInstalledApps = () => {
    const apps = getInstalledApps();
    setInstalledApps(apps);
  };

  const handleUninstall = (appId) => {
    const newApps = uninstallApp(appId);
    setInstalledApps(newApps);
    setToast({ show: true, message: 'App uninstalled successfully!' });
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
    
    if (value === 'default') {
      loadInstalledApps();
    } else {
      const sorted = sortApps([...installedApps], value);
      setInstalledApps(sorted);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My
            </span>
            <span className="text-gray-800"> Installation</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Manage your installed apps. You have {installedApps.length} app(s) installed.
          </p>
        </div>

        {/* Sort Dropdown */}
        {installedApps.length > 0 && (
          <div className="flex justify-end mb-8">
            <select
              value={sortBy}
              onChange={handleSort}
              className="px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none"
            >
              <option value="default">Sort by</option>
              <option value="high-low">Downloads: High to Low</option>
              <option value="low-high">Downloads: Low to High</option>
            </select>
          </div>
        )}

        {/* Apps Grid */}
        {installedApps.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Installed Apps</h3>
            <p className="text-gray-600 mb-6">You haven't installed any apps yet.</p>
            <a
              href="/apps"
              className="btn-primary inline-block"
            >
              Browse Apps
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {installedApps.map(app => (
              <InstalledAppCard
                key={app.id}
                app={app}
                onUninstall={handleUninstall}
              />
            ))}
          </div>
        )}
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type="success"
          onClose={() => setToast({ show: false, message: '' })}
        />
      )}
    </div>
  );
};

export default Installation;