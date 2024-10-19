import React from 'react'
import otpimg from '../assets/otp.png'
import back from '../assets/back.png'
import resend from '../assets/resend.png'
import Changenumb from './changenumb'

export default function Verfiy() {
  return (
    <>
    <div className="flexed">
      <Changenumb/>
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
                <input max={9} className="otpnumb" placeholder='0' type="number" name="" id="" />
            </div>
            
            <div className="digits">
                <input max={9} className="otpnumb" placeholder='0' type="number" name="" id="" />
            </div>
            
            <div className="digits">
                <input max={9} className="otpnumb" placeholder='0' type="number" name="" id="" />
            </div>
            
            <div className="digits">
                <input max={9} className="otpnumb" placeholder='0' type="number" name="" id="" />
            </div>
        </div>
        <div className="verbutton">
            <div className="clickver"> Verify</div>
            <div className="resend">
                <img src={resend} className="backicon" alt="" srcset="" /> 
                <div className="resendtext">10s..Resend</div>
            </div>
        </div>
    </div>
    </>
  )
}
