import './App.css'
import { Header } from './components/Header';
import { TaskModel } from './model/TaskModel';
import { Main } from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  const addTask = (taskModel: TaskModel) => {
    console.log(taskModel)
  }
  return (
    <div className="App" style={{ backgroundImage: `url("./background.jpeg")` }}>
      <div className='App-content'>
        <Header title="Task Manager" addTask={addTask} />
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/tasks'>Tasks</Link></li>
        </ul>
        <Main />
      </div>
    </div>
  );
}
export default App;