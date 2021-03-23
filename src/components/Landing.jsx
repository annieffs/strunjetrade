import React from 'react'
import './landing_alt.css'


import {ReactComponent as Leptir} from '../assets/leptir2.svg'
import Navbar from './Navbar'

const Landing = () => {
    return (
        <div className="landing">
            <Navbar/>
            <div className="wrap">
            
                <div className="title border">
                    <p className="row1">Čuvajmo  okoliš</p>
                    <p className="row2">zajedno.</p>
                </div>
                <div className="subtitle border">
                    <p>STRUNJE-TRADE d.o.o<br></br>
                    Poduzeće za skupljanje neopasnog otpada</p>
                </div>
                <div className="action_btn border">
                    <button className="cta">Saznaj više</button>
                </div>
                <div className="img_wrap border">
                    <Leptir className="img_svg border"/>
                </div>
            </div>




        </div>


    )
} 

export default Landing
