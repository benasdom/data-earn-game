import React, { useState } from 'react'
import notify from '../assets/notify.png'
import back from '../assets/back.png'
import brown from '../assets/brown.jpg'
import cam from '../assets/cam.png'
import extra from '../assets/extra.png'
import personbg from '../assets/personbg.png'
import callbg from '../assets/callbg.png'
import detail from '../assets/detail.png'




export default function Profile({setrendered}) {
const [profilemail, setprofilemail] = useState("user@unityelites.com")
const [profilename, setprofilename] = useState("Benjamin Asumadu")
const [profilephone, setprofilephone] = useState("+(233) 223 232")
const [profiledate, setprofiledate] = useState("29th October 2024")
const [profilverified, setprofilverified] = useState("Verified")

  return (
    <>
    <div className="profilepage">
        
            <div className="bluredafter"></div>
            <div className="bluredbefore"></div>
        <div className="blured">

        <div className="topbar2">
  <div className="back2" onClick={()=>{setrendered("Home")}}><img className="backicon3" src={back} alt="" srcset="" /></div>
  <div className="title2"><div className="ttext2">~ {profilename} ~</div></div>
  <div className="notice2"><img className="topimg" src={notify} alt="" /></div>
</div>
<div className="editimg">
    <div className="profpics">
    <img src={brown} alt="" srcset="" className="userimg" />
    <img src={cam} alt="" srcset="" className="camimg" />

    </div>
  </div>
<div className="beforedetails">
<div className="pdetails">
    <div className="fdetail"><img src={detail} className="cuteimg2"/>Details</div>
    <div className="sdetail">Email: {profilemail}</div>
    <div className="sdetail">Phone: {profilephone}</div>
    <div className="sdetail">Date: {profiledate}</div>
    <div className="sdetail">Account Verified: {profilverified}</div>
</div>
</div>
        </div>
        <div className="notblured">
            <div className="bottomprofile">
                <div className="myprofile">Myprofile</div>
                <div className="profileitems">
                    <div className="profleft"><img src={personbg} className="cuteimg"/></div>
                    <div className="profright">
                        <div className="ptextright">Edit Profile</div>
                        <div className="ptextright"><img className="backicon2" src={back} alt="" srcset="" /></div></div>
                </div>

                
                <div className="profileitems">
                    <div className="profleft"><img src={callbg} className="cuteimg"/></div>
                    <div className="profright">
                        <div className="ptextright">Edit Phone Number</div>
                        <div className="ptextright"><img className="backicon2" src={back} alt="" srcset="" /></div></div>
                </div>

                
                <div className="profileitems">
                    <div className="profleft"><img src={extra} className="cuteimg"/></div>
                    <div className="profright">
                        <div className="ptextright">Chanage Password</div>
                        <div className="ptextright"><img className="backicon2" src={back} alt="" srcset="" /></div></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
