import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const Movies=useSelector((store)=>store.movies)
  //console.log("Movies",Movies)
  return (
    <div className='bg-black'>
<div className='md:-mt-56 relative z-20 pl-6 mt-0' >
  
      <MovieList Title={"Now Playing Movies"} Movies={Movies.NowPlayingMovies}/>
      
      <MovieList Title={"Trending"} Movies={Movies.NowPlayingMovies}/>
      <MovieList Title={"Top Rated"} Movies={Movies.NowPlayingMovies}/>
      <MovieList Title={"Bollywood"} Movies={Movies.NowPlayingMovies}/>
      <MovieList Title={"Classic"} Movies={Movies.NowPlayingMovies}/>

      </div>

    </div>
  )
}

export default SecondaryContainer;