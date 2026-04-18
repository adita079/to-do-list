import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <div className='flex flex-row items-start h-screen gap-6'>
      <Navbar />
      <div className="mt-10 rounded-md bg-gray-200 w-md h-md p-4">hello</div>
    </div>
    </>
  )
} 

export default App
