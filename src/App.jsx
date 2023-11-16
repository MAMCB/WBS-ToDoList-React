import { useState } from 'react'
import Form from "./Components/Form"
import DisplayTasks from './Components/DisplayTasks';
import './App.css'

function App() {
  const [tasks,setTasks]=useState([]);
  
  const handleSubmit = (task) =>{
    const newTask = {
      id:task.id,
      title:task.title,
      date:task.date,
      priority:task.priority,
      done:false

    };
    setTasks([...tasks,newTask])
   
  }
  const updateTasks = (task,newTitle)=>{
    const updatedTasks = tasks.map((e)=>e);
    
    const taskIndex = updatedTasks.findIndex((e)=>e===task)
    updatedTasks[taskIndex].title=newTitle;
    setTasks(updatedTasks);


  }

  const removeTask = (task)=>{
    const updatedTasks = tasks.filter((e)=>e.id!==task.id)
    
    setTasks(updatedTasks);
    
    
  }
  

  return (
    <>
      <h1>To do List</h1>
      <Form onFormEvent={handleSubmit}/>
      <DisplayTasks tasks = {tasks} setTasks={setTasks} updateTaskArray={updateTasks} deleteTaskFromArray={removeTask}/>
      
    </>
  )
}

export default App
