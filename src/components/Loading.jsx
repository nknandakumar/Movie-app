import React from 'react'

const Loading = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10  md:mx-20 px-6  mb-10" >   
  {
    [...Array(6)].map((_,i)=>(
        <div key={i} className="w-full h-[500px]  bg-[#1a1a1a] p-4 rounded-lg shadow-white animate-pulse">
        <div className="h-78 w-full bg-gray-700 rounded-lg"></div>
        <div className="h-6 w-3/3 bg-gray-700 rounded-md mt-4"></div>
       {
        [...Array(3)].map((_,i)=>(
            <div key={i} className="h-2 w-3/3 bg-gray-600 rounded-md mt-2"></div>
        ))
       }
        <div className="flex gap-2 mt-3">
          <div className="h-5 w-6 bg-gray-600 rounded-md"></div>
          <div className="h-5 w-12 bg-gray-600 rounded-md"></div>
          <div className="h-5 w-14 bg-gray-700 rounded-md"></div>
        </div>
      </div>
    ))
  }
    
     </div>
  
  )
}

export default Loading