 import React from 'react'
 import "./Events.css"
import Card from "./Card"
import { useNavigate } from 'react-router-dom'

 function Events() {
  const nav=useNavigate()
   return (
    <div className='Events'>
      <div className="heading">Events</div>
      {/* <button className='res' onClick={()=>nav("/events/results")}>Results</button> */}
    <div className='New1'>
      <Card/>
    </div>
    </div>
)
   
 }
 
 export default Events