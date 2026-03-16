import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 z-50 animate-slide-up`}>
      <div className={`rounded-xl shadow-2xl p-4 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white flex items-center space-x-3`}>
        <i className={`fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} text-xl`}></i>
        <p className="font-medium">{message}</p>
        <button onClick={onClose} className="ml-4 hover:opacity-80">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Toast;