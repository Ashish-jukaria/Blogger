import './App.css'
import Blog from './Components/Blog'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthContextProvider from './Components/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'
import Dashboard from './Components/Hooks/Dashboard'
function App() {

  return (
    <>
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
    </>
  )
}

export default App
