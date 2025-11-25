/* --- THEATER TIMINGS (COMPACT VERSION) --- */

import React, { useState } from "react";
import dayjs from "dayjs";
import { MapPin, Ticket, TrendingUp, AlertCircle } from "lucide-react";
import { theatres } from "../utils/constants";

const TheaterTimings = () => {
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState(today);
  const [activeFilters, setActiveFilters] = useState([]);

  const next7days = Array.from({ length: 7 }, (_, i) => today.add(i, "day"));

  const filters = [
    "2D",
    "3D",
    "Wheelchair Friendly",
    "Premium Seats",
    "IMAX",
    "4DX",
    "Laser",
    "Dolby Atmos"
  ];

  const toggleFilter = (f) => {
    setActiveFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4">

      {/* HEADER */}
      <h2 className="text-base font-bold text-gray-900 flex items-center gap-2 mb-1">
        <Ticket className="w-4 h-4 text-pink-600" />
        Select Your Show
      </h2>
      <p className="text-xs text-gray-600 mb-4">
        Choose your preferred date and format
      </p>

      {/* DATE SELECTOR */}
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
        {next7days.map((d, i) => {
          const active = selectedDate.isSame(d, "day");
          return (
            <button
              key={i}
              onClick={() => setSelectedDate(d)}
              className={`min-w-[70px] px-3 py-2 rounded-lg text-center text-xs transition border
                ${
                  active
                    ? "bg-pink-600 text-white border-pink-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              <span className="text-[10px]">{d.format("MMM")}</span>
              <div className="text-lg font-bold">{d.format("D")}</div>
              <span className="opacity-70">{d.format("ddd")}</span>
            </button>
          );
        })}
      </div>

      {/* FILTERS */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mt-4">
        <div className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => toggleFilter(f)}
              className={`px-3 py-1 text-xs rounded-lg transition
                ${
                  activeFilters.includes(f)
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* LEGEND */}
      <div className="flex gap-4 items-center mt-4 bg-blue-50 p-3 rounded-lg border border-blue-200 text-xs text-gray-700">
        <AlertCircle className="w-4 h-4 text-blue-600" />
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div> Available
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div> Fast Filling
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div> Almost Full
        </div>
      </div>

      {/* THEATER LIST */}
      <div className="mt-6 space-y-4">
        {theatres.map((t, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm"
          >
            <h3 className="text-sm font-bold flex items-center gap-2 text-gray-900">
              <TrendingUp className="w-4 h-4 text-pink-600" />
              {t.name}
            </h3>

            <p className="text-xs text-gray-600 flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" /> {t.location}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {t.timings.map((show, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 text-xs rounded-lg border border-gray-300 bg-gray-50 hover:border-pink-500 transition"
                >
                  <span className="flex items-center gap-1">
                    <Ticket className="w-3 h-3 opacity-70" />
                    {show.time}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TheaterTimings;
