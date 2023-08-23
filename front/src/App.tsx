// import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/Pages/Home'
import Login from '@/Pages/Login';
import Registration from '@/Pages/Registration';
import AddPost from '@/Pages/AddPost';
import FullPost from '@/Pages/FullPost';
import Header from '@/Components/Header'

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Registration />,
  },
  {
    path: '/add-posts',
    element: <AddPost />,
  },
  {
    path: '/posts/:id',
    element: <FullPost />,
  },
]);


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='container'>
        <RouterProvider router={router} />
        {/*<FullPost />*/}
        {/*<AddPost />*/}
        {/*<Login />*/}
        {/*<Registration />*/}
      </div>
    </>
  )
}

export default App
