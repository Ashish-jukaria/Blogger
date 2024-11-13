import './App.css'
import Blog from './Components/Blog'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthContextProvider from './Components/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'
import Dashboard from './Components/Hooks/Dashboard'
import { AnimatePresence, easeIn, easeInOut, motion } from "motion/react"
function App() {

  return (
    <>
    <motion.div initial={{scale:0,x: -3000, opacity:0}} animate={{scale:1,x:0, opacity:1}} transition={{ease:easeInOut,duration:2}}>
    <BrowserRouter>
    <AuthContextProvider>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Blog/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route element={<ProtectedRoute/>}>
               <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
        </Routes>
      </AuthContextProvider>

      </BrowserRouter>
      </motion.div>
    </>
  )
}

export default App
