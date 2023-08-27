import { Outlet } from 'react-router-dom'
import Header from '@/Components/Header'

import './App.css'


function App() {

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
