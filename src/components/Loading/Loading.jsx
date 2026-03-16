import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-secondary rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;