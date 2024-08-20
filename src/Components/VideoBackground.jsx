/* 
import React, { useEffect, useState } from 'react';

const VideoBackground = ({ MovieId }) => {
  const [trailerUrl, setTrailerUrl] = useState('');

  const getMoviesVideos = async () => {
    const omdbApiKey = 'fefeee46';
    const youtubeApiKey = 'AIzaSyBGSdUGrT8zzoj8vpCfwA-4dp418noAVCw';

    // Fetch movie details from OMDb
    const omdbResponse = await fetch(`http://www.omdbapi.com/?i=${MovieId}&apikey=${omdbApiKey}`);
    const movieData = await omdbResponse.json();

     // Check if the JSON is correctly parsed
     if (!movieData || typeof movieData !== 'object') {
      throw new Error('Invalid JSON response from OMDb API');
    }


    if (movieData.Title) {
      // Search for the trailer on YouTube
      const youtubeResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieData.Title + ' trailer')}&key=${youtubeApiKey}`);
      const youtubeData = await youtubeResponse.json();

      if (youtubeData.items && youtubeData.items.length > 0) {
        const trailerId = youtubeData.items[0].id.videoId;
        setTrailerUrl(`https://www.youtube.com/watch?v=${trailerId}`);
      } else {
        console.log('Trailer not found');
      }
    } else {
      console.log('Movie not found');
    }
  };

  useEffect(() => {
    getMoviesVideos();
  }, [MovieId]);

  return (
    <div>
      {trailerUrl ? (
        <iframe
          width="560"
          height="315"
          src={trailerUrl}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
 */

import React, { useEffect } from "react";

const VideoBackground = ({ MovieId }) => {
  const getMoviesVideos = async () => {
    //for tralier video
    const data = await fetch(
      "https://api.kinocheck.com/movies?tmdb_id=976573&language=de"
    );
    const json = await data.json();
    console.log("Trailer Video", json);

    const youtubeVideoId = json.trailer.youtube_video_id;
    console.log(youtubeVideoId)

    //const data2 = await fetch("http://www.omdbapi.com/?i=tt0111161&apikey=fefeee46")
    //const json = await data2.json();
    //console.log("trailer",json)
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+ youtubeVideoId}
        title="YouTube video player"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"

      ></iframe>
    </div>
  );
};

export default VideoBackground;

/* import React, { useEffect } from 'react';

const VideoBackground = () => {
  const getMoviesVideos = async () => {
    try {
      const response = await fetch("https://api.kinocheck.com/movies?tmdb_id=976573&language=de");
      const json = await response.json(); // Call the json() method

      console.log(json);
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);

  return (
    <div>
   
    </div>
  );
};

export default VideoBackground;
 */
