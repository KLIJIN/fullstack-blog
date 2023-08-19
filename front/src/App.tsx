// import { useState } from 'react'
import Home from '@/Pages/Home'
import Header from '@/Components/Header'
import './App.css'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='container'>
        <Home />
        {/*<FullPost />*/}
        {/*<AddPost />*/}
        {/*<Login />*/}
        {/*<Registration />*/}
      </div>
    </>
  )
}

export default App
