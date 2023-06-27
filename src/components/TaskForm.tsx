import React, { useState } from 'react'
import { TaskModel } from '../model/TaskModel';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { BiCalendar } from "react-icons/bi";


interface FormProps {
  onSubmit: (data: TaskModel) => void;
}


export const TaskForm: React.FC<FormProps> = ({ onSubmit }: FormProps) => {
  const dateValue = new Date();
  const convertDate = (date: Date) => {
    return date.toDateString()
  }

  const [openCalendar, setOpenCalendar] = useState(false);
  const defaultValue : TaskModel= {
    id: 0,
    description: '',
    day: convertDate(dateValue),
    reminder: false
  }
  const [formData, setFormData] = useState<TaskModel>(defaultValue);
  
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    name === "reminder" ? setFormData({ ...formData, reminder: !formData.reminder }) : setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    formData.description.length > 0 && onSubmit({ ...formData, id: Math.floor(Math.random() * 1000) });
  }

  const onCalendarChange = (value: Value, event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedValue = value?.toString() != null ? value?.toString() : defaultValue.day
    const date = new Date(selectedValue);
    setFormData({...formData, day : convertDate(date)})
    onCalendarOpenAction()
  }

  const onCalendarOpenAction = () => {
    setOpenCalendar(!openCalendar)
  }

  return (
    <form className="Task-form" onSubmit={handleSubmit}>
      <h3 data-testid="add-task-form">Add Your task here!!......</h3>
      <label htmlFor='description'>Description:</label>
      <textarea data-testid="task-description" name="description" value={formData.description} onChange={handleInputChange} />
      <br />
      <br />
      <label htmlFor='day'>Day:</label>
      <input data-testid="task-day" type="text" name="day" value={formData.day} onChange={handleInputChange} />
      <BiCalendar onClick={onCalendarOpenAction}/>
      <br />
      <br />
      {openCalendar && <Calendar onChange={onCalendarChange} value={dateValue} /> }
      <br />
      <br />
      <label htmlFor='reminder'>Reminder:</label>
      <input data-testid="task-checkbox" type="checkbox" name="reminder" onChange={handleInputChange} />
      <br />
      <br />
      <br />
      <button data-testid="submitBtn" type="submit">Submit</button>
    </form>
  );
}
