/* 
import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import debounce from "lodash.debounce";
import lang from "../Utils/LangConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  // Initialize the Google Gemini API client
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

  const langKey = useSelector((store) => store.config.lang);

  // Reference to get the input text from the search bar
  const searchText = useRef(null);

  // Function to search movie in OMDB and return the title
  const searchMovieOMDB = async (movie) => {
    const omdbApiKey = 'fefeee46';
    const response = await fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(movie)}`);
    const json = await response.json();
    return json.Title;  // Return movie title
  };

  // Handle the search click with debouncing
  const handleGptSearchClick = debounce(async () => {
    const query = searchText.current.value;
    const geminiQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      query +
      ". Only give me 5 movies separated by commas.";

    const geminiResults = await genAI
      .getGenerativeModel({ model: "gemini-1.5-flash" })
      .generateContent([geminiQuery]);

    const geminiResponseText = await geminiResults.response.text();
    const gemini_response = geminiResponseText.split(",").map(movie => movie.trim());
    

    //promise array
    const promiseArray = gemini_response.map(movie => searchMovieOMDB(movie));
    const omdbResults = await Promise.all(promiseArray);
    
    console.log("after promise resolve", omdbResults);
  }, 300);

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
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
import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import debounce from "lodash.debounce";
import lang from "../Utils/LangConstants";
import { useDispatch, useSelector } from "react-redux";
import { addmoiveResultsGemini } from "../Utils/gptSlice";

const GptSearchBar = () => {
  // Initialize the Google Gemini API client
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Function to search movie in OMDB and return the movie data
  const searchMovieOMDB = async (movie) => {
    const omdbApiKey = "fefeee46";
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(
        movie
      )}`
    );
    const json = await response.json();
    return json; // Return the full movie data object
  };

  // Handle the search click with debouncing
  const handleGptSearchClick = debounce(async () => {
    const query = searchText.current.value;
    const geminiQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      query +
      ". Only give me 5 movies separated by commas.";

    const geminiResults = await genAI
      .getGenerativeModel({ model: "gemini-1.5-flash" })
      .generateContent([geminiQuery]);

    const geminiResponseText = await geminiResults.response.text();
    const gemini_response = geminiResponseText
      .split(",")
      .map((movie) => movie.trim());

    const promiseArray = gemini_response.map((movie) => searchMovieOMDB(movie));
    const omdbResults = await Promise.all(promiseArray);

    console.log("After promise resolve", omdbResults);

      //passing multiple result in a store
    dispatch(
      addmoiveResultsGemini({
        movieName: gemini_response,
        movieResult: omdbResults,
      })
    );
  }, 300);

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
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
