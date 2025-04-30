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

    
    const handleDeleteClick = (e) => {
        e.stopPropagation(); // Prevent event from being consumed by drag-and-drop context
        console.log("Deleting todo with id:", props.todo); 
        props.deleteTodo(props.todo.id); // Use the prop to call the delete function
    };

    const handleMoreDetailsClick = (e) => {
        e.stopPropagation(); // Prevent event from being consumed by drag-and-drop context
        // Navigate to the Todo details page or show a modal, depending on your implementation
    };


    return (
        <div style={style} {...listeners} {...attributes}>
            <div ref={setNodeRef} style={{ cursor: 'grab', border: '1px solid gray', padding: '10px', marginBottom: '10px', background: 'black' }}>
                <p>{props.todo.title}</p>
                <p>{props.todo.description}</p>
                <p>Assignee: {props.todo.assignee}</p>
                <p>Status: {props.todo.status} {priority}</p>
                <p>Added on {props.todo.createdDate}</p>
                <p>Due by {props.todo.dueDate}</p>
            </div>
        </div>
    );
}
