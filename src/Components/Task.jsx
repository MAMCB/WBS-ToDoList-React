import {useState} from "react"

const Task = ({task,toggleCompletion,updateTaskArray,deleteTaskFromArray})=>
{   const[isUpdate,setIsUpdate]=useState(false);
    const [value, setValue] = useState("");
   

    const editTask = (e)=>{
        setIsUpdate(true);

    }

    const removeTask = ()=>{
        deleteTaskFromArray(task);


    }

    const updateTask = (e)=>{
        if(!value)
        {
            setIsUpdate(false);
            return;
        }
        const newTitle =value;
         updateTaskArray(task,newTitle)
          setIsUpdate(false);

    }

   


   
    return (
        <>

            <li className={`list-group-item ${task.priority}`}>
                <input type="checkbox" className="form-check-input" id={`check_${task.id}`} checked={task.done} onChange={()=>toggleCompletion(task.id)}/>
                {isUpdate?<input type="text" style={{width:"15rem"}} className="form-control"  placeholder={task.title} id={`edit_${task.id}`} onChange={(e)=>setValue(e.target.value)}/>:<label className="form-check-label" htmlFor={`check_${task.id}`}>{task.title}</label>}
                <span className="date">Due date: {task.date}</span>
                <button className="btn btn-success" onClick={isUpdate?updateTask:editTask}>{isUpdate?"Update":"Edit"}</button>
                <button className="btn btn-danger" onClick={removeTask}>Remove</button>
                
                
            </li>
        </>
    )
}
export default Task;