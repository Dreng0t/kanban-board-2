import kanban from '../data/kanban.json'
import ListItem from '../components/ListItem'
import { useState } from "react";

export default function ToDoList(props) {
    
    return (
        <section className="TodoList">

            <h1>Number of To Dos: {props.todosArr.length}</h1>

            {props.todosArr.map((todoObj) => {
                return (
                    <ul key={todoObj.id} className="card">
                        <li>
                        <ListItem todo={todoObj} deleteTodo={props.deleteTodo}/>
                        </li>
                    </ul>
                )
            })}

        </section>
    )
}

