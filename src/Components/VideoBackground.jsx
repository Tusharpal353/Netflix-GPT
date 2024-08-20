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
    const data2 = await  fetch(`http://www.omdbapi.com/?i=${trailerVideo}&apikey=fefeee46`);
    //const data3 = await fetch("http://www.omdbapi.com/?i="+{imdbId}+"&apikey=fefeee46")
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


import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VideoBackground = () => {
  const imdbId = useSelector((store) => store.movies?.trailerVideo);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [loading, setLoading] = useState(true);
  
  const fetchMovieDetails = async () => {
    const omdbApiKey = 'fefeee46'; // Replace with your OMDb API key
    const youtubeApiKey = 'AIzaSyBGSdUGrT8zzoj8vpCfwA-4dp418noAVCw'; // Replace with your YouTube API key

    try {
      // Fetch movie details from OMDb API
      const omdbResponse = await fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=${omdbApiKey}`);
      const movieData = await omdbResponse.json();

      if (movieData.Title) {
        // Search for the trailer on YouTube
        const youtubeResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieData.Title + ' trailer')}&type=video&key=${youtubeApiKey}`);
        const youtubeData = await youtubeResponse.json();

        if (youtubeData.items && youtubeData.items.length > 0) {
          const trailerId = youtubeData.items[0].id.videoId;
          setTrailerUrl(`https://www.youtube.com/embed/${trailerId}`);
        } else {
          console.log('Trailer not found');
          setTrailerUrl(''); // No trailer found
        }
      } else {
        console.log('Movie not found');
        setTrailerUrl(''); // No movie data found
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setTrailerUrl(''); // Error occurred
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (imdbId) {
      fetchMovieDetails();
    }
  }, [imdbId]);

  return (
    <div>
      {loading ? (
        <p>Loading trailer...</p>
      ) : trailerUrl ? (
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
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default VideoBackground;
