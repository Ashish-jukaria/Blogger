import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const[alert,setAlert]=useState("false")
    const [message,setmessage]=useState('')
    const navigate = useNavigate()

    async function handleChange(e) {
      const{name,value}=e.target
      setAlert(true)
      if (name==='email'){
        if (value.length<5){
          setmessage('email is not valid')
        }
        else{
          setEmail(value)
          setmessage('enter username and password email is valid')
        }

      }

      if(name==='password'){
          if (value.length<5){
            setmessage('password is not valid')
          }
  
          else{
            setPassword(value)
            setmessage('password is valid')

          }
        

      }

      if(name==='username'){
          if (value.length<5){
            setmessage('username is not valid')
          }

          else{
            setUsername(value)
            setmessage('username is valid')
          }
  
      }

      if(username.length>5 && password.length>5 && email.length>5){
        setAlert(false)
      }

      
    }
    async function  handleSignup(){
        const response = await axios.post("https://blogger-c93i.onrender.com/signup",{username,password,email})
        if(response.status === 201){
            navigate('/login')
        }
    }
  return (
    <div id="authmain">
        <div>
          {alert? message:' '}
        </div>
        <div className="authinput">
        <input 
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e)=>(handleChange(e))}
        />
      </div>
      <div className="authinput">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={(e)=>(handleChange(e))}
        />
      </div>
      <div className="authinput">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e)=>(handleChange(e))}
        />
      </div>
      <div className="authbutton">
        <button disabled={alert? true:false} onClick={handleSignup}>Signup</button>
      </div>{" "}
    </div>
  );
}
