import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import kanbanboard from '../assets/kanbanboard.svg'

export default function Navbar() {
    return (
        <div>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <img className="logo" src={kanbanboard}></img>
            <h1>KanBan Board</h1>
            <nav>
                <NavLink  to='/about'>About us</NavLink>
                <NavLink to='/'>Home</NavLink>
            </nav>
            </div>
        </div>
    )
}