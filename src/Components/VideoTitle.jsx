import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-4xl font-bold black'>{title}</h1>
        <p className='content-center w-1/2 py-6 text-lg'>{description }</p>
        <div className=''>
            <button className='border-2  bg-white text-black p-4 px-16 text-xl rounded-xl'>▶️Play</button>
            <button className='border-2  bg-gray-500 opacity-75 text-white p-4 px-16 text-xl rounded-xl'>More</button>
            
        </div>
    </div>
  )
}

export default VideoTitle