import { Link, useParams } from "react-router-dom";

export default function TodoDetails(props) {
    const { todoId } = useParams();
    

    const todo = props.todoArr.find((todoObj) => {
        return todoObj.id === todoId;
    });

    console.log(todo);

    let emoji;
    if (todo.status === 'To Do' || todo.status === 'In Progress') {
      emoji = "🙁"
    } else {
      emoji = '✔️'
    }

    return (
        <>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <p>Assignee: {todo.assignee}</p>
            <p>Status: {todo.status} {emoji}</p>
            <p>Priority: {todo.priority}</p>
            <p>Added on {todo.createdDate}</p>
            <p>Due by {todo.dueDate}</p>

            <p>
                <Link to="/" className="btn btn-primary">Back</Link>
            </p>
        </>
    )
}