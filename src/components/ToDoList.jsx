import kanban from '../data/kanban.json'
import ListItem from '../components/ListItem'
import { useState } from "react";

export default function ToDoList() {
    const [todoToDisplay, setTodoToDisplay] = useState(kanban);

    const deleteTodo = (todoToDeleteId) => {

        const newList = todoToDisplay.filter((todo) => {
            if (todo.id !== todoToDeleteId) {
                return true; // keep it
            } else {
                return false; // discard it
            }
        })

        // const newList = moviesToDisplay.filter(movie => movie.id !== movieToDeleteId)

        setTodoToDisplay(newList);
    }

    return (
        <section className="TodoList">

            <h1>Number of To Dos: {todoToDisplay.length}</h1>

            {todoToDisplay.map((todoObj) => {
                return (
                    <ul key={todoObj.id} className="card">
                        <li>
                        <ListItem todo={todoObj} functionToDelete={deleteTodo}/>
                        </li>
                    </ul>
                )
            })}

        </section>
    )
}

/*
{todoToDisplay.map((todoObj) => {
                return (
                    <ul key={todoObj.id} className="card">
                        <li>
                        <p>{todoObj.title}</p>
                        <p>{todoObj.description}</p>
                        <p>Assignee: {todoObj.assignee}</p>
                        <p>Status: {todoObj.status}</p>
                        <p>Added on {todoObj.createdDate}</p>
                        <p>Due by {todoObj.dueDate}</p>
                        <p>
                            <button onClick={() => { deleteTodo(todoObj.id) }}>Delete this item</button>
                        </p>
                        </li>
                    </ul>
                )
            })}

*/