import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../actions/task';

const Tasks = () => {
    
    const dispatch = useDispatch();

    const getTasks = async () => {
        try {
            await dispatch(fetchTasks());
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getTasks();
    },[]);
    const {taskData, loading} = useSelector((state)=>state.task);
    console.log(taskData);
    console.log(loading);
    
    return loading ? (
        <h1>Loading...</h1>
    ) : (
        <div>
            {taskData.map((task)=>(
                <div key={task._id}>
                    <h1>Name:{task.name}</h1>
                    <h2>Desc:{task.description}</h2>
                    <h3>Creator:{task.creator.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default Tasks
