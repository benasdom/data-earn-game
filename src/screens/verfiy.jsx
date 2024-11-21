import React, { useEffect, useState } from 'react'
import otpimg from '../assets/otp.png'
import back from '../assets/back.png'
import resend from '../assets/resend.png'
import Changenumb from './changenumb'

export default function Verfiy({rendered,setrendered, temptoken}) {
    const [changenum, setchangenum] = useState(true)
    const [bools, setbools] = useState(false)
    const [verbtn, setverbtn] = useState("Verify")
    const [counter, setcounter] = useState(10)
    const verifyOTP=()=>{
        setbools(true)
        let boxes = [...document.querySelectorAll(".otpnumb")];
        let values=boxes.map(a=>a.value).join("")
        values.length==6?otpRequestCheck(values):false
    }
const otpRequestCheck=(vals)=>{
    alert(vals)
    
    
    const options = {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${temptoken}`},
        body:JSON.stringify({path:"msisdn",otp:vals}),
     };

    try{
        fetch("https://cyberearn-staging.up.railway.app/api/v1/verification",options)
        .then((res)=>{ console.log(res);res.status==200?verified(res.status):false})
        .catch(()=>{ setverbtn("retry");setbools(false)})
        .finally(()=>{setbools(false)})
    }
    catch(err){
        alert(err)
        setbools(false)

    }

}
const verified=(all)=>{
    alert(all)?setrendered("Home"):false
}
const countdown=()=>{
    let resend=document.querySelector(".resend");
    resend.style.pointerEvents="none";
    let val=setInterval(()=>{counter>=1?setcounter((counter)=>counter-1):false},1000)
    setTimeout(()=>{clearInterval(val);setcounter(10);resend.style.pointerEvents="all"},11000)

}
    useEffect(() => {
      
    }, [rendered])

    const inp = document.querySelectorAll(".otpnumb");
    [...inp].map((a,b)=>a.onkeydown=(ev)=>{
        (!a.value && ev.key === "Backspace" && b)?[...inp][b-1].focus()
        :((a.value && [..."0123456789"].includes((ev.key+""))&& b<5)?[...inp][b+1].focus():false);
    })

          
     
  return (
    <>
    <div className="flexed">
      {changenum?<Changenumb changenum={changenum} setchangenum={setchangenum} temptoken={temptoken}/>:false}
        <div className="back" onClick={()=>{setrendered("Signup")}}><img className="backicon" src={back} alt=""  /></div>
        <div className="picotp" ><img src={otpimg} alt=""  /></div>
        <div className="verfiy">
            <div className="veri">
                Verification
            </div>
        </div>
        <div className="verdetails">
            Please enter the <span className="onetime">  One Time Password</span> we sent to your phone tel
            <div className="phonechange" onClick={()=>{setchangenum(true)}}>
            Change mobile tel
        </div>
        </div>
      
        <div  className="fournumb">
            {Array(6).fill("").map((a,b)=>{return <div className="digits" key={b+""}>
                <input  maxLength={1}  className="otpnumb"  type="tel" name="" id="" />
            </div>})}
        </div>
        <div className="verbutton">
            <div className="clickver" onClick={verifyOTP} >{bools?"...":verbtn}</div>
            <div className="resend" onClick={countdown}>
                <img src={resend} className="backicon" alt=""  /> 
                <div className="resendtext">{(counter<0?0:counter)==10?"Resend":counter+"s ..waiting"} </div>
            </div>
        </div>
    </div>
    </>
  )
}
