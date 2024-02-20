import React from 'react'
import "./RecCard.css"

function RecCard(props) {
  console.log(props.event)
  const Event=props.event
  
  return (
    <div className='Recard'>
    <img src={Event.poster} className='card-pic' onClick={()=>console.log(props.event.id)}/>
  </div>
  )
}

export default RecCard