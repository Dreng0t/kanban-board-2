import kanban from '../data/kanban.json'
import ListItem from '../components/ListItem'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDoList(props) {
    
    return (
        <section className="TodoList">

            <h1>Number of To Dos: {props.todosArr.length}</h1>

            <Link to="/create">
            <button className="btn btn-primary">Add To Do</button>
            </Link>

            {props.todosArr.map((todoObj) => {
                console.log(todoObj);
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

