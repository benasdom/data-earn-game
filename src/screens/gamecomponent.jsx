import React from 'react'
import image from '../assets/image.png'
import samurai from '../assets/samurai.png'
import cute from '../assets/cute.png'


export default function Gamecomponent({mine}) {
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
    </div>
    </>
  )
}
