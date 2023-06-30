import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Loading } from "./Loading"
import { About } from './About';

const Login = lazy(() => import('./Login'));
const TaskList = lazy(() => import('./TaskList'));

export const Main = () => {
  const login = lazy(() => import("./Login"))
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/tasks' element={<TaskList />} />
        <Route path='/' element={<About />} />
      </Routes>
    </Suspense>
  )
}




