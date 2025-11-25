/* --- MOVIE DETAILS (COMPACT VERSION) --- */

import React from "react";
import {
  Star,
  Clock,
  Calendar,
  Languages,
  Film,
  Sparkles,
  ThumbsUp,
  ChevronLeft
} from "lucide-react";
import m1 from "../assets/m1.avif";
import TheaterTimings from "../movies/TheaterTimings";

const MovieDetails = () => {
  const movie = {
    id: 1,
    title: "Maa",
    genre: "Fantasy / Horror / Mythological / Thriller",
    rating: 7.2,
    votes: "2.7K",
    img: m1,
    languages: ["English", "Hindi", "Tamil", "Telugu"],
    format: ["2D", "3D", "IMAX 3D"],
    certification: "UA16+",
    duration: "2h 24m",
    releaseDate: "2023-09-15",
    description:
      "Maa is a gripping blend of mythology and horror, taking the audience on a thrilling journey through supernatural events and ancient legends."
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#0a0a0f] via-[#111119] to-[#0a0a0f] text-white pb-10">

      <div className="relative">

        {/* BACKDROP */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={movie.img}
            className="w-full h-full object-cover opacity-30 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* POSTER */}
            <img
              src={movie.img}
              className="w-52 sm:w-60 rounded-2xl shadow-xl"
            />

            {/* TEXT SECTION */}
            <div className="flex-1 flex flex-col gap-2">

              {/* TITLE */}
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {movie.title}
              </h1>

              <p className="text-gray-300 text-sm flex items-center gap-2">
                <Film className="w-4 h-4 text-pink-500" />
                {movie.genre}
              </p>

              {/* STATS */}
              <div className="flex flex-wrap gap-3 bg-white/5 p-3 rounded-xl text-xs border border-white/10">

                <div className="flex items-center gap-1.5 bg-yellow-500/20 px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{movie.rating}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-300">
                  <ThumbsUp className="w-4 h-4" />
                  {movie.votes} votes
                </div>

                <div className="flex items-center gap-1 text-gray-300">
                  <Clock className="w-4 h-4" />
                  {movie.duration}
                </div>

                <div className="flex items-center gap-1 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  {movie.releaseDate}
                </div>

                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-lg font-semibold text-xs">
                  {movie.certification}
                </span>
              </div>

              {/* DESCRIPTION */}
              <div className="bg-white/5 p-3 rounded-xl text-sm leading-relaxed text-gray-200 border border-white/10">
                {movie.description}
              </div>

              {/* LANGUAGES */}
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-pink-500" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {movie.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700 hover:bg-pink-600 transition cursor-pointer"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* FORMATS */}
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  Experience Formats
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {movie.format.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700 hover:bg-purple-600 transition cursor-pointer"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* RATE BUTTON */}
              <button className="self-start px-6 py-2 rounded-lg text-sm bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 transition flex items-center gap-2">
                <Star className="w-4 h-4" /> Rate Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* THEATER SECTION */}
      <div className="bg-white text-black rounded-t-2xl p-6 mt-10">
        <TheaterTimings />
      </div>
    </div>
  );
};

export default MovieDetails;
