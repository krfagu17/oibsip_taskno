import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from '../Navigation'
import { AuthContextProvider } from '../components/context/AuthContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthContextProvider>

       <Navigation />
    </AuthContextProvider>
    
      
    </>
  )
}

export default App
