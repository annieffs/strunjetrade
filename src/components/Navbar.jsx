import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
        <Link to={'/'} className="navbarLogo"> STRUNJE-TRADE </Link>
            

            <ul className="navLinks">
                <div className="burgerMenu">
                    <div className="burger"></div>
                </div>
                
                <li><Link to={'/o_nama'} className="navLink"> O NAMA </Link></li>
                <li><Link to={'/raspored_odvoza'} className="navLink">RASPORED ODVOZA</Link></li>
                <li><Link to={'/cjenik_usluga'} className="navLink">CJENIK USLUGA</Link></li>
                <li><Link to={'/kontakt'} className="navLink">KONTAKT</Link></li>
            </ul>
            

        </nav>
    )
}

export default Navbar
