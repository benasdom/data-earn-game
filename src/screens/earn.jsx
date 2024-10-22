import React, { memo, useEffect, useState } from 'react'
import Videocomponent from './videocomponent'
import wheel from '../assets/wheel.png'
import mine from '../assets/mine.png'
import coin from '../assets/coin.png'
import Gamecomponent from './gamecomponent'
import Gamebottom from './gamebottom'
import Vidbottom from './vidbottom'
import Topbar from './topbar'

function Earn() {
    const [megabites, setmegabites] = useState("900")
const [gamefloor, setgamefloor] = useState(false)

let gameup=
[
 ...document.querySelectorAll(".toproamer"),
 ...document.querySelectorAll(".price"),
 ...document.querySelectorAll(".topcoin"),
 ...document.querySelectorAll(".roamed")
]
    const trig= ()=>{
        setgamefloor(true)

        let optiona=document.querySelector(".toproamer");
        gamefloor?optiona?.classList.add("toproameractive"):false;
       gamefloor?gameup?.map(a=>a.classList.add("gameactivated")):false
          }
      
      const untrig= ()=>{
        setgamefloor(false)
       let optionb=document.querySelector(".toproamer");
        optionb?.classList.remove("toproameractive");
       gameup?.map(a=>a.classList.remove("gameactivated"));
      
         }
      
      
useEffect(() => {
    return ()=>{gamefloor?trig():untrig()}
}, [gamefloor])


  
  return (
<div className="pagecontent">
<Topbar/>
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
{gamefloor?<Gamecomponent trig={trig} gamefloor={gamefloor} megabites={megabites} />:  <Videocomponent untrig={untrig} gamefloor={gamefloor} megabites={megabites} mine={mine}/>
}
  <div className="ffrow">
    <div className="toproamer">
    </div>
    <div className="vidgame"  onClick={untrig}>Videos</div>
    <div className="vidgame"  onClick={trig}>Games</div>
  </div>
  <div className="fvrow">
  {gamefloor?<Gamebottom  />:  <Vidbottom />}
  </div>
</div>
        </div>  )
}
export default memo(Earn)