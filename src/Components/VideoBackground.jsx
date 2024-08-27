/* 
import React, { useEffect } from "react";
import { useSelector } from "react-redux";


const VideoBackground = () => {
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo)

  const getMoviesVideos = async () => { */
    //for tralier video
    /* const data = await fetch(
      "https://api.kinocheck.com/movies?tmdb_id=976573&language=de"
    );
    const json = await data.json();
    console.log("Trailer Video", json);

    const youtubeVideoId = json.trailer.youtube_video_id;
    console.log( youtubeVideoId); */
/* 
    const data2 = await  fetch(`http://www.omdbapi.com/?i=${trailerVideo}&apikey=`);
    //const data3 = await fetch("http://www.omdbapi.com/?i="+{imdbId}+"&apikey=")
    const json2 = await data2.json();
    console.log("trailer id",json2)
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
  return (    
    <div>
      
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground; 

 */

import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer"; // Adjust the import path if needed

const VideoBackground = () => {
  const imdbId = useSelector((store) => store.movies?.trailerVideo);
  const { trailerUrl, loading } = useMovieTrailer(imdbId);

  return (
    <div>
      {loading ? (
        <p>Loading trailer...</p>
      ) : trailerUrl ? (
        <iframe
        className="w-screen aspect-video"
          
          src={trailerUrl}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default VideoBackground;
