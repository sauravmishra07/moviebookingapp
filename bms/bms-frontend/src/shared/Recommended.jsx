import React from 'react';
import { movies } from '../utils/constants';

const Recommended = () => {
  return (
    <div className='w-11/12 py-8 mx-auto bg-white'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-semibold text-gray-800'>
            Recommended Movies
          </h2>
          <span className='text-md text-red-500 cursor-pointer hover:underline font-medium'>
            See All
          </span>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {movies.map((movie, i) => (
            <div
              key={i}
              className='rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow hover:shadow-xl'
            >
              <div className='relative'>
                <img
                  src={movie.img}
                  alt={movie.title}
                  className='w-full h-[220px] sm:h-[280px] md:h-[300px] lg:h-[320px] object-cover rounded-t-lg'
                />
                <div className='absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center space-x-2'>
                  <span>⭐ {movie.rating}/10</span>
                  <span>{movie.votes}</span>
                </div>
              </div>
              <div className='px-3 py-2 bg-white'>
                <h3 className='text-sm font-semibold text-gray-800 truncate'>
                  {movie.title}
                </h3>
                <div className='flex flex-wrap mt-1 gap-1'>
                  {movie.genre.split("/").map((g, idx) => (
                    <span
                      key={idx}
                      className='text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full'
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
