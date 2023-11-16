import Task from "./Task";

const DisplayTasks = ({tasks,setTasks,updateTaskArray,deleteTaskFromArray})=>{
    const toggleCompletion = (id) =>{
        setTasks((previous)=>previous.map((t)=>(t.id === id? {...t,done: !t.done} :t))
        );
    }
    return (
        <>
        <ul className="list-group">
            {tasks.length>0?tasks.sort((a,b)=>(a.done?1:-1)).map((task)=>(<Task key={task.id} task={task} toggleCompletion={toggleCompletion} tasks={tasks} updateTaskArray={updateTaskArray} deleteTaskFromArray={deleteTaskFromArray}/>)):<p>No tasks</p>}
           
            
      </ul>
        </>
    )
}
export default DisplayTasks;