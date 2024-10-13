import React, { useState } from 'react'
import Mynavbar from './nav'
import cyberearn from '../assets/cyberearn.png'
import notify from '../assets/notify.png'
import beginner from '../assets/beginner.png'
import wheel from '../assets/wheel.png'
import mine from '../assets/mine.png'
import play from '../assets/play.png'
import coin from '../assets/coin.png'

export default function Home() {
  const [megabites, setmegabites] = useState("900")
  return (
    <>
    <div className="homepage">

        <div className="pagecontent">
{/* This should be a changeable component */}
<div className="topbar">
  <div className="profile"><img className="topimg" src={beginner} alt="" /></div>
  <div className="title"><img className="midimg" src={cyberearn} alt="" /><div className="ttext">CyberEarn</div></div>
  <div className="notice"><img className="topimg" src={notify} alt="" /></div>
</div>
<div className="nextbar">
  <div className="coincentered">
  <div className="topcoin"><img className='topimgs' src={coin} alt="" srcset="" /></div>
  <div className="topcoin"><img className='topimgs' src={coin} alt="" srcset="" /></div>
  <div className="topcoin">Get data by watching videos <img className='topimgs' src={wheel} alt="" srcset="" /></div>
  </div>

</div>
<div className="roundedcontent">
  <div className="frow">
  <div className="vid">Video Combo</div>
  <div className="dots">
    <div className="circles"></div>
    <div className="circles"></div>
    <div className="circles"></div>

  </div>
  <div className="price">🪙 watch & earn</div>
  </div>
  <div className="srow">
  <div className="combo"><img className='combotile' src={mine}/></div>
  <div className="combo"><img className='combotile' src={mine}/></div>
  <div className="combo"><img className='combotile' src={mine}/></div>
  </div>
  <div className="trow">
    <img src={coin} className='midcoin' alt="" srcset="" />
    <div className="money">{megabites}MB</div>
  </div>
  <div className="ffrow">
    <div className="vidgame">Videos</div>
    <div className="vidgame">Games</div>
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
          10
        </div>
      </div>
      <div className="viditemschild">
<div className="vidtop2">
  <img src={play} className='vidimg' alt="" srcset="" />
</div>
        <div className="vidtext">
          10
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
