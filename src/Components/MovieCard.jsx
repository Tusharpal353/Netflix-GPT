import React from 'react'

const MovieCard = ({thumbnail}) => {
  return (
    <div className='w-48 pr-5'>
      <img src={thumbnail} alt="Poster" />
    </div>
  )
}

export default MovieCard;