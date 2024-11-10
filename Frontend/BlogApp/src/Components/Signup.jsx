import React, { useState,useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const[alert,setAlert]=useState("false")
    const [message,setMessage]=useState('')
    const navigate = useNavigate()

    useEffect(() => {
      if (username.length < 5) {
        setAlert(true);
        setMessage("Username must be at least 5 characters.");
      } else if (password.length < 5) {
        setAlert(true);
        setMessage("Password must be at least 5 characters.");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setAlert(true);
        setMessage("Email is not valid.");
      } else {
        setAlert(false);
        setMessage("");
      }
    }, [username, password, email]);

    function handleChange(e) {
      const { name, value } = e.target;
      if (name === "email") {
        setEmail(value);
      } else if (name === "username") {
        setUsername(value);
      } else if (name === "password") {
        setPassword(value);
      }
    }

    async function  handleSignup(){
        const response = await axios.post("https://blogger-c93i.onrender.com/signup",{username,password,email})
        if(response.status === 201){
            navigate('/login')
        }
    }
  return (
<div className="authtopmain">   
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
    </div> 
  );
}
