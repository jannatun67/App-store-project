import React, { useState, useEffect } from 'react';

import appsData from '../../../public/appsData.json';

import AppCard from './AppCard';
import SearchBar from './SearchBar';
import Loading from '../../components/Loading/Loading';

const Apps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState(appsData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = appsData.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearch = (term) => {
    setLoading(true);
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen w-11/12 mx-auto pt-24 pb-16">
      <div className="container-custom">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our All Applications
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <SearchBar onSearch={handleSearch} totalApps={filteredApps.length} />

        {loading ? (
          <Loading />
        ) : (
          <>
            {filteredApps.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">😕</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Apps Found</h3>
                <p className="text-gray-600">Try searching with different keywords</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredApps.map(app => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Apps;