/* import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

//hook for getting moives

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => { */
   /* 
    Account - 1
   const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "60da25178fmsh74512604f290ad0p13ad5ejsn868fa0fe47cd",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      dispatch(addNowPlayingMovies(result));
    } catch (error) {
      console.error(error);
    } */
     /*  const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'dc8e956a92msh4faf65bfceb32a7p16ba3djsn528e59c4d385',
          'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };
      
      try {
        const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies; */









/* **************************************************************MOCKDATA*********************************************************** */

import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import localMovies from "../Utils/MovieData.json" // Import the local JSON data

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  )

  useEffect(() => {

    // Dispatch the local JSON data to the Redux store
    if(!nowPlayingMovies)
    dispatch(addNowPlayingMovies(localMovies));
  }, [dispatch]);
};

export default useNowPlayingMovies;




/****************************************************TRAILER API******************************************************* */ 