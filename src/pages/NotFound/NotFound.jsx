import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800 font-poppins">404</h1>
      <h2 className="text-3xl font-bold text-primary dark:text-white mt-4 mb-6">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn-primary">
        Return to Home
      </Link>
    </div>
  );
};
export default NotFound;