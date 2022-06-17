import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Wake up',
        day: 'June 15th at 8:00am',
        reminder: false,
    },
    {
        id: 2,
        text: 'Go to work',
        day: 'June 15th at 9:00am',
        reminder: false,
    },
    {
        id: 3,
        text: 'Study React',
        day: 'June 15th at 18:30pm',
        reminder: true,
    },
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
    task.id === id ? { ...task, reminder:
       !task.reminder } : task))
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/> 
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      ) : (
        'No Tasks To Show'
      )}        
          </div>
  );
}

export default App;
