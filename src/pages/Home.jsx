import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ListItem from '../components/ListItem'
import ToDoList from '../components/ToDoList'

export default function Home(props) {
    console.log(props);
    return (
        <>
            <Sidebar />
            <ToDoList todosArr={props.todosArr} deleteTodo={props.callbackToDelete} />
            <Footer />
        </>
    )
}