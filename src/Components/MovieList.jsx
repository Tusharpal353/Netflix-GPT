import React from 'react'
import MovieCard from "./MovieCard"

const MovieList = ({Title, Movies}) => {
  if (!Movies || Movies.length === 0) {
    return <div>No movies found</div>;
  }

  //console.log(Movies[0])

  return (
    <div className='px-6  text-white'>
        <h1 className='text-3xl py-4'>{Title}</h1>
      <div className='flex overflow-x-scroll scrollbar-none scrollbar-hide'>
        <div className='flex'>
          {Movies.map(movie => <MovieCard key={movie.id} thumbnail={movie.image} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList