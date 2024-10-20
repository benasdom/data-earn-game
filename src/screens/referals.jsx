import React, { useState } from 'react'
import Topbar from './topbar'
import beginner from '../assets/beginner.png'
import ref from '../assets/ref.png'


export default function Referals() {
const [refered, setrefered] = useState(10)
  return (
    <>

<div className="pagecontent">
<Topbar/>
<div className="homepagecontrol">
<div className="reffirstboxtop">
<div className="reffirst">
<div className="rfirstchild">
    <div className="rftext"> Big Wins !!!</div>
    <div className="rftext2">
        <span>       Win big through referals.</span><br></br>
        <span>Get 500Mb for every referal you make</span><br></br>
        <span>Invite friends and family to earn big</span>
         </div>
</div>
<div className="rfirstchild2">
    <img className='rfchildimg' src={ref} alt="" />
</div>
</div>
<div className="refcode"> copy</div>
</div>
<div className="refsec">
    {`You have (${refered}) referals`}
</div>
<div className="refthird">
 {Array(10).fill("").map(a=>(
   <div className='friendbox'>
    <div className="frienditem1">
        <img className='refimg' src={beginner} alt="" srcset="" />
    </div>
    <div className="frienditem2">Ernest</div>
    <div className="frienditem3">30mb today</div>
   </div>
 ))}
</div>
</div>
</div>


    </>
  )
}
