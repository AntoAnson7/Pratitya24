import React from 'react'
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
            <img src={"https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/logo.png?alt=media&token=0b87dbfd-7f60-46dc-969f-4bf189bb292b"} className='logo' onClick={()=>navigate("/")}/>
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