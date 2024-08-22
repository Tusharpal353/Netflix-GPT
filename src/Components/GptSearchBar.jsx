// import React, { useRef } from "react";
// import OpenAI from "openai";
// import debounce from 'lodash.debounce';
// import lang from "../Utils/LangConstants";
// import { useSelector } from "react-redux";

// const GptSearchBar = () => {
//   const client = new OpenAI({
//     apiKey: process.env.REACT_APP_OPENAI_KEY,
//     dangerouslyAllowBrowser: true
//   });
  
//   const langKey = useSelector((store) => store.config.lang);

//   //for getting the input text from search bar
//   const searchText = useRef(null);

//   //geeting value of searched text
//  /*  const handleGptSearchClick = async () => {
//     console.log(searchText.current.value);

//     const gptQuery = "Act as a movie recommendation system and suggest some movies for the querry" + searchText.current.value + ". only give me 5 movies seprated by , ";

//     const gptResults = await client.chat.completions.create({
//       messages: [{ role: "user", content: gptQuery}],
//       model: "gpt-3.5-turbo",
//     });

//     console.log(gptResults.choices);
//   }; */
//   const handleGptSearchClick = debounce(async () => {
//     console.log(searchText.current.value);
  
//     const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value + ". Only give me 5 movies separated by commas.";
  
//     try {
//       const gptResults = await client.chat.completions.create({
//         messages: [{ role: "user", content: gptQuery }],
//         model: "gpt-3.5-turbo",
//       });
//       console.log(gptResults.choices);
//     } catch (error) {
//       if (error.statusCode === 429) {
//         console.error("Rate limit exceeded. Please try again later.");
//       } else {
//         console.error("Error:", error);
//       }
//     }
//   }, 300);
  
//   return (
//     <div className="pt-[15%] flex justify-center">
//       {/* searchbar */}
//       <form
//         className="  bg-black w-1/2 grid grid-cols-12"
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//         action=""
//       >
//         <input
//           //giving refrence to the text
//           ref={searchText}
//           className="p-4 m-4 col-span-9  "
//           type="text"
//           placeholder={lang[langKey].gptSearchPlaceHolder}
//         />
//         <button
//           className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3  "
//           onClick={handleGptSearchClick}
//         >
//           {lang[langKey].search}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GptSearchBar;

import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import debounce from 'lodash.debounce';
import lang from "../Utils/LangConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  // Initialize the Google Gemini API client
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
  
  const langKey = useSelector((store) => store.config.lang);

  // Reference to get the input text from the search bar
  const searchText = useRef(null);

  // Function to handle the search click with debouncing
  const handleGptSearchClick = debounce(async () => {
    console.log(searchText.current.value);

    const geminiQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value + ". Only give me 5 movies separated by commas.";

    try {
      const geminiResults = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
        .generateContent([geminiQuery]);

      console.log(geminiResults.response.text());
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error("Rate limit exceeded. Please try again later.");
      } else {
        console.error("Error:", error);
      }
    }
  }, 300);
  
  return (
    <div className="pt-[15%] flex justify-center">
      {/* searchbar */}
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
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
