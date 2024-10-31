import React, { useState } from 'react'
import { useAuth } from './Hooks/useAuth'
import './Styling/Login.css'

export default function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const auth=useAuth();
    async function handleLogin(){
        const obj=({username:username,password:password})
        console.log(obj)
        await auth.setLogin(obj)
    }
  return (
    <div id='authmain'>
        <div className='authinput'>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" id="username" placeholder='Username' />
        </div>
        <div className='authinput'>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Password' />
        </div>
        <div className='authbutton'>
            <button onClick={handleLogin}>Login</button>
        </div>
      
    </div>
  )
}
