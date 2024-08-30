import React from 'react';

const MovieCardShimmer = () => {
  return (
    <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse mx-2">
      <div className="h-48 bg-gray-600 rounded-t-lg"></div>
      <div className="h-12 bg-gray-600 rounded-b-lg mt-2"></div>
    </div>
  );
};

export default MovieCardShimmer;
