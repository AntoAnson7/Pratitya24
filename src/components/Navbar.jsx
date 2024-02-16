import React from 'react'
import logo from "../assets/logo.png"
import "./Navbar.css"

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="logo-class">
            <img src={logo} alt="" className='logo'/>
        </div>

        <div class="nav-links">
             <p>Home</p>
             <p>About</p>
             <p>Events</p>
        </div>
        
    </div>
  )
}

export default Navbar