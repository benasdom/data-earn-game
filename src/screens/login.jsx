import React, { useEffect, useState } from 'react'
import Person from '../assets/person.png'
import Seen from '../assets/seen.png'
import google from '../assets/google.png'
import gool from '../assets/gool.png'
import headlogo from '../assets/headlogo.png'

export default function Login({setrendered,rendered}) {
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [showing, setshowing] = useState(false)
const [message, setmessage] = useState(false)
const [toggled, settoggled] = useState(false)
const [indics, setindics] = useState(false)
const [logged, setlogged] = useState({
    id:'', dateCreated:'',firstName:'', lastName:'',msisdn:''
})

let err=document.querySelector(".errors");

const seterrors=(pop)=>{
    setindics(false)
    setmessage(pop)
    setshowing(true)
    return ()=>{err.textContent=message}
    

}
useEffect(() => {
setshowing(false)
if(localStorage.getItem("userInfo")){
    setrendered("Home")
}
}, [email,password,rendered])



    const ValidateLogin=()=>{
        if(/^\w{3,}@\w{3,}\.\w{2,}$/gim.test(email.trim())==false){
            seterrors("Add a valid emial eg. heythere@gmail.com");
        return false;
        } 
        else if (/\s/gim.test(email)){
            seterrors("email should not be spaced");
        return false
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
            setindics(true)
            authenticate()

        }
    }
    const authenticate=()=>{
        let id =`${new Date().getTime()}`
        let payloadData={email,password}
        const options = {
            method: 'POST',
            headers: {
                "User-Agent":"Apidog/1.0.0 (https://apidog.com)",
                "Content-Type":"application/json"},
            body:JSON.stringify(payloadData),
            redirect: 'follow'
         };
         
    

fetch("https://cyberearn-staging.up.railway.app/api/v1/auth/login", options)
.then(response => response.json())
.then((result) =>{result.status?populate(result):servererrors(result)})
.catch((error)=>{ seterrors(`check connectivity`)})
    }

    const populate=(result)=>{
        console.log(result)

        setlogged({...result.data.userData,accessToken:result.data.token,refreshToken:result.data.refreshToken});
        setindics(false);
        setTimeout(()=>{setrendered("Home")},10)
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
            ?localStorage.setItem("userInfo",JSON.stringify(logged))
            :false
    
        }
        catch(err){err=>alert("Error",err)
    
        }
    }, [logged])
    
    
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
        <img className='imgs glow huge fill' src={headlogo} alt=""  />
        <img className='imgs mask huge fill' src={headlogo} alt=""  />
        </div>
        <div className="inputs">
<input className='input' type="text" onChange={(e)=>setemail(e.currentTarget.value.trim())} placeholder='email...' />
<div className="font"><img src={Person} className='smallimage'/></div>
</div>
<div className="inputs">
<input className='input' type={toggled?"text":"password"} onChange={(e)=>setpassword(e.currentTarget.value)} placeholder='password...' />
<div className="font"><img onClick={()=>{settoggled(!toggled)}} src={Seen} className='smallimage'/></div>


</div>
<div className="signinbox">
    <div className="signin" onClick={ValidateLogin}>{indics?"...":"Sign In"}</div>
    <div className="forget"> forgot password</div>
</div>
<div className="signup" onClick={()=>{setrendered("Signup")}}>
        <div className="signuptext">sign up</div>
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
