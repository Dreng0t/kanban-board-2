import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [priority, setPriority] = useState("");
    const [dueDate, setDueDate] = useState("");

    const navigate = useNavigate();

    const notify = () => toast('To Do Created !');

    const handleSubmit = (e) => {
        e.preventDefault();

        let today = new Date();

        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        today = `${yyyy}-${mm}-${dd}`

        const newTodo = {
            title: title,
            assignee: assignee,
            description: description,
            status: "To Do",
            priority: priority,
            createdDate: `${today}`,
            dueDate: dueDate
        }

        notify();

        props.callbackToCreate(newTodo);

        setTitle("")
        setDescription("")
        setAssignee("")
        setPriority("")
        setDueDate("")

        navigate("/")
    }

    return (
        <section className="card">
            <h2>Create a new thing to do</h2>

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


                <button type="submit">Create</button>
            </form>
        </section >
    )
}

export default AddTodo