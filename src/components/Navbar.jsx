import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import kanbanboard from '../assets/kanbanboard.svg'

export default function Navbar() {
    return (
        <div>
            <div className='navboard'>
            <NavLink to='/'>
            <img className="logo" src={kanbanboard}></img>
            </NavLink>
            <h1>KanBan Board</h1>
            <nav className='navlinks'>
                <NavLink  to='/about'>About us</NavLink>
            </nav>
            </div>
        </div>
    )
}