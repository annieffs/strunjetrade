import React from 'react'
import './landing.css'
import {ReactComponent as Trash} from '../assets/kanta.svg'

const Landing = () => {
    return (
        <div className="landing">
            <div className="landingText">
                <h1>Čuvajmo  okoliš</h1>
                <h2>zajedno.</h2>
                <p>STRUNJE-TRADE d.o.o<br></br>
                Poduzeće za skupljanje neopasnog otpada</p>
            </div>
            <div className="imageContainer">
                <Trash className="landingImage"/>
            </div>
        </div>
    )
} 

export default Landing
