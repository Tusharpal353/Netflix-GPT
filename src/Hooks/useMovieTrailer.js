import { useState, useEffect } from 'react';

const useMovieTrailer = (imdbId) => {
  const [trailerUrl, setTrailerUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imdbId) return;

    const fetchTrailer = async () => {
      const omdbApiKey = 'fefeee46'; // Replace with your OMDb API key
      const youtubeApiKey = 'AIzaSyBGSdUGrT8zzoj8vpCfwA-4dp418noAVCw'; // Replace with your YouTube API key

      try {
        const omdbResponse = await fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=${omdbApiKey}`);
        const movieData = await omdbResponse.json();

        if (movieData.Title) {
          const youtubeResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieData.Title + ' trailer')}&type=video&key=${youtubeApiKey}`);
          const youtubeData = await youtubeResponse.json();

          if (youtubeData.items?.length > 0) {
            setTrailerUrl(`https://www.youtube.com/embed/${youtubeData.items[0].id.videoId}`);
          } else {
            setTrailerUrl(''); // No trailer found
          }
        } else {
          setTrailerUrl(''); // No movie data found
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
        setTrailerUrl(''); // Error occurred
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [imdbId]);

  return { trailerUrl, loading };
};

export default useMovieTrailer;
