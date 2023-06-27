import { useReducer } from 'react';
import './App.css'
import { Header } from './components/Header';
import { Task } from './components/Task';
import { TaskModel } from './model/TaskModel';
import { taskReducer, TaskState, TaskActionType } from './components/TaskReducer';

function App() {
  const taskModelState : TaskState = {
    value : JSON.parse(`
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
  }
  
  const [state, dispatchTask] = useReducer(taskReducer,taskModelState)

  const addTask = (data: TaskModel) => {
    dispatchTask({
      type : TaskActionType.ADD,
      payload : data
    })
  }

  const removeTask = (data: TaskModel) => {
    dispatchTask({
      type : TaskActionType.REMOVE,
      payload : data
    })
  }

  const resetReminder = (data: TaskModel) => {
    dispatchTask({
      type : TaskActionType.UPDATE_REMINDER,
      payload : data
    })
  }

  return (
    <div className="App">
      <Header title="Task Manager" addTask={addTask} />
      {state.value.map(task => <Task key={task.id} value={task} handleClick={removeTask} setReminder={resetReminder} />)}
    </div>
  );
}
export default App;