import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        geminiMovie : null,
        MovieNames:null,
        MovieResults:null,
    },
    reducers:{
        toogleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addmoiveResultsGemini:(state,action)=>{
            const {movieNames, movieResults}= action.payload; 
            state.geminiMovie=action.payload
            state.MovieNames = movieNames;
            state.MovieResults=movieResults;
        }

    },
    
});
export const{toogleGptSearchView,addmoiveResultsGemini} = gptSlice.actions;
export default gptSlice.reducer