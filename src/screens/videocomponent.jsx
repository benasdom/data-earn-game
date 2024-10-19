import React, { useEffect, useState } from 'react'
import coin from '../assets/coin.png'
import coinstacked from '../assets/coinstacked.png'



export default function Videocomponent({mine,megabites,untrig,gamefloor}) {
  useEffect(() => {
    
    return () => {
      gamefloor==false?untrig():false;
    }
  }, [])
    return (
          <>
             <div className="vidcomp">
          <div className="frow">
  <div className="vid">Video Combo</div>
  <div className="dots">
    <div className="circles"></div>
    <div className="circles"></div>
    <div className="circles"></div>

  </div>
  <div className="price"><img srcset={coinstacked} className="earimg" /> <div className="wearn">Watch & Earn</div></div>
  </div>
  <div className="srow">
{Array(3).fill("").map(a=>
(
  <div className="combo"><img className='combotile' src={mine}/></div>

))}
  </div>
  <div className="trow">
    <img src={coin} className='midcoin' alt="" srcset="" />
    <div className="money">{megabites}MB</div>
  </div>

          </div>
       
          </>
        )
}
