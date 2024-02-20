// Card.js

import React from 'react';
import './Card.css';
import {Events} from "../event-details"
import RecCard from './RecCard';
import { useNavigate } from 'react-router-dom';

function Card() {
  const navigate=useNavigate()
  return (
    <div className='card-container'>
      {Events.map((event)=>{
        return (<div className="card" onClick={()=>navigate(`/Register/${event.id}`)}>
          <RecCard event={event} className="rec"/>
        </div>)
      })}

    </div>
  );
}

export default Card;
