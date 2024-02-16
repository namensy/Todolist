import React from 'react'
import './Header.css'
import { IoPartlySunny } from "react-icons/io5";
import { FaCloudMoon } from "react-icons/fa";



function Header(props) {
    const { setTheme, theme } = props

    const toggleTheme = () => {
        if (theme === 'Light Mode') {
            setTheme('Dark Mode')
        } else {
            setTheme('Light Mode')
        }
    }

    return (
        <nav className='nav-container'>
            <div>
                <h1>TO-DO LIST</h1>
            </div>
            <div className='switch'>
                <span>{theme == 'Light Mode' ? <IoPartlySunny /> : <FaCloudMoon /> }</span>
                <span className='btn' onClick={() => toggleTheme()}>{theme}</span>
            </div>
        </nav>
    )
}

export default Header