import React, { useEffect, useState } from 'react'

export default function Changenumb({setchangenum,changenum,temptoken,nullify}) {
const [mobilenum, setmobilenum] = useState("")
const [numdial, setnumdial] = useState("")
const [token, settoken] = useState("")
const [btn, setbtn] = useState("Add Number")
const [bools, setbools] = useState(false)


useEffect(() => {
    let dialed = JSON.parse(localStorage.getItem("tempuserInfo"));
    let temp=dialed.msisdn;
    let accessToken = dialed?.accessToken;
    setnumdial(temp)
    settoken(accessToken)

}, [])

const getOtp=()=>{
    setbools(true)
    const options = {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${temptoken}`},
        body:JSON.stringify({msisdn:numdial}),
     };

    try{
        fetch("https://cyberearn-staging.up.railway.app/api/v1/send/sms/otp",options)
        .then((res)=>{res.status==200?setbtn("sent"):false})
        .catch(()=>{ setbtn("retry")})
        .finally(()=>{setbools(false);setchangenum(false); nullify()})
    }
    catch(err){
        alert(err)

    }
}
const confirmnumb=()=>{
    let dialed = JSON.parse(localStorage.getItem("tempuserInfo"));
    dialed.msisdn=numdial
    localStorage.setItem("tempuserInfo",JSON.stringify(dialed))
    
    try{token.length>1?getOtp(numdial):false}
    catch(err){
        alert(`${err}`)
    }



}
const cancel=()=>{
    setchangenum(false)
}



  return (
      <form className="changenum">
            <div className="phonebox">
                <div className="message">
                    Enter you 
                    <span className='pnum'>
                     phone number
                    </span>
                     to receive a 
                     </div>
                <div className="vcode">Verification Code</div>
                <div className="selector">
                    <div className="left">
                        {/* left is display:none for now */}
                        <img src="" alt="" />
                        
                        <div className="leftcontent">233</div></div>
                    <div className="right"><input type="number" value={numdial} onChange={(e)=>setnumdial(e.currentTarget.value)} placeholder="Enter phone" className='vernuminput'/></div>
                </div>
            <div className="sendbtn" onClick={confirmnumb}>
                <span>{bools?"...":btn}</span>
            </div>
            <div className="sendbtn cancel" onClick={cancel}>
                <span>Cancel</span>
            </div>
            </div>
        </form>
  )
}
