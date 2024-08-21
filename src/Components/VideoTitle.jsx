import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white  bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-4xl font-bold black'>{title}</h1>
        <p className=' w-1/2 py-6 text-lg'>{description }</p>
        <div className='mx-2'>
            <button className='  bg-white text-black p-4 px-12 mr-2 text-xl rounded-xl hover:bg-opacity-80'>Play</button>
            <button className=' bg-gray-500 opacity-75 text-white p-4 px-12 text-xl rounded-xl'>More</button>
            
        </div>
    </div>
  )
}

export default VideoTitle