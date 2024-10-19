import React, { useState } from 'react'

export default function Changenumb() {
const [mobilenum, setmobilenum] = useState("0552222222")
  return (
      <div className="changenum">
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
                    <div className="right"><input type="text" placeholder="Enter phone" className='vernuminput'/></div>
                </div>
            <div className="sendbtn">
                <span>send</span>
            </div>
            </div>
        </div>
  )
}
