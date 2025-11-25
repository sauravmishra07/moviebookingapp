import React, { useState } from "react";
import mainlogo from "../assets/main-icon.png";
import { MapPin, Search, Menu, X } from "lucide-react";
import { useLocation } from "../context/LocationContext";
import map from "../assets/pin.gif";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { location, loading, error } = useLocation();

  return (
    <div className="w-full text-sm bg-white shadow-sm">
      {/* Top Navbar */}
      <div className="px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3">

          {/* Left part */}
          <div className="flex items-center space-x-3 md:space-x-4 w-full md:w-auto">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden block"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <img
              src={mainlogo}
              alt="logo"
              className="h-7 md:h-8 object-contain cursor-pointer"
            />

            {/* Search bar - Desktop only */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="border border-gray-300 rounded px-4 py-3.5 w-[300px] md:w-[400px] text-sm outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Right part */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="font-medium flex items-center text-sm cursor-pointer space-x-1">
              {/* Show loading spinner */}
              {loading && (
                <img src={map} alt="loading" className="w-7 h-7" />
              )}

              {/* Show error */}
              {error && <p className="text-red-500">{error}</p>}

              {/* Show location */}
              {!loading && !error && location && (
                <>
                  <MapPin size={16} className="text-red-600" />
                  <p>{location}</p>
                </>
              )}
            </div>

            <button className="bg-red-600 cursor-pointer text-white px-4 py-3 rounded text-sm">
              Sign in
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden w-full mt-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded px-4 py-2 w-full text-sm"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-md px-5 py-4 space-y-3 text-gray-800">
          {/* Location at top */}
          <div className="flex items-center space-x-2 mb-3 font-medium text-sm">
            {loading && <img src={map} alt="loading" className="w-7 h-7" />}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && location && (
              <>
                <MapPin size={16} className="text-red-600" />
                <p>{location}</p>
              </>
            )}
          </div>

          <div className="space-y-2 font-medium">
            <p className="cursor-pointer">Movies</p>
            <p className="cursor-pointer">Stream</p>
            <p className="cursor-pointer">Events</p>
            <p className="cursor-pointer">Plays</p>
            <p className="cursor-pointer">Sports</p>
            <p className="cursor-pointer">Activities</p>
          </div>

          <hr />

          <div className="space-y-2 text-sm">
            <p className="cursor-pointer">ListYourShow</p>
            <p className="cursor-pointer">Corporates</p>
            <p className="cursor-pointer">Offers</p>
            <p className="cursor-pointer">Gift Cards</p>
          </div>

          <button className="w-full bg-red-600 text-white py-2 rounded mt-3">
            Sign In
          </button>
        </div>
      )}


      {/* Bottom Navbar - Desktop Only */}
      <div className="hidden md:block bg-[#f2f2f2] px-4 md:px-32">
        <div className="max-w-screen mx-auto flex justify-between items-center py-2 text-gray-700">
          <div className="flex items-center space-x-6 font-medium">
            <span className="cursor-pointer hover:text-red-500">Movies</span>
            <span className="cursor-pointer hover:text-red-500">Stream</span>
            <span className="cursor-pointer hover:text-red-500">Events</span>
            <span className="cursor-pointer hover:text-red-500">Plays</span>
            <span className="cursor-pointer hover:text-red-500">Sports</span>
            <span className="cursor-pointer hover:text-red-500">Activities</span>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <span className="cursor-pointer hover:underline">ListYourShow</span>
            <span className="cursor-pointer hover:underline">Corporates</span>
            <span className="cursor-pointer hover:underline">Offers</span>
            <span className="cursor-pointer hover:underline">Gift Cards</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
