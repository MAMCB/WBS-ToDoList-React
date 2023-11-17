import Task from "./Task";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DisplayTasks = ({tasks,setTasks,updateTaskArray,deleteTaskFromArray})=>{
    const toggleCompletion = (id) =>{
        setTasks((previous)=>previous.map((t)=>(t.id === id? {...t,done: !t.done} :t))
        );
    }
    return (
        <>
        {tasks.length>0? <Tabs>
                            <TabList>
                                <Tab>All tasks</Tab>
                                <Tab>High priority</Tab>
                                <Tab>Medium priority</Tab>
                                <Tab>Low priority</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>All tasks</h2>
                                <ul className="list-group">
            {tasks.sort((a,b)=>(a.done?1:-1)).map((task)=>(<Task key={task.id} task={task} toggleCompletion={toggleCompletion} tasks={tasks} updateTaskArray={updateTaskArray} deleteTaskFromArray={deleteTaskFromArray}/>))}
           
            
                                </ul>
                            </TabPanel>
                            <TabPanel>
                                <h2>High priority tasks</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Medium priority tasks</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Low priority tasks</h2>
                            </TabPanel>
                        </Tabs>
        


        :<p>No tasks</p>}
        </>
    )
}
export default DisplayTasks;