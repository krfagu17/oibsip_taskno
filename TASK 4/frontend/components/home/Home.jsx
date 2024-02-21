import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './home.css'
const Home = () => {
    const [data,setData]=useState(null)
    const getdata=async()=>{
        try {
            const response = await axios.post('http://localhost:3000/api/auth/home')
        
            setData(response.data)
            console.log(data)
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
        {}
        </div>
  )
}

export default Home