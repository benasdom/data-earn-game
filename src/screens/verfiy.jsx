import React, { useEffect, useState } from 'react'
import otpimg from '../assets/otp.png'
import back from '../assets/back.png'
import resend from '../assets/resend.png'
import Changenumb from './changenumb'

export default function Verfiy({rendered,setrendered}) {
    const [changenum, setchangenum] = useState(true)
    const [counter, setcounter] = useState(10)
    const verifyOTP=()=>{
        setrendered("Home")
    }
const countdown=()=>{
    let val=setInterval(()=>{counter>=1?setcounter((counter)=>counter-1):false},1000)
    setTimeout(()=>{clearInterval(val)},11000)

}
    useEffect(() => {
      
    }, [rendered])
    
  return (
    <>
    <div className="flexed">
      {changenum?<Changenumb changenum={changenum} setchangenum={setchangenum}/>:false}
        <div className="back"><img className="backicon" src={back} alt="" srcset="" /></div>
        <div className="picotp"><img src={otpimg} alt="" srcset="" /></div>
        <div className="verfiy">
            <div className="veri">
                Verification
            </div>
        </div>
        <div className="verdetails">
            Please enter the <span className="onetime">  One Time Password</span> we sent to your phone number
        </div>
        <div className="fournumb">
            <div className="digits">
                <input maxLength={1} max={9} className="otpnumb" placeholder='0' type="number" name="" id="" />
            </div>
            
            <div className="digits">
                <input maxLength={1} max={9} className="otpnumb" placeholder='0' type="number" name="" id="" />
            </div>
            
            <div className="digits">
                <input maxLength={1} max={9} className="otpnumb" placeholder='0' type="number" name="" id="" />
            </div>
            
            <div className="digits">
                <input maxLength={1} max={9} className="otpnumb" placeholder='0' type="number" name="" id="" />
            </div>
        </div>
        <div className="verbutton">
            <div className="clickver" onClick={verifyOTP} > Verify</div>
            <div className="resend" onClick={countdown}>
                <img src={resend} className="backicon" alt="" srcset="" /> 
                <div className="resendtext">{counter}s..Resend</div>
            </div>
        </div>
    </div>
    </>
  )
}
