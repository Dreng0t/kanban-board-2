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
    );
  }