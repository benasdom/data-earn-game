import React, { useState } from 'react'
import mine from '../assets/mine.png'
import play from '../assets/play.png'
import coin from '../assets/coin.png'

export default function Gamebottom() {
    const [mins, setmins] = useState("Puzzle game")
    const [itemfig, setitemfig] = useState("900")

  return (
        <div className="comp">
        {Array(20).fill("").map(a=>{
         return (
          <div className="gameitems">
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