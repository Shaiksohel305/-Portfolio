import React from 'react'
import { FaFolder, FaHome, FaPhone, FaTools, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='bg-white p-5 shadow-md shadow-gray-400 sticky top-0'>
            <div className="container mx-auto flex justify-between items-center ">
                <h2 className='text-xl font-bold'>SOHEL-Dev</h2>
                <ul className='flex space-x-4'>
                    <li><Link to="/" className='hover:text-black-600'><FaHome />Home</Link> </li>
                    <li><Link to="/about" className='hover:text-gray-600 hover:underline'><FaUser />About</Link></li>
                    <li><Link to="/project" className='hover:text-gray-600 hover:underline'><FaFolder />Projects</Link></li>
                    <li><Link to="/skills" className='hover:text-gray-600 hover:underline'><FaTools />Skills</Link></li>
                    <li><Link to="/contact" className='hover:text-gray-600 hover:underline'><FaPhone />Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav