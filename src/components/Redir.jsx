import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Redir() {
    const nav=useNavigate()
    useEffect(() => {
        nav("/Pratitya24")
      },[]);
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"}}>Redirecting..</div>
  )
}

export default Redir