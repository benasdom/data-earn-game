import React, { memo, useEffect, useLayoutEffect, useState } from 'react'
import Topbar from './topbar'
import coinstacked from '../assets/coinstacked.png'
import shovel from '../assets/shovel.png'


function Homescreen({setrendered,rendered}) {
    const [username, setusername] = useState("Benjamin")
    const [dated, setdated] = useState("Sat 9 October")
    const [earnedtoday, setearnedtoday] = useState("900")
    const [totalwatched, settotalwatched] = useState("850")
    const [gbcurvetotal, setgbcurvetotal] = useState(2)
    const [gbused, setgbused] = useState(0)
    const [gbremaining, setgbremaining] = useState(1.8)
    const [mounted, setmounted] = useState(false)

useEffect(() => {
    return ()=>{
        let usedup=((gbremaining/gbcurvetotal)*100);
    setgbused(usedup)
    let cclast=[...document.querySelectorAll(".cc")][1];
    let dotlast=document.querySelector(".dot");
    cclast?.classList.add("cclast")
    dotlast?.classList.add("dotlast")
    }

}, [mounted])

useEffect(() => {
    setmounted(!mounted)

}, [gbused,rendered])

const earnpage=()=>{
setrendered("Earn")
let listed=[...document.querySelectorAll(".navitems")];
let option=listed[1]
let roamer=document.querySelector(".roamer");
listed.map(a=>a.children[0].classList.remove("activated"))
listed.map(a=>a.children[1].classList.remove("activated2"))
option.children[0].classList.add("activated")
option.children[1].classList.add("activated2")
let roam=(parseInt(32));
document.querySelector(".paths").setAttribute("d",`M0,0 L${22},0  q5,0,7.5,5 c0,0,0,0,0,0  q7.5,10,15,0  q2,-5,10,-5  L100,0 l0,25  L0,25  z`)
roamer.classList.add("roamed")
roamer.style.cssText=`left:${roam}%`
}
  return (
<>
<div className="pagecontent">
<Topbar/>
<div className="homepagecontrol">

<div className="welcome">
    <div className="hello">
        <div className="hellotext">
        Hi, {username}!

        </div>
        <div className="hellodate">
            {dated}
        </div>
    </div>
    <div className="helloimg">
        <img src={shovel} className='shovel' alt="" srcset="" />
    </div>
</div>

<div className="earnedtoday">
    <div className="earnleft">
        <div className="earntitle">Earned</div>
        <div className="earnsub"><span className="td">
        {earnedtoday}Mb
            </span > earned today</div>
        <div className="startearn" onClick={earnpage}>start earning</div>
    </div>
    <div className="earnleft turns">
        <div className="dot" style={{'--ang':gbused}}></div>
        <svg className='progress' >
        <circle className='cc' cx={70} cy={70} r={70 }></circle>
        <circle className='cc'  cx={70} cy={70} r={70 } style={{'--numb':`${gbused}px`}}></circle>
        </svg>
        <div className="progresscircled">
            {gbremaining} <span className="td">GB</span>
        </div>
    </div>
</div>
<div className="flexedgrid">
    <div className="datagrid">
        <div className="dgridtitle">Total Videos Watched</div>
        <div className="dgridelements">
            <div className="dgridelement"><div className="circled">
            35<span className='td'>MB</span></div></div>
            <div className="dgridelement"><img className='ttviews' src={coinstacked} alt="" srcset="" /></div>

        </div>
    </div>
    <div className="datagrid">
        <div className="dgridtitle">Total Videos Watched</div>
        <div className="dgridelements">
            <div className="dgridelement"><div className="circled">
            {totalwatched}<span className='td'>MB</span></div></div>
            <div className="dgridelement"><img className='ttviews' src={coinstacked} alt="" srcset="" /></div>

        </div>
    </div>
</div>




</div>
</div>
</>
)
}
export default memo(Homescreen)