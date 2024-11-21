import React, { useEffect, useState } from 'react'
import Person from '../assets/person.png'
import Seen from '../assets/seen.png'
import google from '../assets/google.png'
import gool from '../assets/gool.png'
import headlogo from '../assets/headlogo.png'
import phonepic from '../assets/phone.png'


export default function Signup({rendered,setrendered,settemptoken}) {
const [email, setemail] = useState("")
const [lastName, setlastName] = useState("")
const [firstName, setfirstName] = useState("")
const [indics, setindics] = useState(false)
const [logged, setlogged] = useState({
    id:'', dateCreated:'',firstName:'', lastName:'',msisdn:''
})
const [password, setpassword] = useState("")
const [confirmpassword, setconfirmpassword] = useState("")
const [msisdn, setmsisdn] = useState("")
const [showing, setshowing] = useState(false)
const [toggled, settoggled] = useState(false)
const [message, setmessage] = useState(false)

let err=document.querySelector(".errors");

const seterrors=(pop)=>{
    scrollTo({
        top:0
    })
    setmessage(pop)
    setindics(false);
    setshowing(true)
    setTimeout(() => {
        setshowing(false)

    }, 6000);
    return ()=>{err.textContent=message}
    

}
useEffect(() => {
setshowing(false)
}, [password])
useEffect(() => {

}, [rendered])

    const ValidateLogin=()=>{
         if(/^\w{3,}@\w{3,}\.\w{2,}$/gim.test(email.trim())==false){
            seterrors("Add a valid emial eg. heythere@gmail.com");
        return false;
        } 
        else if (/\s/gim.test(email)){
            seterrors("email should not be spaced");
        return false
        }
    
       else if(firstName==""){
          seterrors("Add a valid firstName");
      return false;
      } 
      else if(lastName==""){
         seterrors("Add a valid lastName");
     return false;
     } 
 
    else if (/\s/gim.test(firstName)){
        seterrors("firstName should not be spaced");
    return false;
    }
 
else if (/\s/gim.test(lastName)){
    seterrors("lastName should not be spaced");
return false;
}
        else if(password==""){
            seterrors("Add a valid password");
        return false;
        }
        else if (/\s/gim.test(password)){
            seterrors("Password should not be spaced");
        return false;

        }
        else if(msisdn.length<3){
            seterrors("Add a valid phone number");
        return false;
        }

        else if(password.length<7){
            seterrors("password must be at least 8 char long");
        return false;
        }
        else if (confirmpassword != password){
            seterrors("Enter the same password to confirm")
        return false;

        }
        else{
            setindics(true)
            authenticate()

        }
    }
  
const authenticate= ()=>{
    let id =`${new Date().getTime()}`
    let payloadData={email,msisdn,firstName,lastName,password}
    const options = {
        method: 'POST',
        headers: {
            "User-Agent":"Apidog/1.0.0 (https://apidog.com)",
            "Content-Type":"application/json"},
        body:JSON.stringify(payloadData),
        redirect: 'follow'
     };
     

fetch("https://cyberearn-staging.up.railway.app/api/v1/auth/register", options)
.then(response => response.json())
.then((result) =>{result.status?populate(result):servererrors(result)})
.catch((error)=>{ seterrors(`check connectivity`)})
}
const populate=(result)=>{
    setlogged({...result.data.userData,accessToken:result.data.token,refreshToken:result.data.refreshToken});
    setindics(false);
    setTimeout(()=>{setrendered("Verify")},10)
}

const servererrors=(pop)=>{
    seterrors(pop.message)
setTimeout(() => {
    setshowing(false)

}, 3000);

}

useEffect(() => {
    try{
        logged.id!=""
        ?localStorage.setItem("tempuserInfo",JSON.stringify(logged))
        :false;
        settemptoken(logged.accessToken)

    }
    catch(err){err=>alert("Error",err)

    }
}, [logged])

  return  (
 <>
 
 <div className="authpage">
     {showing?<div className="errorbox"><div className="errors">{message}</div></div>:false}
<div className="myform">
    <div className="signup" onClick={()=>{setrendered("Login")}}>
        <div className="signuptext">sign In</div>
        </div>
    <div className="signupimg">
        <img className='imgs glow huge fill' src={headlogo} alt=""  />
        <img className='imgs mask huge fill' src={headlogo} alt=""  />
        </div>
        <div className="inputs">
<input className='input' type="email" onChange={(e)=>setemail(e.currentTarget.value)} placeholder='email...'  />
<div className="font"><img src={Person} className='smallimage'/></div>
</div>
        <div className="inputs">
<input className='input' type="text" onChange={(e)=>setfirstName(e.currentTarget.value)} placeholder='first name...'  />
<div className="font"><img src={Person} className='smallimage'/></div>
</div>
        <div className="inputs">
<input className='input' type="text" onChange={(e)=>setlastName(e.currentTarget.value)} placeholder='last name...'  />
<div className="font"><img src={Person} className='smallimage'/></div>
</div>
     
<div className="inputs">
<input className='input' type={toggled?"text":"password"} onChange={(e)=>setpassword(e.currentTarget.value)} placeholder='password...'  />
<div className="font"><img onClick={()=>{settoggled(!toggled)}} src={Seen} className='smallimage'/></div>
</div>
<div className="inputs">
<input className='input' type={toggled?"text":"password"} onChange={(e)=>setconfirmpassword(e.currentTarget.value)} placeholder='confirm password...'  />
<div className="font"><img onClick={()=>{settoggled(!toggled)}} src={Seen} className='smallimage'/></div>
</div>
<div className="inputs">
<input className='input' type="tel" onChange={(e)=>setmsisdn(e.currentTarget.value)} placeholder='phone...'  />
<div className="font"><img src={phonepic} className='smallimage'/></div>
</div>
<div className="signinbox">
<div className="signupbtn" onClick={ValidateLogin}>
    {indics?"...":"continue"}
    </div></div>
    <div className="signup" onClick={()=>{setrendered("Login")}}>
        <div className="signuptext ">sign In</div>
        </div>
   
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
