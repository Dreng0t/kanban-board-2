import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import kanbanboard from '../assets/kanbanboard.svg'

export default function Navbar() {
    return (
        <>
            <h1>KanBan Board</h1>
            <img src={kanbanboard}></img>
            <nav>
                <NavLink to='/about'>About us</NavLink>
                <NavLink to='/'>Home</NavLink>
            </nav>
        </>
    )
}