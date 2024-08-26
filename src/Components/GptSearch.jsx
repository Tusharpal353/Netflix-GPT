import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetions from './GptMovieSuggetions'
import { BANNER } from '../Utils/constants'
const GptSearch = () => {
  return (
    <>
     <div className=" -z-10 h-auto fixed  ">
        <img 
          src={BANNER}
          alt="Banner"
        />
      </div>

      <GptSearchBar/>
      <GptMovieSuggetions/>

    </>
  )
}

export default GptSearch