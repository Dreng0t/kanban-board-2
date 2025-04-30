import { useDraggable } from '@dnd-kit/core';
import { Link } from "react-router-dom";

export default function ListItem(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.todo.id,
    });

    const style = {
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
        cursor: 'grab',
        border: '1px solid gray',
        padding: '10px',
        marginBottom: '10px',
        background: 'black',
    };

    let priority;
    if (props.todo.status === 'To Do' || props.todo.status === 'In Progress') {
        priority = "🙁";
    } else {
        priority = '✔️';
    }

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
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
        </div>
    );
}