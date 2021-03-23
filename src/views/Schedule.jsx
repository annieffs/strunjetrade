import React from 'react'
import Navbar from '../components/Navbar'
import ScheduleSelector from '../components/ScheduleSelector'
import './schedule.css'

const Schedule = () => {
    return (
        <div className="schedule">
            <Navbar/>
            <div className="schedule_wrap error2">
                <h1>Raspored odvoza po opstinama</h1>
                <ScheduleSelector/>
                <div className="selection error">
                    <h2>Babina greda</h2>

                    <p>Odvoz komulanog otpada i odvojeno sakupljenih vrsta otpada vrši se prema sljedećem rasporedu:</p>
                    <div className="green_box"></div>
                    <div className="green_box"></div>
                    <div className="green_box"></div>
                </div>
            </div>
        </div>
    )
}

export default Schedule
