/* import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    geminiMovie: {
      movieNames: [],  // Initialize as empty array
      movieResults: [] // Initialize as empty array
    }
  },
  reducers: {
    toogleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGeminiMovieResult: (state, action) => {
      const { movieNames = [], movieResults = [] } = action.payload;
      state.geminiMovie = {
        movieNames,
        movieResults
      };
    }
  }
}); 

export const { toogleGptSearchView, addGeminiMovieResult } = gptSlice.actions;
export default gptSlice.reducer;

 */





import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        geminiMovie : null,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        toogleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGeminiMovieResult:(state,action)=>{
            const {movieNames, movieResults}= action.payload; 
            state.geminiMovie=action.payload;
            state.movieNames = movieNames;
            state.movieResults=movieResults;
        } 

    },
    
});
export const{toogleGptSearchView,addGeminiMovieResult} = gptSlice.actions;
export default gptSlice.reducer

/* import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        geminiMovie: {
            movieNames: [],
            movieResults: []
        }
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addMovieResultsGemini: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.geminiMovie = {
                movieNames: movieNames || [],
                movieResults: movieResults || []
            };
        }
    }
});

export const { toggleGptSearchView, addMovieResultsGemini } = gptSlice.actions;
export default gptSlice.reducer;
 */