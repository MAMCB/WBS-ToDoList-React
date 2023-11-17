import {useState} from "react"


const Subtask = ({subTask,toggleSubCompletion,updateSubTaskArray,deleteSubTaskFromArray})=>{
    const[isUpdate,setIsUpdate]=useState(false);
    const [value, setValue] = useState("");
     const editTask = (e)=>{
        setIsUpdate(true);

    }

    const removeTask = ()=>{
        deleteSubTaskFromArray(subTask);


    }

    const updateTask = (e)=>{
        if(!value)
        {
            setIsUpdate(false);
            return;
        }
        const newTitle =value;
         updateSubTaskArray(subTask,newTitle)
          setIsUpdate(false);

    }

     return (
        <>

            <li className={`list-group-item subTask`}>
                <input type="checkbox" className="form-check-input" id={`check_${subTask.id}`} checked={subTask.done} onChange={()=>toggleSubCompletion(subTask.id)}/>
                {isUpdate?<input type="text" style={{width:"15rem"}} className="form-control"  placeholder={subTask.title} id={`edit_${subTask.id}`} onChange={(e)=>setValue(e.target.value)}/>:<label className="form-check-label" htmlFor={`check_${subTask.id}`}>{subTask.title}</label>}
                
                <button className="btn btn-success" onClick={isUpdate?updateTask:editTask}>{isUpdate?"Update":"Edit"}</button>
                <button className="btn btn-danger" onClick={removeTask}>Remove</button>
                
                
            </li>
        </>
    )

}
export default Subtask;