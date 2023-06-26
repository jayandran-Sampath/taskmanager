import { FaTimes} from 'react-icons/fa';
import './Task.css'
import { TaskModel } from '../model/TaskModel';

interface Props {
  value: TaskModel,
  handleClick : (id:number) => void
  setReminder : (id:number) => void
}

export const Task: React.FC<Props> = ({value, handleClick,setReminder}) => {
  return (
    <div className={`task-${value.reminder}`} onDoubleClick={() => setReminder(value.id)}>
        <h3 className='task-description'>{value.description} <FaTimes data-testid={`task-${value.id}-delete`} style={{color:'red', cursor:'pointer'}} onClick={() => handleClick(value.id)}/></h3>
        <p className='task-day'>{value.day}</p>
    </div>
  )
}
