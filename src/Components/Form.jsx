import Task from "./Task";
import { useState } from 'react'

const Form = ()=>{
    let submitedValue;
    
    const setTaskText = (value)=>{
        return value;

    }
    const submitHandler = (e)=>{
        e.preventDefault();
       e.target.elements.taskInput.value? alert(`Submitted the value ${e.target.elements.taskInput.value}`):alert("Please enter a task");
        submitedValue= setTaskText(e.target.elements.taskInput.value);
        
    };
    
    return(
        <>
        <form onSubmit={submitHandler} className="taskForm">
            
            <input className="form-control" type="text" placeholder="New task" id="taskInput"/>
            <button className="btn btn-primary" type="submit" id="addTaskbtn">+</button>
        </form>
        <ul className="list-group">
            <Task title ={submitedValue?submitedValue:"No tasks."}/>
            
        </ul>
        </>
    )
}
export default Form;
