import React, { useState } from 'react'
import image from '../assets/image.png'
import samurai from '../assets/samurai.png'
import cute from '../assets/cute.png'
import coin from '../assets/coin.png'


export default function Gamecomponent({mine,megabites}) {
  return (
    <>
    <div className="gamecomp">
        <div className="gameslider">
            <div className="slideritems">
            <img src={samurai} className="slider" />
            <img src={image} className="slider" />
            <img src={cute} className="slider" />
            <img src={image} className="slider" />
            <img src={samurai} className="slider" />
            </div>
        </div>
        <div className="trow">
    <img src={coin} className='midcoin' alt="" srcset="" />
    <div className="money">{megabites}MB</div>
  </div>
    </div>
    </>
  )
}
