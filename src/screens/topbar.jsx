import React from 'react'
import cyberearn from '../assets/cyberearn.png'
import notify from '../assets/notify.png'
import beginner from '../assets/beginner.png'


export default function Topbar() {
  return (
    <>
    <div className="topbar">
  <div className="profile"><img className="topimga" src={beginner} alt="" /></div>
  <div className="title"><img className="midimg" src={cyberearn} alt="" /><div className="ttext">CyberEarn</div></div>
  <div className="notice"><img className="topimg" src={notify} alt="" /></div>
</div>
    </>
  )
}
