import React from 'react'
import Body from './Body' 

const Navbar = () => {
  return (
    <>
    <div className='flex flex-col items-center h-screen gap-6'>
      <div className='mt-10 w-md rounded-md h-8 bg-purple-300 flex items-center justify-center text-black font-bold text-xl'>
        TO-DO LIST
      </div>
      <Body/>
    </div>
    </>
  )
}

export default Navbar
