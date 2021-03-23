import React from 'react'
import Navbar from '../components/Navbar'
import Mail from '../assets/mail.png'
import Phone from '../assets/phonecall.png'
import Fax from '../assets/fax.png'
import Pin from '../assets/pin.png'
import Membership from '../assets/membership.png'
import Valid from '../assets/valid.png'
import '../views/contact.css'

const Contact = () => {
    return (
        <div className ="contact">
            <Navbar/>
            <div className="flex_wrap">
                <div className="flex_left">
                    <div className="flex_box">
                    <img className="img" src={ Mail } alt=""/>    
                    <p>E-mail:  strunje.trade@gmail.com</p>
                    </div>
                    <div className="flex_box">
                    <img className="img" src={ Membership } alt=""/>    
                    <p>OIB: 97670986612</p>
                    </div>
                    <div className="flex_box">
                    <img className="img" src={ Pin } alt=""/>    
                    <p>Adresa:  32251 Privlaka, <br></br> Bana Josipa Šokčevića 153</p>
                    </div>
                <div className="flex_right">
                    <div className="flex_box">
                    <img className="img" src={ Valid } alt=""/>    
                    <p>HR5324840081500152798IBAN: <br></br> HR6124840081100516534</p>
                    </div>
                    <div className="flex_box">
                    <img className="img" src={ Phone } alt=""/>    
                    <p>Tel:  +385 (0) 398 048</p>
                    </div>
                    <div className="flex_box">
                    <img className="img" src={ Fax } alt=""/>    
                    <p>Fax:  +385 (0) 398 048</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
