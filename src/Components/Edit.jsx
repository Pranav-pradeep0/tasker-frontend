import React, { useEffect, useState } from 'react'
import './edit.css'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteTaskApi, updateTaskApi } from '../service/allapi'

const Edit = ({ tasks, onTaskUpdate }) => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [updatedTask, setUpdatedTask] = useState({
        taskDesc: '',
        completed: false
    })

    useEffect(() => {
        const taskToEdit = tasks.find((task) => task._id === id)

        if (taskToEdit) {
            setUpdatedTask({
                taskDesc: taskToEdit.taskDesc,
                completed: taskToEdit.completed,
            });
        }

    }, [id])

    const onTaskChange = (event) => {
        setUpdatedTask({
            ...updatedTask,
            taskDesc: event.target.value
        })
    }

    const toggleCompletedStatusTrue = () => {
        setUpdatedTask({
            ...updatedTask,
            completed: true,
        });
    };

    const toggleCompletedStatusFalse = () => {
        setUpdatedTask({
            ...updatedTask,
            completed: false,
        });
    };

    const onUpdateSubmit = async () => {
        const response = await updateTaskApi(id, updatedTask)
        console.log(response);
        onTaskUpdate();
        navigate('/')
    }

    const onDeleteClick = async () => {
        const response = await deleteTaskApi(id)
        console.log(response);
        onTaskUpdate();
        navigate('/')
    }

    return (

        <div>

            {

                updatedTask.taskDesc || updatedTask.completed ?

                    <div className='edit-cont mx-5'>
                        <div>
                            <input className='edit-content' value={updatedTask.taskDesc} type="text" name='taskDesc'
                                onChange={onTaskChange} />
                        </div>
                        <div className='d-flex gap-3 container'>
                            {/* <button className='btn btn-success'>Mark as Completed</button> */}

                            <button className="btn btn-danger" onClick={toggleCompletedStatusFalse}>Mark as Incomplete</button>

                            <button className="btn btn-success" onClick={toggleCompletedStatusTrue}>Mark as Completed</button>

                            <button className='btn btn-secondary ms-auto' onClick={onUpdateSubmit}>Save changes</button>
                            <button className='btn btn-danger' onClick={onDeleteClick}>Delete</button>
                        </div>
                    </div>
                    :

                    <div className='edit-cont mx-5'>
                        <p className='text-center'>Loading...</p>
                    </div>

            }
        </div>
    )
}

export default Edit