import { useState } from 'react'
import './App.css'
import Login from './screens/login'
import Platform from './screens/platform'
import Verfiy from './screens/verfiy'


function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 {/* <Login/> */}
 <Platform/>
 
 {/* <Verfiy/> */}
 </>
  )
}

export default App
