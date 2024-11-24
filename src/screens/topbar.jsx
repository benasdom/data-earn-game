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
  let olddate=streaks.date;
  if(storeddata.useractivedate != null){
    let predate=new Date(storeddata.useractivedate[0])
    let todate=new Date(storeddata.useractivedate[1])
    let diffInDays=Math.floor((todate - predate) / (1000 * 60 * 60 * 24))
    if(diffInDays > 0){
      localStorage.setItem("userInfo",JSON.stringify({...storeddata,useractivedate:[...useractivedate,olddate].slice(-2)}))
console.log(localStorage.useractivedate)

    }
    else{
      false;

    }


  }
  else{
    localStorage.setItem("userInfo",JSON.stringify({...storeddata,useractivedate:[olddate,olddate].slice(-2)}));
    console.log("This message should be seen only once by a user")

  }
  setTimeout(updateStreakToOne, 2000);
}
  const updateStreakToOne=()=>{
    console.log(storeddata)
    let current=new Date(streaks.date);
    let lastAction = new Date(storeddata.useractivedate[0]);
    let difference=Math.floor((current - lastAction) / (1000 * 60 * 60 * 24))
    console.log(current)
    console.log(lastAction)
    console.log(difference)
    // if(difference)
    if (difference === 1) {
    console.log("incrementing")


      if (accessToken && refreshToken && typeof(userscore)=="number") {
        let options={
          method:"POST",
          headers:{"Content-Type":"application/json","Authorization":`Bearer ${accessToken}`},
          body:JSON.stringify((userscore ==0)?{streakScore:1}:{streakScore:userscore+1})
        }
        fetchWithAuth(url,options,refreshToken,(data)=>{
          let useractivedate=storeddata.useractivedate
          try{localStorage.setItem("userInfo",JSON.stringify({...data,accessToken,refreshToken,useractivedate}))}
          catch(err){alert(err)}

          })
      }    } else if (difference > 1) {
        console.log("resetting")

        if (accessToken && refreshToken && typeof(userscore)=="number") {
          let options={
            method:"POST",
            headers:{"Content-Type":"application/json","Authorization":`Bearer ${accessToken}`},
            body:JSON.stringify({streakScore:1})
          }
          fetchWithAuth(url,options,refreshToken,(data)=>{
            let useractivedate=storeddata.useractivedate
            try{localStorage.setItem("userInfo",JSON.stringify({...data,accessToken,refreshToken,useractivedate}))}
            catch(err){alert(err)}
          })
        }    
    } else if (difference === 0) {
      console.log("maintaining")

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