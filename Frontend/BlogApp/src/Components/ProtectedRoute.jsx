import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './Hooks/useAuth'

export default function ProtectedRoute() {
   const user=useAuth()
   if (user.token){
    return <Outlet/>
   }
   else{
    return <Navigate to='/login'/>

   }

}
