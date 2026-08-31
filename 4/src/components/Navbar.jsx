import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="px-4 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:shadow-lg transition-shadow">
            <p className='blue-gradient_text text-lg tracking-wide'>Mohamed Sabry</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold': 'text-black hover:text-blue-500 transition-colors'}>
                About
            </NavLink>
            <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-black hover:text-blue-500 transition-colors"}>
                Projects
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-black hover:text-blue-500 transition-colors"}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar