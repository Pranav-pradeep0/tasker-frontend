import React, { useEffect, useState } from 'react'
import './aside.css'
import { Link } from 'react-router-dom'

const Aside = ({ tasks }) => {

    return (
        <div className='aside container'>
            <ul class="list-group list-group-flush">
                {
                    tasks && tasks.length > 0 ?
                        tasks.map((task) => (
                            <li className="btn text-start" key={task._id}>
                                <Link className='text-decoration-none text-white' to={`/edit/${task._id}`}>
                                    <div className='test-list'>
                                        {task.taskDesc}
                                        <div>
                                            {task.completed == 'true' ? 
                                            <span class="badge p-2 text-bg-success">Completed</span>
                                            :
                                            <span class="badge p-2 text-bg-danger">Pending</span>
                                            }
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                        :
                        <li className="btn text-start">
                        No Tasks Found
                    </li>
                }
            </ul>
        </div>
    )
}

export default Aside