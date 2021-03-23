import React, { useState } from 'react'
import './schedule_selector.css'
import Raspored from '../assets/raspored.json'





function Schedule_selector ()  {
    const [items, setItems] = React.useState(Raspored)
  /*  const renderMe = () => {
        const selectedId = item.target.value; 
        const selectedItem = Raspored.filter((item)=>item.id == selectedId)[0]
        setItems(selectedItem)
    onChange={(items) => {renderMe(items)}}*/

    return (
        <div className="schedule_selector">
            <label for="selectdrop">Izaberi opcinu:</label>
            <span className="select_wrap" >
                <select className="selectdrop">
                <option value="" selected disabled="disabled">Izaberite opcinu</option>
                    {items.map(item => (
                        <option
                        key={item.id}
                        value={item.id}>
                        {item.city}
                        </option>
                    ))}          
                </select>
                {items ? (
                    <p>{items.city}</p>
                ) : ( "" )}
            </span><p></p>
        </div>
    )
}






export default Schedule_selector
