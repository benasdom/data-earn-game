import React, { useState } from 'react'
import cyberearn from '../assets/cyberearn.png'
import notify from '../assets/notify.png'
import beginner from '../assets/beginner.png'
import streak from '../assets/streak.png'


export default function Topbar() {
  const [streakscore, setstreakscore] = useState(0)
  return (
    <>
    <div className="topbar">
  <div className="profile"><img className="topimga" src={beginner} alt="" /></div>
  <div className="title"><img className="midimg" src={cyberearn} alt="" /><div className="ttext">CyberEarn<span className='streak'><img src={streak} className='strkimg'/>{streakscore}</span></div></div>
  <div className="notice"><img className="topimg" src={notify} alt="" /></div>
</div>
    </>
  )
}
