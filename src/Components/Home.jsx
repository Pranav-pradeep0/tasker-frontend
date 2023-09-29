import React, { useState } from 'react'
import './home.css'
import { newTaskApi } from '../service/allapi'

const Home = ({addNewTask}) => {

    const [newTask, setNewTask] = useState({
        task : '',
        completed : false
    })

    const updateTaskState = (e) => {
            setNewTask({...newTask,[e.target.name]:e.target.value})
    } 

    console.log(newTask);

    const handleAddNewTask = () => {
        addNewTask(newTask);
        setNewTask({ task: '', completed: false });
    };

    return (
        <div>
            <div className="container tasks-container">

                <h4 className='text-center my-4'>Write a new task</h4>

                <div class="task-input-cont mx-auto mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Start Typing . . ." name='task' value={newTask.task} onChange={updateTaskState}/>
                </div>

                <button className='btn btn-warning d-flex ms-auto' onClick={handleAddNewTask}> Add task </button>

            </div>
        </div>
    )
}

export default Home