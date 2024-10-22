import React, { useState } from 'react'
import Mynavbar from './nav'
import Earn from './earn'
import Homescreen from './homescreen'
import Referals from './referals'
import Stats from './stats'


export default function Platform() {
const [rendered, setrendered] = useState("Home")
const componentrendered=(option)=>{
  setrendered(option)

}

      
  return (

    <>
    <div className="homepage">

        {
          rendered=="Home"?<Homescreen setrendered={setrendered} rendered={rendered}/>
        :(rendered=="Earn"?<Earn/>
        :(rendered=="Referals"?<Referals/>
        :(rendered=="Stats"?<Stats/>
        :<Homescreen/>
        )))
        }
        {<Mynavbar componentrendered={componentrendered}/>}
    </div>
    </>
  )
}
