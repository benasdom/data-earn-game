import React from 'react'
import Person from '../assets/person.png'
import Seen from '../assets/seen.png'
import google from '../assets/google.png'
import gool from '../assets/gool.png'
import headlogo from '../assets/headlogo.png'

export default function Login() {
  return (
    <>
    
    <div className="authpage">
    <div className="splashscreen">
     </div>
<div className="myform">
    <div className="signup">
        <div className="signuptext">signup</div>
        </div>
    <div className="image">
        <img className='imgs glow huge fill' src={headlogo} alt="" srcset="" />
        <img className='imgs mask huge fill' src={headlogo} alt="" srcset="" />
        </div>
        <div className="inputs">
<input className='input' type="text" placeholder='email...' name="" id="" />
<div className="font"><img src={Person} className='smallimage'/></div>
</div>
<div className="inputs">
<input className='input' type="text" placeholder='password...' name="" id="" />
<div className="font"><img src={Seen} className='smallimage'/></div>


</div>
<div className="signinbox">
    <div className="signin">sign in</div>
    <div className="forget"> forgot password</div>
</div>
<fieldset>
<legend>
    <div className="or"> Or</div>
</legend>

</fieldset>
<div className="socials">
    <div className="social">
        <div className="logo"><img src={google} className='smallimage'/></div>
        <div className="sentence"> sign up with</div>
        <div className="logo"><img src={gool} className='gimg'/></div>
    </div>
<div className="powered">
    Powered by UnityElites
</div>
</div>

</div>
    </div>
    </>
  )
}
