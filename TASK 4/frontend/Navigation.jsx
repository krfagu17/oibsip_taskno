import React from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import Login from './components/login/Login'
import Registration from './components/registration/Registration'
import Home from './components/home/Home'
import { useAuthContext } from './components/context/AuthContext'

const Navigation = () => {
  const {userAuth}=useAuthContext()
  return (
    <Router>
      <Routes>
        <Route path="/" element={userAuth ?<Navigate to="/home" />:<Registration />} />
        <Route path="/login" element={userAuth ?<Navigate to='/home'/>:<Login />} />
        <Route path="/home" element={userAuth ? <Home />:<Navigate to="/login"/>} />
      </Routes>
    </Router>
  )
}

export default Navigation