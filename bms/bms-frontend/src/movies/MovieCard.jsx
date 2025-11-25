import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className="w-40 md:w-52 p-1 cursor-pointer group transition-all">
      <div className="relative h-72 overflow-hidden rounded-xl shadow-lg">
        <img
          src={movie.img}
          alt={movie.title}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all duration-300"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

        <p className="absolute bottom-2 left-2 text-white text-xs bg-black/40 px-2 py-0.5 rounded-lg backdrop-blur-sm">
          ⭐ {movie.rating}
        </p>
      </div>

      <p className="mt-2 font-semibold text-sm text-gray-900 truncate">
        {movie.title}
      </p>

      <p className="text-xs text-gray-500">
        {movie.votes} votes • {movie.age}
      </p>

      <p className="text-xs text-gray-400 mt-1 truncate">
        {movie.languages}
      </p>
    </div>
  );
};

export default MovieCard;
