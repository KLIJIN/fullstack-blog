
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '@/store';
import { getUserData } from './store/slices/auth/requests';
import Header from '@/Components/Header'

import './App.css'



function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default App
