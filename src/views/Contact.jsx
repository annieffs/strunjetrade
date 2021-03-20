import React from 'react'
import Navbar from '../components/Navbar'
import Mail from '../assets/mail.png'
import '../views/contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <img className="img" src={ Mail } alt=""/>
        </div>
    )
}

export default Contact
