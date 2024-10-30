import React, { useEffect, useState } from 'react'
import Person from '../assets/person.png'
import Seen from '../assets/seen.png'
import google from '../assets/google.png'
import gool from '../assets/gool.png'
import headlogo from '../assets/headlogo.png'

export default function Signup({rendered,setrendered}) {
    const [email, setemail] = useState("")
    const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const [confirmpassword, setconfirmpassword] = useState("")
const [phone, setphone] = useState("")
const [showing, setshowing] = useState(false)
const [message, setmessage] = useState(false)

let err=document.querySelector(".errors");

const seterror=(pop)=>{
    scrollTo({
        top:0
    })
    setmessage(pop)
    setshowing(true)
    return ()=>{err.textContent=message}
    

}
useEffect(() => {
setshowing(false)
}, [username,password])
useEffect(() => {

}, [rendered])



    const ValidateLogin=()=>{
         if(/^\w{3,}@\w{3,}\.\w{2,}$/gim.test(email.trim())==false){
            seterror("Add a valid emial eg. heythere@gmail.com");
        return false;
        } 
        else if (/\s/gim.test(email)){
            seterror("email should not be spaced");
        return false
        }
         else if(username==""){
            seterror("Add a valid username");
        return false;
        } 
        else if (/\s/gim.test(username)){
            seterror("Username should not be spaced");
        return false;
        }
       else if(username.length<7){
            seterror("Username must be at least 8 char long");
        return false;
        } 
        else if(password==""){
            seterror("Add a valid password");
        return false;
        }
        else if (/\s/gim.test(password)){
            seterror("Password should not be spaced");
        return false;

        }
        else if(phone.length<3){
            seterror("Add a valid phone number");
        return false;
        }

        else if(password.length<7){
            seterror("password must be at least 8 char long");
        return false;
        }
        else if (confirmpassword != password){
            seterror("Enter the same password to confirm")
        return false;

        }
        else{
            setrendered("Verify")
        }
    }


  return  (
 <>
 
 <div className="authpage">
     {showing?<div className="errorbox"><div className="errors">{message}</div></div>:false}
<div className="myform">
    <div className="signup" onClick={()=>{setrendered("Login")}}>
        <div className="signuptext">sign In</div>
        </div>
    <div className="signupimg">
        <img className='imgs glow huge fill' src={headlogo} alt="" srcset="" />
        <img className='imgs mask huge fill' src={headlogo} alt="" srcset="" />
        </div>
        <div className="inputs">
<input className='input' type="email" onChange={(e)=>setemail(e.currentTarget.value)} placeholder='Email...' name="" id="" />
<div className="font"><img src={Seen} className='smallimage'/></div>
</div>
        <div className="inputs">
<input className='input' type="text" onChange={(e)=>setusername(e.currentTarget.value)} placeholder='username...' name="" id="" />
<div className="font"><img src={Person} className='smallimage'/></div>
</div>
<div className="inputs">
<input className='input' type="text" onChange={(e)=>setpassword(e.currentTarget.value)} placeholder='password...' name="" id="" />
<div className="font"><img src={Seen} className='smallimage'/></div>
</div>
<div className="inputs">
<input className='input' type="text" onChange={(e)=>setconfirmpassword(e.currentTarget.value)} placeholder='Confirm password...' name="" id="" />
<div className="font"><img src={Seen} className='smallimage'/></div>
</div>
<div className="inputs">
<input className='input' type="tel" onChange={(e)=>setphone(e.currentTarget.value)} placeholder='Phone...' name="" id="" />
<div className="font"><img src={Seen} className='smallimage'/></div>
</div>
<div className="signinbox">
<div className="signupbtn" onClick={ValidateLogin}>
    continue
    </div></div>
<fieldset>
<legend>
    <div className="or"> Or</div>
</legend>

</fieldset>
<div className="socials">
    <div className="social">
        <div className="logo"><img src={google} className='smallimage'/></div>
        <div className="sentence"> sign in with</div>
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
