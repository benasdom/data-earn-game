import React, { useEffect, useState } from 'react'

export default function Changenumb({setchangenum,changenum}) {
const [mobilenum, setmobilenum] = useState("0552222222")
const confirmnumb=()=>{
    setchangenum(false)

}
useEffect(() => {

}, [changenum])

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
                    <div className="right"><input type="tel" placeholder="Enter phone" className='vernuminput'/></div>
                </div>
            <div className="sendbtn" onClick={confirmnumb}>
                <span>Add Number</span>
            </div>
            <div className="sendbtn cancel" onClick={confirmnumb}>
                <span>Cancel</span>
            </div>
            </div>
        </div>
  )
}
