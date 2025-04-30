import { DndContext, useDroppable } from '@dnd-kit/core';
import ListItem from '../components/ListItem';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ToDoList(props) {
    const [todos, setTodos] = useState(props.todosArr);

    useEffect(() => {
        setTodos(props.todosArr);
    }, [props.todosArr]);

    const todoToDos = todos.filter((todo) => todo.status === "To Do");
    const inProgressToDos = todos.filter((todo) => todo.status === "In Progress");
    const doneToDos = todos.filter((todo) => todo.status === "Done");

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return;

        const draggedId = active.id;
        const newStatus = over.id;

        props.updateTodoStatus(draggedId, newStatus);
    };

    const DroppableColumn = ({ id, title, children }) => {
        const { setNodeRef } = useDroppable({ id });

        return (
            <div ref={setNodeRef} className="column">
                <h2>{title}</h2>
                {children}
            </div>
        );
    };

    const handleDelete = (todoId) => {
        props.deleteTodo(todoId); // Handle delete in ToDoList
    };

    return (
        <section className="TodoList">
            <h1>Number of To Dos: {todos.length}</h1>
            <Link to="/create">
                <button className="btn btn-primary">Add To Do</button>
            </Link>

            <DndContext onDragEnd={handleDragEnd}>
                <div className="board">
                    <DroppableColumn id="To Do" title="To Do">
                        {todoToDos.map((todoObj) => (
                            <div key={todoObj.id}>
                                {/* Render the ListItem as usual */}
                                <ListItem todo={todoObj} deleteTodo={props.deleteTodo} />
                                {/* Render the buttons outside ListItem */}
                                <button onClick={() => handleDelete(todoObj.id)}>Delete this item</button>
                                <Link to={`/todos/${todoObj.id}`}>
                                    <button>More details</button>
                                </Link>
                            </div>
                        ))}
                    </DroppableColumn>

                    <DroppableColumn id="In Progress" title="In Progress">
                        {inProgressToDos.map((todoObj) => (
                            <div key={todoObj.id}>
                                <ListItem todo={todoObj} deleteTodo={props.deleteTodo} />
                                <button onClick={() => handleDelete(todoObj.id)}>Delete this item</button>
                                <Link to={`/todos/${todoObj.id}`}>
                                    <button>More details</button>
                                </Link>
                            </div>
                        ))}
                    </DroppableColumn>

                    <DroppableColumn id="Done" title="Done">
                        {doneToDos.map((todoObj) => (
                            <div key={todoObj.id}>
                                <ListItem todo={todoObj} deleteTodo={props.deleteTodo} />
                                <button onClick={() => handleDelete(todoObj.id)}>Delete this item</button>
                                <Link to={`/todos/${todoObj.id}`}>
                                    <button>More details</button>
                                </Link>
                            </div>
                        ))}
                    </DroppableColumn>
                </div>
            </DndContext>
        </section>
    );
}