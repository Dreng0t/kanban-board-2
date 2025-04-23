import kanban from '../data/kanban.json'
import { useState } from "react";
import ToDoList from './ToDoList';

export default function ListItem(props) {
    console.log(props)

    let priority;
    if (props.todo.status === 'Done') {
      priority = "✔️"
    } else if (props.todo.status === 'In Progress') {
      priority = '🙁'
    } else {
      priority =  '❌'
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
                        <button onClick={() => { props.functionToDelete(props.todo.id) }}>Delete this item</button>
                    </p>
                </li>
            </ul>
        </section>
    )
}