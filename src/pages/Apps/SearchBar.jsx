import React, { useState } from 'react';

const SearchBar = ({ onSearch, totalApps }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <p className="text-gray-600">
          Total <span className="font-bold text-primary">{totalApps}</span> Apps Available
        </p>
      </div>
      
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search apps by title..."
          className="w-full md:w-80 px-6 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none pr-12"
        />
        <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>
    </div>
  );
};

export default SearchBar;