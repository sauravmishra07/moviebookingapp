import React, { useState } from "react";
import { languages } from "../utils/constants";
import { Funnel } from "lucide-react";

const MovieFilters = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFilters = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Mobile Filter Toggle Button - Fixed at bottom */}
            <button
                onClick={toggleFilters}
                className="md:hidden fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-full shadow-2xl z-50 
                hover:bg-red-600 transition-all duration-300 hover:scale-110"
                aria-label="Toggle filters"
            >
                <svg className="w-6 h-6" >
                   <Funnel />
                </svg>
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={toggleFilters}
                />
            )}

            {/* Filter Panel */}
            <div
                className={`
                    fixed md:static top-0 left-0 h-full md:h-fit
                    w-[85%] sm:w-[70%] md:w-1/4
                    bg-gray-50 md:bg-transparent
                    p-4 space-y-6 
                    md:sticky md:top-4
                    overflow-y-auto
                    transform transition-transform duration-300 ease-in-out
                    z-50 md:z-auto
                    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}
            >
                {/* Mobile Header with Close Button */}
                <div className="flex justify-between items-center md:hidden mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
                    <button
                        onClick={toggleFilters}
                        className="p-2 hover:bg-gray-200 rounded-full transition"
                        aria-label="Close filters"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Title */}
                <h2 className="hidden md:block text-2xl font-bold text-gray-800 text-center">Filters</h2>

                {/* Languages */}
                <div className="bg-white shadow-sm p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-700">Languages</span>
                        <button className="text-red-500 text-sm hover:underline">Clear</button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {languages.map((lang, i) => (
                            <span
                                key={i}
                                className="border border-gray-200 text-red-500 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium
                                hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-200 active:scale-95"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Genres */}
                <div className="bg-white shadow-sm p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Genres</span>
                        <button className="text-red-500 text-sm hover:underline">Clear</button>
                    </div>
                </div>

                {/* Format */}
                <div className="bg-white shadow-sm p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Format</span>
                        <button className="text-red-500 text-sm hover:underline">Clear</button>
                    </div>
                </div>

                <button className="w-full border border-red-500 text-red-600 font-medium py-2.5 sm:py-3 rounded-lg
                    hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm active:scale-95">
                    Browse by Cinemas
                </button>

                {/* Mobile Apply Button */}
                <button
                    onClick={toggleFilters}
                    className="md:hidden w-full bg-red-500 text-white font-medium py-3 rounded-lg
                    hover:bg-red-600 transition-all duration-300 shadow-md active:scale-95"
                >
                    Apply Filters
                </button>
            </div>
        </>
    );
};

export default MovieFilters;
