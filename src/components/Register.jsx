import React from 'react'
import "./Register.css"
import { useParams } from 'react-router-dom'
import RecCard from "../components/RecCard"
import {Events} from "../event-details"
import { useEffect,useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate=useNavigate()
    const {id}=useParams()
    const Event=Events.filter(e=>e.id==id)[0]
    const [eve,setEve]=useState([])
    const randomEventFetch=()=>{
        let recRand = [];
        while (recRand.length < 3) {
            let randomIndex = Math.floor(Math.random() * Events.length);
            let randomObject = Events[randomIndex];
            recRand.push(randomObject);

        setEve(recRand)
    }
}
useEffect(() => {
        randomEventFetch()
}, []);

  return (
    <div className='Register'>
        <img src={"https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/fd.png?alt=media&token=c2f25d22-dabf-44b1-90b1-0eeb491c07da"} className='background' />

        <div className="event-box">
            <div className="event-details">
                <div className="event-image">
                    <img src={Event.poster} alt="" />
                    <div className="reg">
                        <button className='reg-button'>Register now</button>
                    </div>
                </div>

                <div className="event-deet">
                    <p className='e-name'>{Event.name}</p>
                    <p className='e-descr'>{Event.descr}</p>
                    <div className="contact">
                        <div className="head">
                            <p style={{fontWeight:"bold"}}>Head</p>
                            <p>{Event.head}</p>
                            <div className="phno">
                                <FaPhoneAlt color='#E9C79A'/>
                                <p>{Event.headNo}</p>
                            </div>
                        </div>

                        <div className="subhead">
                            <p style={{fontWeight:"bold"}}>Subhead 1</p>
                            <p>{Event.sub1}</p>

                            <div className="phno">
                                <FaPhoneAlt color='#E9C79A'/>
                                <p>{Event.sub1No}</p>
                            </div>
                        </div>

                        <div className="subhead">
                            <p style={{fontWeight:"bold"}}>Subhead 2</p>
                            <p>{Event.sub2}</p>

                            <div className="phno">
                                <FaPhoneAlt color='#E9C79A'/>
                                <p>{Event.sub2No}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="recommended">
            {eve.length > 0 && eve.map((event, index) => (
                <div className="" onClick={()=>navigate(`/Register/${event.id}`)}>
                    <RecCard key={index} event={event} />
                </div>
                ))}
            </div>

        </div>
    </div>
    
  )
}

export default Register
