import React, { useState } from 'react'
import mine from '../assets/mine.png'
import play from '../assets/play.png'
import coin from '../assets/coin.png'

export default function Gamebottom({checking,setplaer,setplaying,setchecking}) {
    const [mins, setmins] = useState("Puzzle game")
    const [itemfig, setitemfig] = useState("900")

  return (
        <div className="comp">
        {setchecking(false), Array(20).fill("").map((a,b)=>{
         return (
          <div className="gameitems" key={b+""}>
          <div className="gameitemschild">
    <div className="gametop">
      <img src={mine} className='gamevidtop' alt="" srcset="" />
    </div>
          <div className="gametext">
          <img src={coin} alt="" srcset="" className="small" />
          <div className="vidtext1">
              {mins}
            </div>
          </div>
          <div className="play">
            Play
          </div>
          </div>

        </div>
        )})}
    
      </div>
        )
    }
    