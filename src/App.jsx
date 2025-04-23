import { useState } from 'react'
import Home from './pages/Home'
import ToDoList from './components/ToDoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
      <Home/>     
      <ToDoList/>
    </>
  )
}

export default App
