import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetions from './GptMovieSuggetions'
import { BANNER } from '../Utils/constants'
const GptSearch = () => {
  return (
    <div >
     <div className=" -z-10 h-auto fixed  ">
        <img 
        className="h-screen object-cover md:h-auto"
          src={BANNER}
          alt="Banner"
        />
      </div>
<div className='pt-[30%] md:pt-0' >
      <GptSearchBar/>
      <GptMovieSuggetions/>
  
</div>

    </div>
  )
}

export default GptSearch