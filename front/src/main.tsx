import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import Home from '@/Pages/Home'
import Login from '@/Pages/Login';
import Registration from '@/Pages/Registration';
import AddPost from '@/Pages/AddPost';
import FullPost from '@/Pages/FullPost';
import App from './App';
import store from './store';


import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
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
        path: '/posts/:id/edit',
        element: <AddPost />,
      },
      {
        path: '/posts/:id',
        element: <FullPost />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
