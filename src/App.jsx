import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ToDoList from './components/ToDoList'
import Navbar from './components/Navbar'
import TodoDetails from './pages/TodoDetails'
import AddTodo from './pages/AddTodo'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import kanban from './data/kanban.json'

function App() {
  const [todoToDisplay, setTodoToDisplay] = useState(kanban);


  const createTodo = (newTodoDetails) => {

    // find out id for the movie that we want to add
    const todoIds = todoToDisplay.map((todoObj) => {
      return todoObj.id;
    });
    const maxId = Math.max(...todoIds);
    const nextId = maxId + 1;

    const newtodo = {
      ...newTodoDetails,
      id: nextId
    }
    const newList = [newtodo, ...todoToDisplay]

    setTodoToDisplay(newList)
  }


    const deleteTodo = (todoToDeleteId) => {

        const newList = todoToDisplay.filter((todo) => {
            if (todo.id !== todoToDeleteId) {
                return true; // keep it
            } else {
                return false; // discard it
            }
        })

        // const newList = todoToDisplay.filter(movie => movie.id !== movieToDeleteId)

        setTodoToDisplay(newList);
    }

  return (
    <>

      <Navbar />

      
  

      <Routes>
        <Route path='/' element={<Home todosArr={todoToDisplay} callbackToDelete={deleteTodo}/>}/>
        <Route path="/create" element={<AddTodo callbackToCreate={createTodo} />} />
        <Route path='/about' element={<About />} />
        <Route path='/todos/:todoId' element={<TodoDetails todoArr={todoToDisplay} />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
