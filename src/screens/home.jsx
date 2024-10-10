import React from 'react'
import dashboard from '../assets/dash.png'
import analytics from '../assets/analytics.png'
import earn from '../assets/earn.png'
import wallet from '../assets/wallet.png'

export default function Home() {
  return (
    <>
    <div className="homepage">

        <div className="pagecontent">
{/* This should be a changeable component */}
Hellow
        </div>
        <div className="navbar">
<div className="navcontent">
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path className='paths' d="
    M0,60 L0,60 q5,0,7.5,5 c0,0,0,0,0,0 q7.5,10,15,0 q2,-5,10,-5 L100,60 l0,25 L0,85 Z 
  "></path>
</svg>
</div>
<div className="naved">
    <div className="navitems">
        <div className="navicon"><img className='imgicon' src={dashboard} alt="" srcset="" /></div>
        <div className="navtext"></div>
    </div>
    <div className="navitems">
        <div className="navicon"><img className='imgicon' src={earn} alt="" srcset="" /></div>
        <div className="navtext">dashboard</div>
    </div>    <div className="navitems">
        <div className="navicon"><img className='imgicon' src={analytics} alt="" srcset="" /></div>
        <div className="navtext"></div>
    </div>    <div className="navitems">
        <div className="navicon"><img className='imgicon' src={wallet} alt="" srcset="" /></div>
        <div className="navtext"></div>
    </div>  

</div>
        </div>
    </div>
    </>
  )
}
