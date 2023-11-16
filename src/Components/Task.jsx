const Task = ({task,toggleCompletion})=>
{
   
    return (
        <>

            <li className={`list-group-item ${task.priority}`}>
                <input type="checkbox" className="form-check-input" id="check" checked={task.done} onChange={()=>toggleCompletion(task.id)}/>
                <label className="form-check-label" for="check">{task.title}</label>
                <span>Due date: {task.date}</span>
                <button className="btn btn-success">Edit</button>
                <button className="btn btn-danger">Remove</button>
                
                
            </li>
        </>
    )
}
export default Task;