import React, { useState } from 'react'
import Mynavbar from './nav'
import Earn from './earn'
import Homescreen from './homescreen'
import Referals from './referals'
import Stats from './stats'
import Login from './login'
import { useEffect } from 'react'
import Signup from './signup'
import Verfiy from './verfiy'
import Profile from './profile'


export default function Platform() {
const [rendered, setrendered] = useState("Login")


const ar=["Home","Earn","Referals","Stats","Signup","Login","Verify","Profile"]
const componentrendered=(option)=>{
  setrendered(option)
}

      
  return (

    <>
    <div className="homepage">

        {
          rendered==ar[0]?<Homescreen setrendered={setrendered} rendered={rendered}/>
        :(rendered==ar[1]?<Earn/>
        :(rendered==ar[2]?<Referals/>
        :(rendered==ar[3]?<Stats/>
        :(rendered==ar[4]?<Signup setrendered={setrendered} rendered={rendered}/>
        :(rendered==ar[5]?<Login setrendered={setrendered} rendered={rendered}/>
        :(rendered==ar[6]?<Verfiy setrendered={setrendered} rendered={rendered}/>
        :(rendered==ar[7]?<Profile setrendered={setrendered}/>
        :<Login setrendered={setrendered} rendered={rendered}/>))
        ))
        )))
        }
        {![ar[4],ar[5],ar[6],ar[7]].includes(rendered)?<Mynavbar componentrendered={componentrendered}/>:false}
    </div>
    </>
  )
}
