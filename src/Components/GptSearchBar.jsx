import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import debounce from "lodash.debounce";
import lang from "../Utils/LangConstants";
import { useDispatch, useSelector } from "react-redux";
import { addGeminiMovieResult } from "../Utils/gptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch()


  // Initialize the Google Gemini API client
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

  const langKey = useSelector((store) => store.config.lang);

  // Reference to get the input text from the search bar
  const searchText = useRef(null);

  // Function to search movie in OMDB and return the entire response object
  const searchMovieOMDB = async (movie) => {
    const omdbApiKey = process.env.REACT_APP_OMDB_KEY;
    const response = await fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(movie)}`);
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

    dispatch(addGeminiMovieResult({movieNames:gemini_response,movieResult: omdbResults}))

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





/* 
import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import debounce from "lodash.debounce";
import lang from "../Utils/LangConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null); // Reference to get the input text from the search bar

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

  //search moiv
   const searchMovieOMDB = async (movie) => {
    const omdbApiKey = 'fefeee46';
    const data = await fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(movie)}`);
    const json = await data.json();
    console.log(json)
    return json;  // Return movie title
  }; 


  // Handle the search click with debouncing
  const handleGptSearchClick = debounce(async () => {
    const query = searchText.current.value;
    const geminiQuery ="Act as a movie recommendation system and suggest some movies for the query: " +query +". Only give me 5 movies separated by commas.";

    const geminiResults = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent([geminiQuery]);
    
    //const geminiMovies=geminiResults.response.candidates[0].content.parts[0]
    //console.log("geminiMovies",geminiMovies)

    

    if(!geminiResults.response){
      //error page
}

 const geminiResponseText = await geminiResults.response.text();
 console.log(geminiResponseText)

 
   
    // const promiseArray =geminiMovies.map(movie=>searchMovieOMDB(movie)) 
    // const tmdbResults = await Promise.all(promiseArray)
    // console.log(tmdbResults)
    searchMovieOMDB()
;
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
