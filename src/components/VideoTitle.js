import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'> 
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className=''>
        <button className='text-xl bg-white text-black px-8 py-2 rounded-sm hover:bg-opacity-80'>Play</button>
        <button className='text-xl bg-gray-600 ms-4 text-white px-5 py-2 rounded-sm bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
