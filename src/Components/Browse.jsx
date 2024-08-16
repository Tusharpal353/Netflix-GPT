import React, { useEffect } from "react";
import Header from "./Header";
const Browse = () => {

    /* const getNowPlayingMovies = async ()=>{
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '60da25178fmsh74512604f290ad0p13ad5ejsn868fa0fe47cd',
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
      }

      const data = await fetch(
        'https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D',options
      );
      const json = await data.json();
      console.log(json)
     
    }

    useEffect(()=>{
      getNowPlayingMovies();
    },[]) */


    const getNowPlayingMovies = async ()=>{

    

      const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '60da25178fmsh74512604f290ad0p13ad5ejsn868fa0fe47cd',
          'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }

  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[])




  return <div>

      <Header/>
    


  </div>;
};

export default Browse;
