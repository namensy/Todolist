import React from 'react'
import './Header.css'
import { IoPartlySunny } from "react-icons/io5";
import { FaCloudMoon } from "react-icons/fa";



function Header(props) {
    const { setTheme, theme } = props

    const toggleTheme = () => {
        if (theme === 'Light') {
            setTheme('Dark')
        } else {
            setTheme('Light')
        }
    }

    return (
        <nav className='nav-container'>
            <div>
                <h1>TO-DO LIST Management</h1>
            </div>
            <div className='switch'>
                <span>{theme == 'Light' ? <IoPartlySunny /> : <FaCloudMoon /> }</span>
                <span className='btn' onClick={() => toggleTheme()}>Switch</span>
            </div>
        </nav>
    )
}

export default Header