





import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import MovieCard1 from './MovieCard1';
import MovieCardShimmer from './MovieCardShimmer';

const GptMovieSuggestions = () => {
  const gpt = useSelector((store)=>store.gpt)
  //console.log(gpt)
  const { movieResult, movieNames } = useSelector((store) => store?.gpt.geminiMovie||{});

  //console.log("bar",movieNames);
  //console.log("bar",movieResult   );

  if (!movieNames || movieNames.length === 0) return null;//in place of null

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
     {/*  {movieNames} */}
      <h1 className="text-2xl mb-4">Movie Suggestions</h1>
      {/* <div className="flex flex-wrap justify-start overflow-x-scroll space-x-4">
        {movieResult.map((movie, index) => (
          <MovieCard1 key={index} movie={movie} />
        ))
        }
      </div>  my code before dshimmer*/}
      <div className="flex flex-wrap justify-start overflow-x-scroll space-x-4">
        {movieResult && movieResult.length > 0 ? (
          movieResult.map((movie, index) => (
            <MovieCard1 key={index} movie={movie} />
          ))
        ) : (
          // Show shimmer effect when loading
          Array.from({ length: 5 }).map((_, index) => (
            <MovieCardShimmer key={index} />
          ))
        )}
      </div>
      
    </div>
  );
};

export default GptMovieSuggestions;
