import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
 useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
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
