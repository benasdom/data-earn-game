import React, { useState } from 'react'
import Mynavbar from './nav'
import Videocomponent from './videocomponent'
import cyberearn from '../assets/cyberearn.png'
import notify from '../assets/notify.png'
import beginner from '../assets/beginner.png'
import wheel from '../assets/wheel.png'
import mine from '../assets/mine.png'
import play from '../assets/play.png'
import coin from '../assets/coin.png'
import Gamecomponent from './gamecomponent'

export default function Home() {
  const [itemfig, setitemfig] = useState("900")
  const [megabites, setmegabites] = useState("900")

  const [mins, setmins] = useState("90")
  const [gamefloor, setgamefloor] = useState(false)


  const trig= ()=>{
    setgamefloor(true)

    let option=document.querySelector(".toproamer");
     option.classList.add("toproameractive");

     let gameup=
     [
      ...document.querySelectorAll(".toproamer"),
      ...document.querySelectorAll(".price"),
      ...document.querySelectorAll(".topcoin"),
      ...document.querySelectorAll(".roamed")
    ]
    gameup.map(a=>a.classList.add("gameactivated"))
      }

  const untrig= ()=>{
    setgamefloor(false)
   let option=document.querySelector(".toproamer");
    option.classList.remove("toproameractive");
    let gameup=
    [
     ...document.querySelectorAll(".toproamer"),
     ...document.querySelectorAll(".price"),
     ...document.querySelectorAll(".topcoin"),
     ...document.querySelectorAll(".roamed")
   ] 
   gameup.map(a=>a.classList.remove("gameactivated"))

     }
      
  return (

    <>
    <div className="homepage">

        <div className="pagecontent">
{/* This should be a changeable component */}
<div className="topbar">
  <div className="profile"><img className="topimga" src={beginner} alt="" /></div>
  <div className="title"><img className="midimg" src={cyberearn} alt="" /><div className="ttext">CyberEarn</div></div>
  <div className="notice"><img className="topimg" src={notify} alt="" /></div>
</div>
<div className="nextbar">
  <div className="coincentered">
  <div className="topcoin"><img className='topimgs' src={coin} alt="" srcset="" /></div>
  <div className="topcoin"><img className='topimgs' src={coin} alt="" srcset="" /></div>
  <div className="topcoin"><div className="topcointxt"><div>Get Data</div> <div>By Watching Videos</div> </div>
  <div className="topcoinimgbox">
  <img className='ltopimg' src={wheel} alt="" srcset="" /></div>

  </div>
  </div>

</div>
<div className="roundedcontent">
{gamefloor?<Gamecomponent megabites={megabites} mine={mine} />:  <Videocomponent megabites={megabites} mine={mine}/>
}
  <div className="ffrow">
    <div className="toproamer">
    </div>
    <div className="vidgame" onClick={untrig}>Videos</div>
    <div className="vidgame" onClick={trig}>Games</div>
  </div>
  <div className="fvrow">
    {Array(20).fill("").map(a=>{
     return (
      <div className="viditems">
      <div className="viditemschild">
<div className="vidtop">
  <img src={mine} className='vidtop' alt="" srcset="" />
</div>
      <div className="vidtext">
      <div className="vidtext1">
          {mins} mins
        </div>
      </div>
      </div>
      <div className="viditemschild">
<div className="vidtop2">
  <img src={play} className='vidimg' alt="" srcset="" />
</div>
        <div className="vidtext">
          <img src={coin} alt="" srcset="" className="small" /><div className="vidtext2">{itemfig} MB</div>
        </div>
      </div>
    </div>
    )})}

  </div>
</div>
        </div>
        {<Mynavbar/>}
    </div>
    </>
  )
}
