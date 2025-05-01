import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';


export default function UpdateTodo(props) {

    console.log(props);

    const notify = () => toast('To Do Updated !');

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [priority, setPriority] = useState("");
    const [dueDate, setDueDate] = useState("");

    const { todoId } = useParams()
    const navigate = useNavigate()

    console.log('todoId:', todoId);  // log todoId from useParams
    console.log('todoArr:', props.todoArr);

    const todo = props.todoArr.find((todoObj) => todoObj.id === todoId);

    console.log(todo);



    useEffect(() => {
        setTitle(todo.title)
        setDescription(todo.description)
        setAssignee(todo.assignee)
        setPriority(todo.priority)
        setDueDate(todo.dueDate)
    }, [todo])

    const handleSubmit = (e) => {
        e.preventDefault();

        let today = new Date();

        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        today = `${yyyy}-${mm}-${dd}`

        const newTodo = {
            ...todo,
            title: title,
            assignee: assignee,
            description: description,
            status: "To Do",
            priority: priority,
            createdDate: `${today}`,
            dueDate: dueDate
        }

        console.log(newTodo);

        notify();

        props.callbackToUpdate(newTodo);

        setTitle("")
        setDescription("")
        setAssignee("")
        setPriority("")
        setDueDate("")

        navigate("/")
    }

    return (
        <>
            <section className="card">
                <h2>Update a thing to do</h2>

                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input
                            type="text"
                            required
                            name="title"
                            placeholder="title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </label>

                    <label>
                        Description:
                        <input
                            type="text"
                            required
                            name="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </label>

                    <label>
                        Assignee:
                        <input
                            type="text"
                            name="assignee"
                            placeholder="Assignee"
                            value={assignee || ""}
                            onChange={(e) => { setAssignee(e.target.value) }}
                        />
                    </label>

                    <label>
                        Chose a priority:
                        <select
                            name="priority"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>



                    </label>

                    <label>
                        Due date:
                        <input
                            type="date"
                            name="duedate"
                            placeholder="Due Date"
                            value={dueDate}
                            onChange={(e) => { setDueDate(e.target.value) }}
                        />
                    </label>


                    <button>Update</button>
                </form>
            </section >
        </>
    )
}