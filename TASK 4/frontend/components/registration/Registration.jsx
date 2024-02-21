import React from 'react'
import './registration.css'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Registration = () => {
const Navigate=useNavigate()
  const handleSubmit = async(e) => {

    e.preventDefault()
    const registerData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      confirmPassword: e.target[3].value

    }

    //sending data to backend
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register',registerData)
      console.log(response)

      if(response.status===201){
        
        toast("User Registered Successfully")
        Navigate('/home')
      }
    } catch (error) {
      console.log("error while sending data to backend",error)
    }
    console.log(registerData)
  }
  return (
    <div className='mainContainer'>
     
      <h1>Registration Form</h1>
      <div className="register-box">

        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>

          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>

          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Confirm Password</label>
          </div>

          <center>
            <button >
              Register
              <span></span>
            </button></center>
        </form>
        <div style={{textAlign:'center',display:'flex',gap:20,width:'auto',justifyContent:'center'}}>

        <span style={{color:'white'}}>If dont have account then </span>
        <Link className='links' to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Registration