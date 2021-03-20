import React from 'react'
import './about.css'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            <Navbar/>
            <h1>Tko smo mi i čime se bavimo</h1>

            <p>Tvrtka Strunje-Trade d.o.o. je osnovana 1996. godine.
            Osnovna djelatnost poduzeća je skupljanje neopasnog otpada na području Vukovarsko-srijemske županije.
            Sjedište poduzeća i skladište neopasnog otpada nalaze se na adresi: Bana Josipa Šokčevića 153, Privlaka.
            <br/><br/>
            Zaštita okoliša je dužnost svih nas, stanovnika naše jedine planete Zemlje.
            Strunje-Trade d.o.o. je tu obavezu i dužnost unio kao važan element u strukturi svog poduzeća. Svoje poslovne partnere i korisnike nastojimo poticati, educirati i usmjeravati prema istom cilju.
            <br/><br/>
            Uz odvoz miješanog komunalnog otpada, tvrtka postavlja i prazni kontejnere za odvojeno sakupljene vrste otpada (plastika, staklo, metal, tekstil), a sve s ciljem zaštite okoliša.
            <br/><br/>
            O svojim aktivnostima nastojimo upoznati korisnike usluga, te kako je briga za okoliš i potreba i obveza svih nas.
            </p>
        </div>
    )
}

export default About
