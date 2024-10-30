import React, { useState } from 'react'
import cyberearn from '../assets/cyberearn.png'
import notify from '../assets/notify.png'
import beginner from '../assets/beginner.png'
import streak from '../assets/streak.png'
import Profile from './profile'


export default function Topbar({setrendered}) {
  const [streakscore, setstreakscore] = useState(0)

  return (
    <>
  <div className="topbar">
  <div className="profile" onClick={()=>{setrendered("Profile")}}><img className="topimga" src={beginner} alt="" /></div>
  <div className="title"><img className="midimg" src={cyberearn} alt="" /><div className="ttext">CyberEarn<span title='streak score' className='streak'><img src={streak} className='strkimg'/>{streakscore}</span></div></div>
  <div className="notice"><img className="topimg" src={notify} alt="" /></div>
</div>
    </>
  )
}
