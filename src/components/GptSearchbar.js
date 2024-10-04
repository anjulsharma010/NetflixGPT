import React from 'react'

const GptSearchbar = () => {
  return (
    <div className='pt-[8%] flex justify-center'>
      <form className="w-1/2 bg-black grid grid-cols-12">
      <input type="text" className='px-4 py-2 m-4 col-span-9' placeholder='What would you like to watch today'/>
      <button className='py-2 px-4 bg-red-700 rounded-sm text-white col-span-3 m-4'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchbar
