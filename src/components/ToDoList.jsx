import kanban from '../data/kanban.json'
import ListItem from '../components/ListItem'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDoList(props) {

    const todoToDos = props.todosArr.filter((todo) => todo.status === "To Do");
    const inProgressToDos = props.todosArr.filter((todo) => todo.status === "In Progress");
    const doneToDos = props.todosArr.filter((todo) => todo.status === "Done");

    return (
        <section className="TodoList">

            <h1>Number of To Dos: {props.todosArr.length}</h1>

            <Link to="/create">
                <button className="btn btn-primary">Add To Do</button>
            </Link>


            <div className="board">
                <div className="column">
                    <h2>To Do</h2>
                    {todoToDos.map((todoObj) => (
                        <ul key={todoObj.id} className="card">
                            <li>
                                <ListItem todo={todoObj} deleteTodo={props.deleteTodo} />
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="column">
                    <h2>In Progress</h2>
                    {inProgressToDos.map((todoObj) => (
                        <ul key={todoObj.id} className="card">
                            <li>
                                <ListItem todo={todoObj} deleteTodo={props.deleteTodo} />
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="column">
                    <h2>Done</h2>
                    {doneToDos.map((todoObj) => (
                        <ul key={todoObj.id} className="card">
                            <li>
                                <ListItem todo={todoObj} deleteTodo={props.deleteTodo} />
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

        </section>
    )
}

