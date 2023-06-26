import React, { useState } from 'react'
import { Button } from './Button'
import { TaskForm } from './TaskForm'
import './Header.css'
import { TaskModel } from '../model/TaskModel'

interface HeaderProps {
  title: String;
  addTask: (data:TaskModel) => void
}

export const Header : React.FC<HeaderProps> = ({title, addTask}) => {
  const [isFormOpen, setFormOpen] = useState(false)

  const handleFormOpen = () => setFormOpen(!isFormOpen)

  const handleFormSubmission = (data: TaskModel) => {
      addTask(data)
      handleFormOpen()
  }
  return (
    <div className="Header">
      <div className='Header-title'>
        <h1 className='Header-title-text'>{title}</h1>
        <Button name={isFormOpen?"Close":"Add"} handleEvent={handleFormOpen}/>
      </div>
      {isFormOpen && <TaskForm onSubmit={handleFormSubmission}/>}
    </div>
  )
}
