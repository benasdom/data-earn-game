import React, { useState } from 'react'
import notify from '../assets/notify.png'
import back from '../assets/back.png'
import brown from '../assets/brown.jpg'
import cam from '../assets/cam.png'
import extra from '../assets/extra.png'
import personbg from '../assets/personbg.png'
import callbg from '../assets/callbg.png'
import detail from '../assets/detail.png'
import { useEffect } from 'react'





export default function Profile({setrendered,currentuser,setcurrentuser}) {
const [profilemail, setprofilemail] = useState("")
const [profilename, setprofilename] = useState("")
const [profilephone, setprofilephone] = useState("")
const [indics, setindics] = useState(false)
const [profiledate, setprofiledate] = useState("")
const [agree, setagree] = useState(" Wish to logout ?")
const [profilverified, setprofilverified] = useState("")
const stored=JSON.parse(localStorage.getItem("userInfo"))
const [curuser, setcuruser] = useState(stored)

useEffect(() => {
    const today=`${new Date(curuser?curuser.dateCreated:null)}`.split(" ")
    let day=parseInt(today[2])
    let parse=day==1?day+"st"
    :(day==2?day+"nd"
    :(day==3?day+"rd"
    :day+"th"))
    curuser?setprofilename(curuser.firstName):false
    curuser?setprofilemail(curuser.email):false
    curuser?setprofilephone(curuser.msisdn):false
    curuser?setprofilverified(curuser.isVerified?"Successfull":"Not Verified"):false
    // curuser?setprofiledate(`${curuser.dated[2]} ${curuser.dated[1]} ${curuser.dated[3]}`):false
    curuser?setprofiledate(`${parse} ${today[1]}, ${today[3]}`):false
}, [curuser])

const logout=()=>{
    setindics(true)
    localStorage.clear()
    setprofilename("");
    setprofilemail("");
    setprofilephone("");
    setprofiledate("");
    setcurrentuser("");
    setTimeout(exits,10)


}
const exits=()=>{
    setindics(false)
    setrendered("Login");

}

  return (
    <>
    <div className="profilepage">
        
            <div className="bluredafter"></div>
            <div className="bluredbefore"></div>
        <div className="blured">

        <div className="topbar2">
  <div className="back2" onClick={()=>{setrendered("Home")}}><img className="backicon3" src={back} alt=""  /></div>
  <div className="title2"><div className="ttext2">~ {profilename.length>17?`${profilename.slice(0,15)}.`:profilename}
  ~</div></div>
  <div className="notice2"><img className="topimg" src={notify} alt="" /></div>
</div>
<div className="editimg">
    <div className="profpics">
    <img src={brown} alt=""  className="userimg" />
    <img src={cam} alt=""  className="camimg" />

    </div>
  </div>
<div className="beforedetails">
<div className="pdetails">
    <div className="fdetail"><img src={detail} className="cuteimg2"/>Details</div>
    <div className="sdetail">Email: {profilemail}</div>
    <div className="sdetail">Phone: {profilephone}</div>
    <div className="sdetail">Date: {profiledate}</div>
    <div className="sdetail">Account Verification: {profilverified}</div>
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
                        <div className="ptextright"><img className="backicon2" src={back} alt=""  /></div></div>
                </div>

                
                <div className="profileitems">
                    <div className="profleft"><img src={callbg} className="cuteimg"/></div>
                    <div className="profright">
                        <div className="ptextright">Edit Phone Number</div>
                        <div className="ptextright"><img className="backicon2" src={back} alt=""  /></div></div>
                </div>

                
                <div className="profileitems">
                    <div className="profleft"><img src={extra} className="cuteimg"/></div>
                    <div className="profright">
                        <div className="ptextright">Chanage Password</div>
                        <div className="ptextright"><img className="backicon2" src={back} alt=""  /></div></div>
                </div>
        <div className="logout" onClick={()=>confirm(agree)?logout():false}>{indics?"...":"Logout"}</div>
            </div>
        </div>
    </div>
    </>
  )
}
