import React from 'react'
import { allMovies, languages } from '../utils/constants'
import MovieCard from './MovieCard'
import { ArrowRight } from 'lucide-react'

const MovieList = () => {
    return (
        <div className='w-full md:w-3/4 p-4'>

            {/* Language filter row */}
            <div className='flex flex-wrap gap-2 mb-6'>
                {languages.map((lang, i) => (
                    <span
                        key={i}
                        className="bg-white border border-gray-200 text-red-500 py-1 px-3 rounded-full text-sm
                        hover:bg-red-500 hover:text-white transition cursor-pointer"
                    >
                        {lang}
                    </span>
                ))}
            </div>

            {/* Upcoming Movies Header */}
            <div className='flex justify-between items-center bg-white shadow-sm  p-4 rounded-xl mb-6'>
                <h3 className='font-semibold text-xl text-gray-800'>Coming Soon</h3>
                <a
                    href="#"
                    className='text-red-500 text-sm font-medium flex items-center hover:underline'
                >
                    Explore Upcoming Movies <ArrowRight size={12} className="ml-1" />
                </a>
            </div>

            {/* Movie Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                {allMovies.map((movie, i) => (
                    <MovieCard key={i} movie={movie} />
                ))}
            </div>
            {/*  */}
        </div>
    )
}

export default MovieList
