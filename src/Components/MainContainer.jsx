import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.NowPlayingMovies)
   // console.log("movie list line 6"+movies)
    //if(movies === null) return;
    //or
    if(!movies) return;  
    const mainMovie = movies[0];    
    console.log(mainMovie)


    //extracting this from mainMovie which is coming from API
 /*    const {title,description}=mainMovie; */

    //console.log(mainMovie)
    const {title,description}=mainMovie
  return (
    <div>MainContainer
    {/*     <VideoTitle  title={title} description={description}/> */}
        <VideoTitle title={title} description={description} />
        <VideoBackground/>
    </div>
    
  )
}

export default MainContainer