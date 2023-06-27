import { FaTimes} from 'react-icons/fa';
import './Task.css'
import { TaskModel } from '../model/TaskModel';

interface Props {
  value: TaskModel,
  handleClick : (data: TaskModel) => void
  setReminder : (data: TaskModel) => void
}

export const Task: React.FC<Props> = ({value, handleClick,setReminder}) => {
  return (
    <div className={`task-${value.reminder}`} onDoubleClick={() => setReminder({ ...value, reminder: !value.reminder })}>
        <h3 className='task-description'>{value.description} <FaTimes data-testid={`task-${value.id}-delete`} style={{color:'red', cursor:'pointer'}} onClick={() => handleClick(value)}/></h3>
        <p className='task-day'>{value.day}</p>
    </div>
  )
}
