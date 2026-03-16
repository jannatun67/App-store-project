import React from 'react';
import hero from "../../assets/hero.png"

const StatsSection = () => {
  const stats = [
    {
      value: '29.6M',
      label: 'Total Downloads',
      note: '21% More Than Last Month'
    },
    {
      value: '906K',
      label: 'Total Reviews',
      note: '46% More Than Last Month'
    },
    {
      value: '132+',
      label: 'Active Apps',
      note: '31 More Will Launch'
    }
  ];

  return (
    <div className=''>
      {/* Hero Image Centered */}
      <div className="flex justify-center mb-10">
        <img src={hero} alt="Hero" className="max-w-full h-auto" />
      </div>

      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-20">
        <div className="container-custom text-center w-11/12 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="bg-purple-800/20 rounded-2xl p-4">
                <p className="text-sm text-gray-300 mb-1">{stat.label}</p>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-3">{stat.value}</h3>
                <p className="text-sm text-purple-200 mt-1">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;