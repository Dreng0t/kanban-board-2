import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import TodoDetails from './pages/TodoDetails';
import AddTodo from './pages/AddTodo';
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import kanban from './data/kanban.json';

function App() {
  const [todoToDisplay, setTodoToDisplay] = useState(kanban);

  useEffect(() => {
    console.log('Updated todos:', todoToDisplay);
  }, [todoToDisplay]); 

  const createTodo = (newTodoDetails) => {
    const todoIds = todoToDisplay.map((todoObj) => todoObj.id);
    const maxId = Math.max(...todoIds);
    const nextId = maxId + 1;

    const newtodo = {
      ...newTodoDetails,
      id: `${nextId}`,
    };
    const newList = [newtodo, ...todoToDisplay];
    setTodoToDisplay(newList);
  };

  const deleteTodo = (todoToDeleteId) => {
    const newList = todoToDisplay.filter((todo) => todo.id !== todoToDeleteId);
    setTodoToDisplay(newList);
  };

  const updateTodoStatus = (todoId, newStatus) => {
    const updatedTodos = todoToDisplay.map((todo) =>
      todo.id === todoId ? { ...todo, status: newStatus } : todo
    );
    setTodoToDisplay(updatedTodos);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              todosArr={todoToDisplay}
              callbackToDelete={deleteTodo}
              setTodosArr={setTodoToDisplay}
              updateTodoStatus={updateTodoStatus}
            />
          }
        />
        <Route path='/create' element={<AddTodo callbackToCreate={createTodo} />} />
        <Route path='/about' element={<About />} />
        <Route path='/todos/:todoId' element={<TodoDetails todoArr={todoToDisplay} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
