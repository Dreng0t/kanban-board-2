import kanban from '../data/kanban.json'
import { useState } from "react";
import ToDoList from './ToDoList';
import { Link } from "react-router-dom";

export default function ListItem(props) {
    console.log(props)

    let priority;
    if (props.todo.status === 'To Do' || props.todo.status === 'In Progress') {
      priority = "🙁"
    } else {
      priority = '✔️'
    } 

    return (
        <section className="ListItem">
            <ul key={props.todo.id} className="card">
                <li>
                    <p>{props.todo.title}</p>
                    <p>{props.todo.description}</p>
                    <p>Assignee: {props.todo.assignee}</p>
                    <p>Status: {props.todo.status} {priority}</p>
                    <p>Added on {props.todo.createdDate}</p>
                    <p>Due by {props.todo.dueDate}</p>
                    <p>
                        <button onClick={() => { props.deleteTodo(props.todo.id) }}>Delete this item</button>
                        <Link to={`/todos/${props.todo.id}`}>
                        <button>More details</button>
                        </Link>
                    </p>
                </li>
            </ul>
        </section>
    )
}