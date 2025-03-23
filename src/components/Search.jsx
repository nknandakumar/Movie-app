import React from 'react'
import {Search} from "lucide-react"

const SearchBar = ({searchTerm,setSearchTerm}) => {

  return (
    <div className='  bg-[#1a1a1a] px-4 py-3 md:py-5 rounded-lg mt-10 max-w-3xl mx-4 md:mx-auto' >
        <div className="flex gap-4">
            <Search />
            <input value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}  className=' w-full bg-transparent text-base md:text-lg text-gray-200 placeholder-light-200 outline-hidden' type="text"  placeholder='Search 1000 of Moves '   />
        </div>
    </div>
  )
}

export default SearchBar