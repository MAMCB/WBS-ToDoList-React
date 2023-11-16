import Task from "./Task";

const DisplayTasks = ({tasks,setTasks})=>{
    const toggleCompletion = (id) =>{
        setTasks((previous)=>previous.map((t)=>(t.id === id? {...t,done: !t.done} :t))
        );
    }
    return (
        <>
        <ul className="list-group">
            {tasks.sort((a,b)=>(a.done?1:-1)).map((task)=>(<Task key={task.id} task={task} toggleCompletion={toggleCompletion}/>))}
           
            
      </ul>
        </>
    )
}
export default DisplayTasks;