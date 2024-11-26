import React, { useEffect, useState } from 'react'
import cyberearn from '../assets/cyberearn.png'
import notify from '../assets/notify.png'
import brown from '../assets/brown.jpg'
import streak from '../assets/streak.png'
import Profile from './profile'
import { fetchWithAuth } from './authfetch'
// import {updateStreakScore } from './streakscore'


export default function Topbar({setrendered}) {
  const [userscore, setuserscore] = useState(null)
  const [view, setview] = useState(false)
  const [streaks, setstreaks] = useState({steakScore:"",date:""})
  const storeddata = JSON.parse(localStorage.getItem("userInfo"));

  let accessToken = storeddata?.accessToken;
  let refreshToken = storeddata?.refreshToken;
  // console.log(accessToken)
let url = 'https://cyberearn-staging.up.railway.app/api/v1/user/streak';

  useEffect(() => {

    if (accessToken.length && refreshToken.length && typeof(userscore=="number")) {
      let options={
        headers:{Authorization:`Bearer ${accessToken}`},
      }
      fetchWithAuth(url,options,refreshToken,(data)=>{setstreaks(data);setuserscore(data.streakScore)})
    }
  }, []);
  
const transformdata=()=>{
  let newdate=new Date((streaks.date.split(/T/gim)[0]));
  if(storeddata.useractivedate != null){
    let useractivedate=storeddata.useractivedate
    let predate=new Date((useractivedate[1].split(/T/gim)[0]))
    let diffInDays=Math.floor((newdate - predate) / (1000 * 60 * 60 * 24))
    if(diffInDays > 0){
    updateStreakToOne(diffInDays,useractivedate,newdate);
      console.log("There was a difference so the dates were updated")
    }
    else{
      updateStreakToOne(diffInDays);

      console.log("There was no updates made to the date array")
      ;}}
  else{
    if(storeddata.lastLogin){
      let lastvalidlogin=storeddata.lastLogin;
      let olddate=new Date((lastvalidlogin.split(/T/gim)[0]))
      let prevolddated=[olddate]
      let diffed=Math.floor((newdate - olddate) / (1000 * 60 * 60 * 24))
      updateStreakToOne(diffed,prevolddated,newdate);
      console.log("useractive data didnt exist so just updating it")
    }
    else{
      alert("Welcome to cyber earn 🥳🥳🥂")
      console.log("I think we need to update datas")


    }

  }
}
  const updateStreakToOne=(val,useractivedates,freshdate)=>{
    if (val === 1) {
    console.log("incrementing")


      if (accessToken && refreshToken && typeof(userscore)=="number") {
        let options={
          method:"POST",
          headers:{"Content-Type":"application/json","Authorization":`Bearer ${accessToken}`},
          body:JSON.stringify((userscore ==0)?{streakScore:1}:{streakScore:userscore+1})
        }
        fetchWithAuth(url,options,refreshToken,(data)=>{
          try{
            localStorage.setItem("userInfo",JSON.stringify({...data,accessToken,refreshToken,useractivedate:[...useractivedates,freshdate].slice(-2)}))}
          catch(err){alert(err)}
          console.log(JSON.parse(localStorage.getItem("userInfo")))

          })
      }    } else if (val > 1) {
        console.log("resetting")

        if (accessToken && refreshToken && typeof(userscore)=="number") {
          let options={
            method:"POST",
            headers:{"Content-Type":"application/json","Authorization":`Bearer ${accessToken}`},
            body:JSON.stringify({streakScore:1})
          }
          fetchWithAuth(url,options,refreshToken,(data)=>{
              try{
                localStorage.setItem("userInfo",JSON.stringify({...data,accessToken,refreshToken,useractivedate:[...useractivedates,freshdate].slice(-2)}))}
                catch(err){alert(err)}
          })
        }    
    } else if (val === 0) {
      console.log("maintaining")
  console.log(storeddata)

      if (userscore == 0){
        if (accessToken && refreshToken && typeof(userscore)=="number") {
          let options={
            method:"POST",
            headers:{"Content-Type":"application/json","Authorization":`Bearer ${accessToken}`},
            body:JSON.stringify({streakScore:1})
          }
          fetchWithAuth(url,options,refreshToken,(data)=>{
              try{
                localStorage.setItem("userInfo",JSON.stringify({...data,accessToken,refreshToken,useractivedate:[...useractivedates,freshdate].slice(-2)}))}
                catch(err){alert(err)}
            })
        }
      }
      else{
        false
      }

        false
    }
  
}
    let toupdate=true
  useEffect(()=>{
  toupdate?(userscore!=null?setTimeout(transformdata,5000):false):false;
  return ()=>{
    toupdate=false
  }

      
      },[userscore])






  return (
    <>
   { view?<div className="abs2">
      <Profile setrendered={setrendered} setcurrent={setview} current={view}/>
    </div>:false}
  <div className="topbar">
  <div className="profile" onClick={()=>{setview(true)}}><img className="topimga" src={brown} alt="" /></div>
  <div className="title"><img className="midimg" src={cyberearn} alt="" /><div className="ttext">CyberEarn<span title='streak score' className='streak'><img src={streak} className='strkimg'/>{userscore !=null?userscore:".."}</span></div></div>
  <div className="notice"><img className="topimg" src={notify} alt="" /></div>
</div>
    </>
  )
}
