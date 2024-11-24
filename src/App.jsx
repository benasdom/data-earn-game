import { useState } from 'react'
import './App.css'
import Login from './screens/login'
import Platform from './screens/platform'
import Verfiy from './screens/verfiy'
import Profile from './screens/profile'


function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 {/* <Login/> */}
 {/* <Platform/> */}
 {/* <Profile/> */}
 <Verfiy/>
 </>
  )
}

export default App

// documentation api 
// https://u7l7iwjw72.apidog.io/api-10775762
