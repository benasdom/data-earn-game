import React, { useEffect, useState } from 'react'
import coin from '../assets/coin.png'
import coinstacked from '../assets/coinstacked.png'



export default function Videocomponent({mine,megabites,checking}) {

    
    return (
          <>
             <div className="vidcomp"  style={checking?{filter:"grayscale(1)"}:{}}>
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
{Array(3).fill("").map((a,b)=>
(
  <div className="combo" key={b+""}><img className='combotile' src={mine}/></div>

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
