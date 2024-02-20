import React from 'react'
import logo from "../assets/logo.png"
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RiMenuFill } from "react-icons/ri";

function Navbar() {
  const navigate=useNavigate()
  const [menu,setShowMenu]=useState(false)
  return (
    <div className='Navbar'>
        <div className="logo-class">
            <img src={logo} className='logo' onClick={()=>navigate("/")}/>
        </div>

        <div class="nav-links">
             <p onClick={()=>navigate("/")} className='home-link'>Home</p>
             <a href="#about">About</a>
             <p onClick={()=>navigate("/events")} className='events-link'>Events</p>
        </div>

        <div className="ham" onClick={()=>setShowMenu(!menu)}>
        <RiMenuFill color='#E9C79A' size={"40px"}/>
        </div>

        {menu==true?(
          <div className="hidden-menu">
            <p onClick={()=>{setShowMenu(false)
              navigate("/")}}>Home</p>

            <p onClick={()=>{setShowMenu(false)
              navigate("/events")}}>Events</p>
            <p>About us</p>
          </div>
        ):<></>}
        
    </div>
  )
}

export default Navbar