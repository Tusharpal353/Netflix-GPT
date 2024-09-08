/* 
 

import React, { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import debounce from "lodash.debounce";
import lang from "../Utils/LangConstants";
import { useDispatch, useSelector } from "react-redux";
import { addGeminiMovieResult } from "../Utils/gptSlice";
import MovieCardShimmer from "./MovieCardShimmer";


const GptSearchBar = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  // Initialize the Google Gemini API client
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

  const langKey = useSelector((store) => store.config.lang);

  // Reference to get the input text from the search bar
  const searchText = useRef(null);

  // Function to search movie in OMDB and return the entire response object
  const searchMovieOMDB = async (movie) => {
    const omdbApiKey = process.env.REACT_APP_OMDB_KEY;
    const response = await fetch(`https://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(movie)}`);
    const json = await response.json();
    //console.log(json);
    return json;  // Return the entire response object
  };

  // Handle the search click with debouncing
  const handleGptSearchClick = debounce(async () => {
    const query = searchText.current.value;
    const geminiQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      query +
      ". Only give me  movies separated by commas.";

    const geminiResults = await genAI
      .getGenerativeModel({ model: "gemini-1.5-flash" })
      .generateContent([geminiQuery]);

    // Access the 'text' property of the response object
    const geminiResponseText = geminiResults.response.candidates[0].content.parts[0].text;
    //console.log("geminiResponseText:", geminiResponseText);

    // Now split the text and trim each movie title
    const gemini_response = geminiResponseText.split(",").map(movie => movie.trim());
    //console.log("gemini_response:", gemini_response);

    // Array of promises to fetch OMDB data for each movie
    const promiseArray = gemini_response.map(movie => searchMovieOMDB(movie));

    // Wait for all promises to resolve and get an array of responses
    const omdbResults = await Promise.all(promiseArray);
 
    //console.log("OMDB Results Array", omdbResults);
    if(!gemini_response)return null

    dispatch(addGeminiMovieResult({movieNames:gemini_response,movieResult: omdbResults}))
    setLoading(false)

  }

 
  
  
  
  , 300);

  return (
    <div className=" flex justify-center pt-[40%] md:pt-[10%]  ">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

 

  */
import React, { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import debounce from "lodash.debounce";
import lang from "../Utils/LangConstants";
import { useDispatch, useSelector } from "react-redux";
import { addGeminiMovieResult } from "../Utils/gptSlice";
import MovieCardShimmer from "./MovieCardShimmer";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // State for managing the loading status

  // Initialize the Google Gemini API client
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

  const langKey = useSelector((store) => store.config.lang);

  // Reference to get the input text from the search bar
  const searchText = useRef(null);

  // Function to search movie in OMDB and return the entire response object
  const searchMovieOMDB = async (movie) => {
    const omdbApiKey = process.env.REACT_APP_OMDB_KEY;
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(movie)}`
    );
    const json = await response.json();
    return json; // Return the entire response object
  };

  // Handle the search click with debouncing
  const handleGptSearchClick = debounce(async () => {
    setLoading(true); // Start showing shimmer when the search is triggered
    const query = searchText.current.value;
    const geminiQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      query +
      ". Only give me  movies separated by commas.";

    const geminiResults = await genAI
      .getGenerativeModel({ model: "gemini-1.5-flash" })
      .generateContent([geminiQuery]);

    // Access the 'text' property of the response object
    const geminiResponseText =
      geminiResults.response.candidates[0].content.parts[0].text;

    // Now split the text and trim each movie title
    const gemini_response = geminiResponseText.split(",").map((movie) => movie.trim());

    // Array of promises to fetch OMDB data for each movie
    const promiseArray = gemini_response.map((movie) => searchMovieOMDB(movie));

    // Wait for all promises to resolve and get an array of responses
    const omdbResults = await Promise.all(promiseArray);

    // Dispatch the results to the Redux store
    dispatch(addGeminiMovieResult({ movieNames: gemini_response, movieResult: omdbResults }));

    setLoading(false); // Stop showing shimmer when the search is done
  }, 300);

  return (
  //   <div className="flex justify-center pt-[40%] md:pt-[10%]">
  //     <form
  //       className="bg-black w-full md:w-1/2 grid grid-cols-12"
  //       onSubmit={(e) => e.preventDefault()}
  //     >
  //       <input
  //         ref={searchText}
  //         className="p-4 m-4 col-span-9"
  //         type="text"
  //         placeholder={lang[langKey].gptSearchPlaceHolder}
  //       />
  //       <button
  //         className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
  //         onClick={handleGptSearchClick}
  //       >
  //         {lang[langKey].search}
  //       </button>
  //     </form>

  //     {/* Show shimmer while loading */}
  //     {loading && <MovieCardShimmer />}

  //     {/* Once loading is done, show the actual results */}
  //     {!loading && (
  //       <div className="movie-results-container">
  //         {/* Render your movie cards here */}
  //       </div>
  //     )}
  //   </div>

  <div className="flex flex-col items-center pt-[40%] md:pt-[10%]">
  <form
    className="bg-black w-full md:w-1/2 grid grid-cols-12"
    onSubmit={(e) => e.preventDefault()}
  >
    <input
      ref={searchText}
      className="p-4 m-4 col-span-9"
      type="text"
      placeholder={lang[langKey].gptSearchPlaceHolder}
    />
    <button
      className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
      onClick={handleGptSearchClick}
    >
      {lang[langKey].search}
    </button>
  </form>

  {/* Show shimmer while loading */}
  {loading && (
    <div className="w-full md:w-1/2 mt-4">
      <MovieCardShimmer />
    </div>
  )}

  {/* Once loading is done, show the actual results */}
  {!loading && (
    <div className="w-full md:w-1/2 mt-4">
      {/* Replace this div with your movie cards */}
      <div className="movie-results-container">
        {/* Render your movie cards here */}
      </div>
    </div>
  )}
</div>
 );
};

export default GptSearchBar;
