import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './home.css'

import { useAuthContext } from '../context/AuthContext'
const Home = () => {
  const navigate = useNavigate()
    const [data,setData]=useState(null)
    const {userAuth}=useAuthContext()
    const {setUserAuth}=useAuthContext()
    const getdata=async()=>{
        try {
          console.log("userAuth=",userAuth)
            const response = await axios.post('http://localhost:3000/api/auth/home')
        
            setData(response.data)
            console.log(data)
            // localStorage.setItem('token',response.data.token)
        } catch (error) {
            console.log("error while sending data to backend",error)
        }
    
    }
    useEffect(()=>{
        getdata()
        

    },[])
  return (
    <div className='homeContainer'>
        
      <h1>
      {data&&data.name}
        </h1>
       
        <h2>
      {data&&data.email}
        </h2>
        <button onClick={()=>{
          localStorage.removeItem('tokens')
          setUserAuth(null)
          navigate('/login')

        }}>Logout</button>
        </div>
  )
}

export default Home