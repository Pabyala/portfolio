import React, { useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import './NavbarStyle.css'

export const Navbar = () => {
    const [clickHumburger, setClickHumburger] = useState(false)
    return (
        <div className='navbar-menu'>
            <nav className="nav d-flex mx-auto align-items-center h-25">
                <a className="navbar-brand me-auto fs-4 custom-fw" href="/">MarF.</a>
                <div className="navbar-humburger" onClick={()=> setClickHumburger(!clickHumburger)}>
                    <BiMenuAltRight className='humburgerIcon'/>
                </div>
                <ul className={`nav-ul ${ clickHumburger ? 'active' : ''} list-unstyled d-flex justify-content-center align-items-center m-0`}>
                    <li className="nav-item">
                        <a className="nav-link custom-color" href='#home' >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link custom-color" href='#about' >About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link custom-color" href='#skills' >Skill</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link custom-color" href='#project' >Project</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link custom-color contact-menu" href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
