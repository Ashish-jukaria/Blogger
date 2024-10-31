import React from 'react'
import {createContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const AuthContext=createContext()


export default function AuthContextProvider({ children }){
    const [token,setToken]=useState(localStorage.getItem("token")||"")
    const navigate=useNavigate()

    const setLogin=async (data)=>{
        console.log('Login')
        console.log(data)
        const response=await axios.post("http://localhost:3000/signin",data)
        console.log(response)
        localStorage.setItem("token",response.data.token)
        if(response.status === 200){
            setToken(response.data.token)
            navigate('/dashboard')
        }
    }

    const Logout=()=>{
        setToken('')
        localStorage.removeItem("token")
        navigate('/login')
    }
    return(
        <AuthContext.Provider value={{token,setLogin,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}





