import React from 'react'
import back from '../assets/back.png'

export default function Vplayers({playing,setplayer}) {
  return (
    <div>
      <div className="back abs" onClick={()=>{setplayer(false)}}><img className="backicon" src={back} alt=""  /></div>
<video className="videoframe" src={playing} controls>
</video>
<div></div>
    </div>
  )
}
