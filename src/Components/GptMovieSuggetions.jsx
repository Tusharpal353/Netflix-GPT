/* import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { geminiMovie } = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = geminiMovie;

  console.log('movieNames:', movieNames);
  console.log('movieResults:', movieResults);

  if (movieNames.length === 0) return <div>No movie suggestions available.</div>;

  return (
    <div className='p-4 m-4 bg-black text-white'>
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList 
            key={movieName} 
            title={movieName} 
            Movies={movieResults[index] || []} 
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
 */










import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import MovieCard1 from './MovieCard1';

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
      <div className="flex flex-wrap justify-start overflow-x-scroll space-x-4">
        {movieResult.map((movie, index) => (
          <MovieCard1 key={index} movie={movie} />
        ))}
      </div>
      
      
    </div>
  );
};

export default GptMovieSuggestions;

/* 
import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const geminiMovie = useSelector((store) => store.gpt.MovieNames);
  
  const { MovieResults, MovieNames } = geminiMovie || {};

  console.log(MovieNames);
  console.log(MovieResults);

  if (!MovieNames || MovieNames.length === 0) return null;

  return (
    <div className='p-4 m-4 bg-black text-white'>
      <div>
        {MovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            Movies={MovieResults[index]} // Assuming MovieResults[index] is an array of movie objects
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
 */