import React, { useState } from 'react'
import Mynavbar from './nav'
import Earn from './earn'
import Homescreen from './homescreen'
import Referals from './referals'
import Stats from './stats'


export default function Platform() {
const [rendered, setrendered] = useState("Home")
const [gamefloor, setgamefloor] = useState(false)
const componentrendered=(option)=>{
  setrendered(option)

}
const trig= ()=>{
  setgamefloor(true)

  let option=document.querySelector(".toproamer");
   gamefloor?option?.classList.add("toproameractive"):false;

   let gameup=
   [
    ...document.querySelectorAll(".toproamer"),
    ...document.querySelectorAll(".price"),
    ...document.querySelectorAll(".topcoin"),
    ...document.querySelectorAll(".roamed")
  ]
  gamefloor?gameup?.map(a=>a.classList.add("gameactivated")):false
    }

const untrig= ()=>{
  setgamefloor(false)
 let option=document.querySelector(".toproamer");
  option?.classList.remove("toproameractive");
  let gameup=
  [
   ...document.querySelectorAll(".toproamer"),
   ...document.querySelectorAll(".price"),
   ...document.querySelectorAll(".topcoin"),
   ...document.querySelectorAll(".roamed")
 ] 
 gameup?.map(a=>a.classList.remove("gameactivated"));

   }


      
  return (

    <>
    <div className="homepage">

        {
          rendered=="Home"?<Homescreen/>
        :(rendered=="Earn"?<Earn gamefloor={gamefloor} trig={trig} untrig={untrig}/>
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
