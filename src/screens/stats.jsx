import React, { useState } from 'react'
import Topbar from './topbar'
import ntrend from '../assets/ntrend.png'

export default function Stats({setrendered}) {

  const [giga, setgiga] = useState(1.2)
  const [gigb, setgigb] = useState(3.4)
  const [gigc, setgigc] = useState(3.0)
  const [scorenums, setscorenums] = useState("10GB")
  return (
    <>

<div className="pagecontent">
<Topbar setrendered={setrendered}/>
<div className='statpagecontrol'> 
  <div className="scores">
    <div className="scorenum">{scorenums}</div>
    <div className="score">Total</div></div>
<svg width="357" className="scoreboard" height="287" viewBox="0 0 357 287" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="179.166" cy="130.218" r="107.289" stroke="url(#paint0_linear_785_276)" stroke-width="10" stroke-linecap="round"/>
<path d="M186.4 21.5139C204.421 22.9626 221.794 28.8909 236.942 38.7602C252.089 48.6295 264.531 62.127 273.137 78.0265C281.743 93.9261 286.24 111.724 286.219 129.803C286.199 147.882 281.662 165.67 273.02 181.55C264.378 197.43 251.906 210.899 236.736 220.734C221.566 230.569 204.179 236.458 186.155 237.866C168.131 239.274 150.04 236.156 133.527 228.796C117.014 221.436 102.602 210.067 91.5987 195.722" stroke="url(#paint1_linear_785_276)" stroke-width="10" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_785_276" x1="128.082" y1="34.93" x2="319.206" y2="49.091" gradientUnits="userSpaceOnUse">
<stop stopColor="#0DA6C2"/>
<stop offset="1" stopColor="#61DE70"/>
</linearGradient>
<linearGradient id="paint1_linear_785_276" x1="46.1232" y1="335.814" x2="296.396" y2="325.07" gradientUnits="userSpaceOnUse">
<stop stopColor="#9327F0"/>
<stop offset="1" stopColor="#320DAF"/>
</linearGradient>
</defs>
</svg>
  
<div className="bluredafter"></div>
            <div className="bluredbefore"></div>
  {/* topsvg */}
    
<svg className="statsvg" height="820" viewBox="0 0 375 778" fill="none" xmlns="http://www.w3.org/2000/svg">
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
