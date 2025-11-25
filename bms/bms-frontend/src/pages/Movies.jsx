import React from 'react'
import BannerSlider from '../shared/BannerSlider'
import MovieFilters from '../movies/MovieFilters'
import MovieList from '../movies/MovieList'

const Movies = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
        <BannerSlider />

        <div className='flex flex-col md:flex-row gap-6 px-4 md:px-10 py-6'>
            <MovieFilters />
            <MovieList />
        </div>
    </div>
  )
}

export default Movies
