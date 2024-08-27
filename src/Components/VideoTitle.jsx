import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='md:pt-[20%] md:px-24 p-6 absolute text-white  bg-gradient-to-r from-black w-screen aspect-video pt-[30%]'>
        <h1 className='md:text-4xl font-bold black text-xl'>{title}</h1>
        <p className='hidden md:inline-block w-1/2 py-6 text-lg'>{description }</p>
        <div className='mx-2 pt-3'>
            <button className=' px-4   py-2 bg-white text-black md:p-4 md:px-12 md:mr-2 text-xl rounded-xl hover:bg-opacity-80'>Play</button>
            <button className='hidden md:inline-block bg-gray-500 opacity-75 text-white p-4 px-12 text-xl rounded-xl'>More</button>
            
        </div>
    </div>
  )
}

export default VideoTitle