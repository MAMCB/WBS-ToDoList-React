const ProgressBar = ({tasks})=>{
      if (!tasks || !tasks.length) {
    // Handle the case where tasks is undefined or an empty array
    console.log(tasks);
    return <p>No tasks available.</p>;
  }
  console.log('tasks:', tasks);
    
    const amountOfTasks = tasks.length;
    const tasksCompleted = tasks.filter((task)=>{
        return task.done;
    })
    
    const progress = (tasksCompleted.length)*(100/amountOfTasks); 

    return (
        <>
        <div className="progress-container">
            <div className="progress-bar">
            <div className="progress-bar-fill" style={{width:progress+"%"}}>

            </div>

        </div>
        <h5 className="progress-text">Progress: {progress}%</h5>

        </div>
        
        </>
    )
};
export default ProgressBar;