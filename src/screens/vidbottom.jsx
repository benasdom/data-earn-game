import React, { useState } from 'react'
import mine from '../assets/mine.png'
import play from '../assets/play.png'
import coin from '../assets/coin.png'


export default function Vidbottom() {
  const [mins, setmins] = useState("90")
  const [itemfig, setitemfig] = useState("900")

  return (
    <div className="comp">
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
    )
}
