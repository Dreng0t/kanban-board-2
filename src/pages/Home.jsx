import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ToDoList from '../components/ToDoList';

export default function Home(props) {
  console.log(props); 
  return (
    <>
      <Sidebar />
      <main>
        <ToDoList
          todosArr={props.todosArr}        
          deleteTodo={props.callbackToDelete} 
          updateTodoStatus={props.updateTodoStatus}    
        />
      </main>
      <Footer />
    </>
  );
}