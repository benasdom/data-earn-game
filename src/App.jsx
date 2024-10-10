import { useState } from 'react'
import './App.css'
import Login from './screens/login'
import Home from './screens/home'


function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Login/>
 {/* <Home/> */}
 </>
  )
}

export default App
