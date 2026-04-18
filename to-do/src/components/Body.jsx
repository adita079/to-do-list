import React from 'react'
import { useState } from 'react'
import deleteIcon from '../assets/delete.png'
import editIcon from '../assets/editIcon.png'

const Body = () => {

  const [task, setTask] = useState('');   //task entered in input field
  const [tasks, setTasks] = useState([]); //list of tasks
  const [editIndex, setEditIndex] = useState(null);
   
  const addTask =(e) =>{
    e.preventDefault();
    
    if(task.trim() === ''){
      alert("Please enter a task!");
      return;
    }
    
      setTasks(prevTasks => [...prevTasks, task]);
      setTask('');
  }

  const deleteTask = (indexToDelete) =>{  //function recieves the index of the task to be deleted
    
    const updatedTasks = tasks.filter((_,index)=> index !== indexToDelete); 
    //filter out (keep) all tasks except the one with the specified index
    
    setTasks(updatedTasks); //update the state with the new list of tasks after deletion
  }      

  const editTask = (e, index) =>{
    const updatedTasks = [...tasks]; //create a copy of the current tasks array
    updatedTasks[index] = e.target.value;
    setTasks(updatedTasks); 
  }

    return (
    <>
    <div className='w-md flex flex-col opacity-80 rounded-lg bg-purple-300 '>

      <form onSubmit={addTask} 
            className='flex flex-row'>

        <input className='w-sm h-10 bg-white m-4 p-2 min-h-md' 
               placeholder='Enter your task...' 
               value={task} 
               onChange={(e)=>setTask(e.target.value)}>
        </input>

        <button className='h-10 w-20 ml-2 m-4 rounded-lg bg-green-400 hover:bg-gray-200 ' 
                type='submit'>
                  Add
        </button>
      </form>
    <div>
      {tasks.map((t, index)=>{
          return(
            <div key={index} 
                 className='flex flex-row items-center'>

              {editIndex === index ? 
                <input value={t}
                onChange={(e)=>{editTask(e, index)}}
                onBlur={()=> setEditIndex(null)}
                className='flex rounded-md h-10 w-80 bg-white m-4 mr-2 p-1.5 font-medium hover:bg-gray-200' >

                </input> 
                :
                <p className='flex rounded-md h-10 w-80 bg-white m-4 mr-2 p-1.5 font-medium hover:bg-gray-200' >
                  {t}
                </p>
              }


              <button className='w-10 h-10 m-1 p-2 bg-white rounded-lg' 
                      onClick={()=>{deleteTask(index)}}>

                <img className='w-8 h-6 rounded-md' src={deleteIcon} alt="Delete" />

              </button>

              <button className='w-10 h-10 m-1 p-2 bg-white rounded-lg'
                      onClick={()=>{setEditIndex(index)
                                    console.log("mom");
                                    
                      }}>

                <img className='w-8 h-6 rounded-md' src={editIcon} alt="Edit Task" />

              </button>
            </div>
          )
        })} 
    </div>
    </div>
    </>
  )
}
export default Body
