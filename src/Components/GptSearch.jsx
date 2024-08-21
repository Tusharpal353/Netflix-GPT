import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetions from './GptMovieSuggetions'
import { BANNER } from '../Utils/constants'
const GptSearch = () => {
  return (
    <>
     <div className="absolute -z-10 h-auto  ">
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