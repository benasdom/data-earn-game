import React, { useEffect, useState } from 'react'
import Topbar from './topbar'
import ref from '../assets/ref.png'
import wayne from '../assets/wayne.jpg'
import copied from '../assets/copied.png'


export default function Referals({setrendered}) {
const [refered, setrefered] = useState(10)
const [current, setcurrent] = useState("Referals")

const [reflink, setreflink] = useState("cyberpay.com/")
let cred=JSON.parse(localStorage.getItem("userInfo"))
let refcode= cred?.userReferalCode

useEffect(() => {
  if(refcode){
    setreflink(`cyberpay.com/${refcode}`)
  }
  else{false}
  
}, [])

  return (
    <>

<div className="pagecontent">
<Topbar setrendered={setrendered} current={current}/>
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
<div className="refcode"> 
  <div className="reflink">
    <div className="reflink0">
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
    {`You have (${refered}) referals`}
</div>
<div className="refthird">
 {Array(10).fill("").map((a,b)=>(
   <div key={b+""} className='friendbox'>
    <div className="frienditem1">
        <img className='refimg' src={wayne} alt="" srcset="" />
    </div>
    <div className="frienditem2">
        <div className='item1f'>Emmanuel</div>
        <div className='item2f'>13th May 2024</div>
    </div>
    <div className="frienditem3">30mb today</div>
   </div>
 ))}
</div>
</div>
</div>


    </>
  )
}
