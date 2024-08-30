import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { addTrailervideo } from "../Utils/moviesSlice";
import video from '../Images/Header/videoplayback (1).mp4'

const MainContainer = () => {
  const dispatch=useDispatch()
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  // console.log("movie list line 6"+movies)
  //if(movies === null) return;
  //or
  if (!movies) return;
  const mainMovie = movies[17];
 // console.log("Main Movie for trailer", mainMovie);

  //extracting this from mainMovie which is coming from API
  /*    const {title,description}=mainMovie; */

  //console.log(mainMovie)
  const { title, description, imdbid } = mainMovie;
  const ImdbID = mainMovie.imdbid;

  //store action to pass IMDBID of trailer
  dispatch(addTrailervideo(ImdbID))
  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      
      {/*     <VideoTitle  title={title} description={description}/> */}
      <VideoTitle title={title} description={description} />
      <video src={video} autoPlay  muted loop></video>
     {/*  <VideoBackground imdbiD={imdbid} /> */}
    </div>
  );
};

export default MainContainer;
