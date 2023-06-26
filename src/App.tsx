import { useState } from 'react';
import './App.css'
import { Header } from './components/Header';
import { Task } from './components/Task';
import { TaskModel } from './model/TaskModel';

function App() {
  const taskModel: TaskModel[] = JSON.parse(`
  [
    {
      "id" : 1,
      "description" : "Doctor appointment",
      "day" : "23rd June 2023",
      "reminder" : true
    },
    {
      "id" : 2,
      "description" : "First Date",
      "day" : "24th June 2023",
      "reminder" : false
    },
    {
      "id" : 3,
      "description" : "Shopping at trafford",
      "day" : "25th June 2023",
      "reminder" : false
    }    
  ]
  `)
  const [tasks, setTasks] = useState(taskModel)
  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id != id))
  }

  const addTask = (data: TaskModel) => {
    setTasks([...tasks, data])
  }

  const setReminder = (id: number) => {
    setTasks(tasks.map((t) => {
      if (t.id === id) {
        t.reminder = !t.reminder
      }
      return t
    }))
  }

  return (
    <div className="App">
      <Header title="Task Manager" addTask={addTask} />
      {tasks.map(task => <Task key={task.id} value={task} handleClick={removeTask} setReminder={setReminder} />)}
    </div>
  );
}
export default App;