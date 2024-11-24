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

    const inp = document.querySelectorAll(".otpnumb");
    [...inp].map((a,b)=>a.onkeydown=(ev)=>{
        (!a.value && ev.key === "Backspace" && b)?[...inp][b-1].focus()
        :((a.value && [..."0123456789"].includes((ev.key+""))&& b<5)?[...inp][b+1].focus():false);
    });

    
      
        inp.forEach((input, index) => {
          // Move focus to the next input after typing a number
          input.addEventListener("input", (e) => {
            const value = e.target.value+"";
            if (value.length > 1) {
              // Handle autofill scenario
              const otp = value.split("");
              inp.forEach((input, idx) => {
                input.value = otp[idx] || "";
              });
            } else if (value && index < inp.length - 1) {
              inp[index + 1].focus();
            }
          });
      
          // Handle paste event to autofill OTP
          input.addEventListener("paste", (e) => {
            const pastedData = e.clipboardData.getData("text");
            if (pastedData.length === inp.length) {
              const otp = pastedData.split("");
              inp.forEach((input, idx) => {
                input.value = otp[idx] || "";
              });
            }
        });
      });

      const nullify=()=>{
        [...document.querySelectorAll(".sendbtn"),document.querySelector(".phonechange")].map((a)=>a.style.cssText="filter:grayscale(1);pointer-events:none")
    }
    const unnullify=()=>{
        [...document.querySelectorAll(".sendbtn"),document.querySelector(".phonechange")].map((a)=>a.style.cssText="filter:grayscale(0);pointer-events:all")

        }

    
    const verifyOTP=()=>{
        setbools(true)
        let boxes = [...inp];
        let values=boxes.map(a=>a.value).join("")
        values.length==6?otpRequestCheck(values):false
    }
const otpRequestCheck=(vals)=>{
    const options = {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${temptoken}`},
        body:JSON.stringify({path:"msisdn",otp:vals}),
     };

    try{
        fetch("https://cyberearn-staging.up.railway.app/api/v1/verification",options)
        .then((res)=>{ console.log(res);res.status==200?activateuser():checkissue()})
        .catch((err)=>{err?alert("There was a problem please retry"):false;})
        .finally(()=>{setbools(false)})
    }
    catch(err){
        alert(err)
        setbools(false)

    }

}
const checkissue=()=>{
  alert("Please enter the correct code")
  setverbtn("Check")
}
const activateuser=()=>{
    try{
        let loaded=localStorage.getItem("tempuserInfo");
        let finaldata=localStorage.setItem("userInfo",loaded);
        if(finaldata!=null && loaded !=null){
          setrendered("Home")

        }
    }
    catch(err){
    alert(err)
    }

}
const countdown=()=>{
    let trig=document.querySelector(".phonechange");

    let resend=document.querySelector(".resend");
    resend.style.pointerEvents="none";
    let val=setInterval(()=>{counter>=1?setcounter((counter)=>counter-1):false},1000)
    setTimeout(()=>{clearInterval(val);setcounter(10);resend.style.pointerEvents="all";trig.click()},11000)


}
    useEffect(() => {
    counter < 1?unnullify():false;
    }, [counter])


          
     
  return (
    <>
    <div className="flexed">
      {changenum?<Changenumb nullify={nullify} changenum={changenum} setchangenum={setchangenum} temptoken={temptoken}/>:false}
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
                <div className="resendtext">{(counter<0?0:counter)==10?"Retry":counter+"s ..waiting"} </div>
            </div>
        </div>
    </div>
    </>
  )
}
