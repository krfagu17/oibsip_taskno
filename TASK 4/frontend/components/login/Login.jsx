import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { toast } from 'react-toastify'

import { useAuthContext } from '../context/AuthContext'
const Login = () => {

  const {setUserAuth}=useAuthContext()
    const navigate = useNavigate()
    const handleSubmit =async (e) => {
        e.preventDefault()
        const loginData = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        try {
          const response = await axios.post('http://localhost:3000/api/auth/login',loginData)
          if(response.status===200){
            localStorage.setItem('tokens',response.data.token)
          toast("User Logged in Successfully")
          setUserAuth(localStorage.getItem('tokens'))
          console.log(response.data.token)
          
            navigate('/home')
          }
        } catch (error) {
          console.log("error while sending data to backend",error)
        }
    }
  return (
    <div className='mainContainer'>
    
      <h1>Login Form</h1>
      <div className="login-box">

        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>
          

          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <center>
            <button >
              Login
              <span></span>
            </button>

            </center>
            
        </form>
        <div style={{textAlign:'center',display:'flex',gap:20,width:'auto',justifyContent:'center'}}>

        <span style={{color:'white'}}>If dont have account then </span>
        <Link className='links' to="/">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login