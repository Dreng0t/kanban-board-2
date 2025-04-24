import { Link, useParams } from "react-router-dom";

export default function TodoDetails(props) {
    const { todoId } = useParams();
    

    const todo = props.todoArr.find((todoObj) => {
        return todoObj.id === todoId;
    });

    console.log(todo);

    let priority;
    if (todo.status === 'To Do' || todo.status === 'In Progress') {
      priority = "🙁"
    } else {
      priority = '✔️'
    }

    return (
        <>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <p>Assignee: {todo.assignee}</p>
            <p>Status: {todo.status} {priority}</p>
            <p>Added on {todo.createdDate}</p>
            <p>Due by {todo.dueDate}</p>

            <p>
                <Link to="/" className="btn btn-primary">Back</Link>
            </p>
        </>
    )
}