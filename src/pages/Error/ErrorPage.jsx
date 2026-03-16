import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          404
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="space-x-4">
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Go Home
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="btn-secondary"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;