import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      icon: 'fa-download',
      value: '10M+',
      label: 'Downloads',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fa-star',
      value: '4.5+',
      label: 'Average Rating',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'fa-users',
      value: '5M+',
      label: 'Active Users',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="container-custom py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl`}></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl card-hover">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${stat.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;