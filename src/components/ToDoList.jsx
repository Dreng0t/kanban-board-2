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
                            <ListItem key={todoObj.id} todo={todoObj} deleteTodo={props.deleteTodo} />
                        ))}
                    </DroppableColumn>

                    <DroppableColumn id="In Progress" title="In Progress">
                        {inProgressToDos.map((todoObj) => (
                            <ListItem key={todoObj.id} todo={todoObj} deleteTodo={props.deleteTodo} />
                        ))}
                    </DroppableColumn>

                    <DroppableColumn id="Done" title="Done">
                        {doneToDos.map((todoObj) => (
                            <ListItem key={todoObj.id} todo={todoObj} deleteTodo={props.deleteTodo} />
                        ))}
                    </DroppableColumn>
                </div>
            </DndContext>
        </section>
    );
}