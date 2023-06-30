import { useReducer, useState } from 'react'
import { TaskModel } from '../model/TaskModel'
import { Task } from './Task'
import { TaskActionType, TaskState, taskReducer } from './TaskReducer'
import { Button } from './Button'
import "./TaskList.css"
import { TaskForm } from './TaskForm'

const TaskList = () => {
  const [isFormOpen, setFormOpen] = useState(false)

  const handleFormOpen = () => setFormOpen(!isFormOpen)

  const handleFormSubmission = (data: TaskModel) => {
    addTask(data)
    handleFormOpen()
  }
  const taskModelState: TaskState = {
    value: JSON.parse(`
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

  const [state, dispatchTask] = useReducer(taskReducer, taskModelState)

  const addTask = (data: TaskModel) => {
    dispatchTask({
      type: TaskActionType.ADD,
      payload: data
    })
  }

  const removeTask = (data: TaskModel) => {
    dispatchTask({
      type: TaskActionType.REMOVE,
      payload: data
    })
  }

  const resetReminder = (data: TaskModel) => {
    dispatchTask({
      type: TaskActionType.UPDATE_REMINDER,
      payload: data
    })
  }
  return (
    <div>
      <div className="tasklist-header">
        <h3 className='tasklist-header-title'>You can add your tasks here!!!!</h3>
        <Button name={isFormOpen ? "Close" : "Add"} handleEvent={handleFormOpen} />
      </div>
      {isFormOpen && <TaskForm onSubmit={handleFormSubmission}/>}
      {state.value.map(task => <Task key={task.id} value={task} handleClick={removeTask} setReminder={resetReminder} />)}
    </div>
  )
}

export default TaskList;
