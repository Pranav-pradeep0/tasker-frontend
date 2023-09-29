import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Aside from './Components/Aside'
import { getAllTasks, newTaskApi } from './service/allapi'
import Edit from './Components/Edit'

function App() {

  const [tasks, setTasks] = useState([]);

  const [filteredTasks, setFilteredTasks] = useState([]);

  const getTasks = async () => {
    const response = await getAllTasks();
    setTasks(response.data);
  };

  const addNewTask = async (newTask) => {
    const response = await newTaskApi(newTask);
    getTasks()
  };

  const handleTaskUpdated = () => {
    getTasks();
  };

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      setFilteredTasks([]);
    } else {
      const filtered = tasks.filter((task) =>
        task.taskDesc.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTasks(filtered);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>

      <Navbar onSearch={handleSearch}></Navbar>

      <div className='content-parent '>
        <div class="task-lists"><Aside tasks={filteredTasks.length > 0 ? filteredTasks : tasks}></Aside></div>
        <div class="contents">
          <Routes>
            <Route path='/' element={<Home addNewTask={addNewTask}></Home>}></Route>
            <Route path='/edit/:id' element={<Edit onTaskUpdate={handleTaskUpdated} tasks={tasks}></Edit>}></Route>
          </Routes>
        </div>

      </div>

    </>
  )
}

export default App
