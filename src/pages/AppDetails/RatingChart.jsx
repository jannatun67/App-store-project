import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const RatingChart = ({ ratings }) => {
  const data = ratings.map(rating => ({
    name: rating.name,
    count: rating.count,
    fill: rating.name === '5 star' ? '#6366f1' : 
           rating.name === '4 star' ? '#8b5cf6' :
           rating.name === '3 star' ? '#ec4899' :
           rating.name === '2 star' ? '#f43f5e' : '#f97316'
  }));

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Rating Distribution</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff',
              borderRadius: '12px',
              border: 'none',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}
          />
          <Bar dataKey="count" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;