import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pe-4'>
      <img src={IMAGE_CDN_URL + posterPath} alt="movie poster" />
    </div>
  )
}

export default MovieCard
