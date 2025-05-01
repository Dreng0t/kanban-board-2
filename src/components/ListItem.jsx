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
    if (props.todo.priority === 'Medium' || props.todo.priority === 'High') {
        priority = "🙁";
    } else {
        priority = '✔️';
    }

    return (
        <div style={style} {...listeners} {...attributes}>
            <div ref={setNodeRef} style={{ cursor: 'grab', border: '1px solid gray', padding: '10px', marginBottom: '10px', background: 'black' }}>
                <p>{props.todo.title}</p>
                <p>Assignee: {props.todo.assignee}</p>
                <p>Priority: {props.todo.priority} {priority}</p>
                <p>Due by {props.todo.dueDate}</p>
            </div>
        </div>
    );
}
