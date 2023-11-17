
import { useState } from 'react'
import {v4 as uuidv4} from "uuid";

const Form = ({onFormEvent})=>{
   
    
   
    const submitHandler = (e)=>{
        e.preventDefault();
        if(!e.target.elements.taskInput.value || !e.target.elements.date.value || !e.target.elements.priority.value)
        {
            alert("Please enter a task");
            return;
        }
      
       const task={
        id:uuidv4(),
        title:e.target.elements.taskInput.value,
        date:e.target.elements.date.value,
        priority:e.target.elements.priority.value,
        done:false

       }
       onFormEvent(task);
       e.target.reset();
        
        
    };
    
    return(
        <>
        <form onSubmit={submitHandler} className="taskForm">
            
            <input className="form-control" type="text" placeholder="New task" id="taskInput"/>
            <label htmlFor="date" className="form-check-label">Set due date</label>
            <input type="date" className="form-control" id="date"/>
            <select className="form-select" aria-label="Default select example" id="priority">
                <option  defaultValue="">Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                 <option value="Low">Low</option>
            </select>
            <button className="btn btn-primary" type="submit" id="addTaskbtn">+</button>
        </form>
        
        </>
    )
}
export default Form;
