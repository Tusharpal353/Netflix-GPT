import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
const Browse = () => {
 
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
