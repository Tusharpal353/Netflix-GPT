/* import React from 'react';

const MovieCardShimmer = () => {
    return (
        <div className="flex flex-wrap justify-center bg-black mx-20 pt-20 mt-10">
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
          <div className="w-40 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
            <div className="h-48 bg-gray-600 rounded-t-lg"></div>
          </div>
         
        </div>
      );
    
};

export default MovieCardShimmer;
 */
import React from 'react';

const MovieCardShimmer = () => {
    return (
        <div className="flex flex-wrap justify-center w-full pt-20 mt-10 bg-black">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-1/5 h-60 bg-gray-700 rounded-lg animate-pulse m-4">
              <div className="h-48 bg-gray-600 rounded-t-lg"></div>
            </div>
          ))}
        </div>
    );
};

export default MovieCardShimmer;
