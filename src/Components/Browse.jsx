  import React from "react";
  import Header from "./Header";
  import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
  import MainContainer from "./MainContainer";
  import SecondaryContainer from "./SecondaryContainer";
  import GptSearch from "./GptSearch";
  import { useSelector } from "react-redux";
  import SearchComponent from "./SearchComponent";
import GptMovieSuggetions from "./GptMovieSuggetions";
  const Browse = () => {
    const showGPTSearch = useSelector(store => store.gpt.showGptSearch);
    //console.log("line 10",showGPTSearch)

    
    useNowPlayingMovies([]);
    return (
      <div>
        <Header />

        
        {
          showGPTSearch ? (<GptSearch />) : 
          (
            <>
            
            <MainContainer />
            <SecondaryContainer />
            <SearchComponent/>
            
          </>
        )}

        {/* 
        Main container
          - video backgroung
          - movie Title
        Secondary Container
          -movie list *n
          -cards *n
        */}
      </div>
    );
  };

  export default Browse;
