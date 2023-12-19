import React, { useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import './NavbarStyle.css'
import { Container } from 'react-bootstrap';

export const Navbar = () => {

    const [clickHumburger, setClickHumburger] = useState(false)
    
    return (
        <div className='navbar-menu'>
            <Container className=''>
            <nav className="nav d-flex align-items-center">
                <a className="navbar-brand" href="/">MarF.</a>
                <div className="navbar-humburger d-lg-none" onClick={()=> setClickHumburger(!clickHumburger)}>
                    <BiMenuAltRight className='humburgerIcon'/>
                </div>
                <ul className={`nav-ul ${ clickHumburger ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a className="nav-link" href='#home' >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#about' >About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#skills' >Skill</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='#project' >Project</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link contact-menu" href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
            </Container>
        </div>
        
    )
}
