import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './Hooks/useAuth'
import './Styling/navbar.css'
export default function Navbar() {
    const auth=useAuth()
    const [login,setLogin] = useState(true)
    function handleLogin(e){
        setLogin(!login)
     


    }
  return (
    <div id='main'>
        <div className='heading'>
            Blog App
        </div>

        <div className='div2'>
            <div className='homelink'>
            {localStorage.getItem("token")==auth.token && window.location.pathname==='/'?<Link to="/dashboard">Dashboard</Link>:<Link to="/">Home</Link>}
            </div>

            <div className='auth'>
            {localStorage.getItem("token")==auth.token ? <Link onClick={()=>{auth.Logout()}}>Logout</Link>:window.location.pathname!='/login' ? <Link to="/login" onClick={handleLogin}>Login</Link> : <Link to="/signup" onClick={handleLogin}>Signup</Link>}  
            </div>
        </div>
       
    </div>
  )
}
