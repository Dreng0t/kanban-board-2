import { useParams , Link} from "react-router";


export default function TodoDetails(props) {
    const { todoId } = useParams();
  
    const todo = props.todoArr.find((todoObj) => todoObj.id === todoId);
  
    if (!todo) {
      return (
        <>
          <h2>Todo not found</h2>
          <Link to="/" className="btn btn-primary">Back</Link>
        </>
      );
    }
  
    let emoji;
    if (todo.priority === 'Medium' || todo.priority === 'High') {
      emoji = "🙁"
    } else {
      emoji = '✔️'
    }
  
    return (
      <>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <p>Assignee: {todo.assignee}</p>
        <p>Status: {todo.status}</p>
        <p>Priority: {todo.priority} {emoji}</p>
        <p>Added on {todo.createdDate}</p>
        <p>Due by {todo.dueDate}</p>
  
        <p>
          <Link to="/" className="btn btn-primary">Back</Link>
        </p>
      </>
    );
  }