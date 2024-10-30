import React, { useEffect, useState } from 'react'
import Person from '../assets/person.png'
import Seen from '../assets/seen.png'
import google from '../assets/google.png'
import gool from '../assets/gool.png'
import headlogo from '../assets/headlogo.png'

export default function Login({setrendered,rendered}) {
const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const [showing, setshowing] = useState(false)
const [message, setmessage] = useState(false)

let err=document.querySelector(".errors");

const seterror=(pop)=>{
    setmessage(pop)
    setshowing(true)
    return ()=>{err.textContent=message}
    

}
useEffect(() => {
setshowing(false)
}, [username,password])



    const ValidateLogin=()=>{
         if(username==""){
            seterror("Add a valid username");
        return false;
        } 
        else if (/\s/gim.test(username)){
            seterror("Username should not be spaced");

        }
       else if(username.length<7){
            seterror("Email must be at least 8 char long");
        return false;
        } 
        else if(password==""){
            seterror("Add a valid password");
        return false;
        }
        else if (/\s/gim.test(password)){
            seterror("Password should not be spaced");

        }

        else if(password.length<7){
            seterror("password must be at least 8 char long");
        return false;
        }else{
            setrendered("Home")
        }
    }

  return (
    <>
    
    <div className="authpage">
    <div className="splashscreen">
     </div>
     {showing?<div className="errorbox"><div className="errors">{message}</div></div>:false}
<div className="myform">
    <div className="signup" onClick={()=>{setrendered("Signup")}}>
        <div className="signuptext">sign up</div>
        </div>
    <div className="image">
        <img className='imgs glow huge fill' src={headlogo} alt="" srcset="" />
        <img className='imgs mask huge fill' src={headlogo} alt="" srcset="" />
        </div>
        <div className="inputs">
<input className='input' type="text" onChange={(e)=>setusername(e.currentTarget.value.trim())} placeholder='username...' name="" id="" />
<div className="font"><img src={Person} className='smallimage'/></div>
</div>
<div className="inputs">
<input className='input' type="password" onChange={(e)=>setpassword(e.currentTarget.value)} placeholder='password...' name="" id="" />
<div className="font"><img src={Seen} className='smallimage'/></div>


</div>
<div className="signinbox">
    <div className="signin" onClick={ValidateLogin}>sign in</div>
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
