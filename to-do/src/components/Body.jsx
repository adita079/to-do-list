import React from 'react'
import { useState } from 'react'


const Body = () => {

    const [task, setTask] = useState('');   //task entered in input field
    const [tasks, setTasks] = useState([]); //list of tasks
   
   const addTask =(e) =>{
    e.preventDefault();
    setTasks((prevTasks)=>[...prevTasks, task]); //add task to list of tasks
    setTask(''); //clear input field after adding task

   }


    return (
    <>
    <div className='w-md h-70 flex flex-col opacity-80 rounded-lg bg-purple-300 '>
    <form onSubmit={addTask} className='flex flex-row'>
        <input className='w-sm h-10 bg-white m-4 p-2 min-h-md' 
        placeholder='Enter your task...' typeof='text' value={task} 
        onChange={(e)=>{setTask(e.target.value)}}></input>

        <button className='h-10 w-20 ml-2 m-4 rounded-lg bg-gray-200
         hover:bg-gray-200 ' type='submit'>Add</button>
    </form>
    <div>
      {tasks.map((t, index)=>{
          return(
            <p className='h-10 w-sm bg-white m-4 p-2' key={index}>{t}</p>
          )
        })}
    </div>
    </div>
    </>
  )
}
export default Body
