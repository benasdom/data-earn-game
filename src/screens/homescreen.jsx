import React, { useEffect, useState } from 'react'
import Topbar from './topbar'
import coinstacked from '../assets/coinstacked.png'
import shovel from '../assets/shovel.png'


export default function Homescreen() {
    const [username, setusername] = useState("Benjamin")
    const [dated, setdated] = useState("Sat 9 October")
    const [earnedtoday, setearnedtoday] = useState("900")
    const [totalwatched, settotalwatched] = useState("850")
    const [gbcurvetotal, setgbcurvetotal] = useState(2)
    const [gbused, setgbused] = useState(0)
    const [gbremaining, setgbremaining] = useState(1.8)


useEffect(() => {
  
    let usedup=((gbremaining/gbcurvetotal)*100);
    setgbused(usedup)
    let cclast=[...document.querySelectorAll(".cc")][1];
    let dotlast=document.querySelector(".dot");
  return () => {


    cclast?.classList.add("cclast")
    dotlast?.classList.add("dotlast")

  }
}, [])

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
        <div className="startearn">start earning</div>
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
