import { useState,useEffect } from 'react'
import Form from "./Components/Form"
import DisplayTasks from './Components/DisplayTasks';
import {v4 as uuidv4} from "uuid";
import './App.css'
import Navbar from './Components/Navbar';

function App() {
  const [tasks,setTasks]=useState([]);
  const[subTasks,setSubTasks]=useState([]);
   useEffect(() => {
    // Load data from local storage when the component mounts
    const storedTasks = localStorage.getItem("tasks");
    const storedSubTasks = localStorage.getItem("subtasks");

    if (storedTasks && storedSubTasks) {
      try {
        const initialTasks = JSON.parse(storedTasks);
        const initialSubtasks = JSON.parse(storedSubTasks);
        setTasks(initialTasks);
        setSubTasks(initialSubtasks);
      } catch (error) {
        console.error("Error parsing data from local storage:", error);
      }
    }
  }, []);
  
  const handleSubmit = (task) =>{
    const newTask = {
      id:task.id,
      title:task.title,
      date:task.date,
      priority:task.priority,
      done:false,
      subTasks:[]

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

  const addSubTask = (task,subTask) =>{
    const newSubtask = {
      id:uuidv4(),
      title:subTask,
      done:false,
      parentID:task.id
    }
    setSubTasks([...subTasks,newSubtask]);

    const updatedTasks = tasks.map((e)=>e);
    
    const taskIndex = updatedTasks.findIndex((e)=>e.id===task.id)
    updatedTasks[taskIndex].subTasks.push(newSubtask);
   
    setTasks(updatedTasks);


  }

  const updateSubTaskArray = (subTask,newTitle)=>{
     const updatedSubTasks = subTasks.map((e)=>e);
    
    const subTaskIndex = updatedSubTasks.findIndex((e)=>e.id===subTask.id);
    updatedSubTasks[subTaskIndex].title=newTitle;
    setSubTasks(updatedSubTasks);

    const updatedTasks = tasks.map((e)=>e);
    
    const taskIndex = updatedTasks.findIndex((e)=>e.id===subTask.parentID);
    const subtaskIndex = updatedTasks[taskIndex].subTasks.findIndex((e)=>e.id===subTask.id);
    
    updatedTasks[taskIndex].subTasks[subtaskIndex].title=newTitle;
    setTasks(updatedTasks);


  }

  const deleteSubTaskFromArray = (subTask)=>{
     const updatedTasks = tasks.map((e)=>e);
     const taskIndex = updatedTasks.findIndex((e)=>e.id===subTask.parentID);
    const subtaskIndex = updatedTasks[taskIndex].subTasks.findIndex((e)=>e.id===subTask.id);
     updatedTasks[taskIndex].subTasks.splice(subtaskIndex,1);

  
    setTasks(updatedTasks);

    const updatedSubtasks = subTasks.filter((e)=>e.id!==subTask.id);
    setSubTasks(updatedSubtasks);



  }

   const saveList = () => {
    try {
      const stringifiedTasks = JSON.stringify(tasks);
      const stringifiedSubTasks = JSON.stringify(subTasks);
      localStorage.setItem("tasks", stringifiedTasks);
      localStorage.setItem("subtasks", stringifiedSubTasks);
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  }


  return (
    <>
      
      <h1 className='main-title'>To do List</h1>
      <button className='btn btn-success' onClick={saveList}>Save list</button>
      <Form onFormEvent={handleSubmit}/>
      <DisplayTasks tasks = {tasks} setTasks={setTasks} updateTaskArray={updateTasks} deleteTaskFromArray={removeTask} addSubTask={addSubTask} subTasks={subTasks} updateSubTaskArray={updateSubTaskArray} deleteSubTaskFromArray={deleteSubTaskFromArray} setSubTasks={setSubTasks}/>
      
    </>
  )
}

export default App
