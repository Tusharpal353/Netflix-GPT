import React from 'react'
import lang from '../Utils/LangConstants'
const GptSearchBar = () => {
  return (
    <div className='pt-[15%] flex justify-center'>
    
        {/* searchbar */}
        <form className='  bg-black w-1/2 grid grid-cols-12'  action="">
            <input className='p-4 m-4 col-span-9  ' type="text" placeholder={lang.hindi.gptSearchPlaceHolder} />
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 ' >{lang.hindi.search}</button>
        </form>
    


    </div>
  )
}

export default GptSearchBar