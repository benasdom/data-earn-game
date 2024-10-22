import React, { useState } from 'react'
import Topbar from './topbar'
import ntrend from '../assets/ntrend.png'

export default function Stats() {

  const [giga, setgiga] = useState(1.2)
  const [gigb, setgigb] = useState(3.4)
  const [gigc, setgigc] = useState(3.0)
  return (
    <>

<div className="pagecontent">
<Topbar/>
<div className='statpagecontrol'> 
    
<svg className="statsvg" height="810" viewBox="0 0 375 778" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className='statpath1' d="M189.567 132.989C254.363 132.989 308.701 89.2011 322.828 30.3166C326.509 14.9738 338.817 2.5 353.9 2.5H386.5V798.5H-11.5V2.5H25.2333C40.3163 2.5 52.6244 14.9738 56.3053 30.3166C70.4323 89.2011 124.771 132.989 189.567 132.989Z" />
<path className='statpath2' d="M189.567 132.989C254.363 132.989 308.701 89.2011 322.828 30.3166C326.509 14.9738 338.817 2.5 353.9 2.5H386.5V798.5H-11.5V2.5H25.2333C40.3163 2.5 52.6244 14.9738 56.3053 30.3166C70.4323 89.2011 124.771 132.989 189.567 132.989Z"/>
</svg>
<div className="statcontent">
  <div className="statvids">
<div className="statboard">
  <div className="statboarda">Videos</div>
  <div className="statboardb">64%</div>
  </div>
<div className="statboard">
  <div className="statboarda"><img className="ntrend" src={ntrend} /></div>
  <div className="statboardb"><div className="ntredfig">{giga}GB</div></div>
  </div>
  </div>
  <div className="statgames">
<div className="statboard">
  <div className="statboarda">Games</div>
  <div className="statboardb">34%</div>
  </div>
<div className="statboard">
  <div className="statboarda"><img className="ntrend" src={ntrend} /></div>
  <div className="statboardb"><div className="ntredfig">{gigb}GB</div></div>
  </div>
  </div>
  <div className="statsurvey">
<div className="statboard">
  <div className="statboarda">Survey</div>
  <div className="statboardb">10%</div>
  </div>
<div className="statboard">
  <div className="statboarda"><img className="ntrend" src={ntrend} /></div>
  <div className="statboardb"><div className="ntredfig">{gigc}GB</div></div>
  </div>
  </div>
</div>
</div>
</div>


    </>  )
}
