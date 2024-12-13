import React, { useEffect, useState } from 'react'
import Topbar from './topbar'
import ref from '../assets/ref.png'
import wayne from '../assets/wayne.jpg'
import bob from '../assets/bob.jpg'
import jessy from '../assets/jessy.jpg'
import brown from '../assets/brown.jpg'
import copied from '../assets/copied.png'
import { fetchWithAuth } from './authfetch'


export default function Referals({setrendered}) {
const [refered, setrefered] = useState([])
const [current, setcurrent] = useState("Referals")
const [dp, setdp] = useState([bob,wayne,jessy,brown])
const [copymessage, setcopymessage] = useState("")
const [loaded, setloaded] = useState(false)

const [reflink, setreflink] = useState("********")
let cred=JSON.parse(localStorage.getItem("userInfo"))
let refcode= cred?.userReferalCode

useEffect(() => {
  if(refcode){
    setreflink(`${refcode}`)}
  else{false}
}, [])

  const storeddata = JSON.parse(localStorage.getItem("userInfo"));
  let url = 'https://cyberearn-staging.up.railway.app/api/v1/user/referals';
  let accessToken = storeddata?.accessToken;
  let refreshToken = storeddata?.refreshToken;
  const options={
    headers: { Authorization: `Bearer ${accessToken}` }
  }

  useEffect(() => {
    if (accessToken && refreshToken) {
      fetchWithAuth(url,options,refreshToken,(data)=>{setrefered(data);setloaded(true)})
    }
  }, [url]);

  const copyreflink= ()=>{
    navigator.clipboard.writeText(reflink)
    setcopymessage("✔️  copied successfully !!! 🥳🥳🥳")
    setTimeout(() => {
      setcopymessage("")
    }, 2000);
  }
  return (
    <>

<div className="pagecontent">
<Topbar setrendered={setrendered} successmessage={copymessage} current={current}/>
<div className="homepagecontrol">
<div className="reffirstboxtop">
<div className="reffirst">
<div className="rfirstchild">
    <div className="rftext">~ Big Wins !!! ~</div>
    <div className="rftext2">
        <span>       Win big through referals.</span><br></br>
        <span>Get 500Mb reward for each referal</span><br></br>
        <span>Invite friends and family to earn</span>
         </div>
</div>
<div className="rfirstchild2">
    <img className='rfchildimg' src={ref} alt="" />
</div>
</div>
<div className="refcode" onClick={copyreflink}> 
  <div className="reflink">
    <div className="reflink0" >
      Referal Code
    </div>
    <div className="reflink1">
    {reflink}
    </div>
  </div>
  <div className="copypng"><img className="copypngimg" src={copied}/></div>
</div>
</div>
<div className="refsec">
    {`You have (${(refered.length > 0)?refered.length:0}) referals`}
</div>
<div className="refthird">
 {refered.length > 0 ?(refered.map((a,b)=>(
   <div key={b+""} className='friendbox'>
    <div className="frienditem1">
        <img className='refimg' src={`${a.referedUserDetails.highestStreakScore}`.length <4?dp[`${a.referedUserDetails.highestStreakScore}`.length-1]:dp[3]} alt="" srcset="" />
    </div>
    <div className="frienditem2">
        <div className='item1f'>{`${a.referedUserDetails.firstName}`}</div>
        <div className='item2f'>{`${new Date(a.referedUserDetails.dateCreated).toUTCString().split(/..:/)[0]}`}</div>
    </div>
    <div className="frienditem3">{`max streak: ${a.referedUserDetails.highestStreakScore}`}</div>
   </div>
 )))
 :
 !loaded && (Array(3).fill("").map((a,b)=>(
   <div key={b+""} className='friendbox refloader'>
    <div className="frienditem1 ">
        <img className='refimg vanish' src={wayne} alt="" srcset="" />
    </div>
    <div className="frienditem2 vanish">
        <div className='item1f'>Emmanuel</div>
        <div className='item2f'>13th May 2024</div>
    </div>
    <div className="frienditem3 vanish">30mb today</div>
   </div>
 )))}
</div>
</div>
</div>


    </>
  )
}
