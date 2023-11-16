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
    setTasks([...tasks,newTask]);
  }
  

  return (
    <>
      <h1>To do List</h1>
      <Form onFormEvent={handleSubmit}/>
      <DisplayTasks tasks = {tasks} setTasks={setTasks}/>
      
    </>
  )
}

export default App
