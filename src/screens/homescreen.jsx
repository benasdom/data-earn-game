import React, { memo, useEffect, useLayoutEffect, useState } from 'react'
import Topbar from './topbar'
import coinstacked from '../assets/coinstacked.png'
import shovel from '../assets/shovel.png'
import dp from '../assets/brown.jpg'


function Homescreen({setthemed,themed,setrendered,rendered,currentuser}) {
    const [username, setusername] = useState("")
    const [dated, setdated] = useState("")
    const [current, setcurrent] = useState("Home")
    const [earnedtoday, setearnedtoday] = useState("900")
    const [totalwatched, settotalwatched] = useState("")
    const [gbcurvetotal, setgbcurvetotal] = useState(2)
    const [toggled, settoggled] = useState(false)
    const [gbused, setgbused] = useState(0)
    const [gbremaining, setgbremaining] = useState(1.8)
    const [mounted, setmounted] = useState(false)

localStorage.removeItem("tempuserInfo");
useEffect(() => {
let datestring=`${new Date()}`.split(" ")
setdated((`${datestring[2]} ${datestring[1]} ${datestring[3]}`))
let stored=localStorage.getItem("userInfo");
stored!=null?setusername((JSON.parse(stored).firstName)):false

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
    if(rendered=="Home"){
            let listed=[...document.querySelectorAll(".navitems")];
            let option=listed[0]
            let roamer=document.querySelector(".roamer");
            listed.map(a=>a.children[0].classList.remove("activated"))
            listed.map(a=>a.children[1].classList.remove("activated2"))
            option.children[0].classList.add("activated")
            option.children[1].classList.add("activated2")
            let roam=(parseInt(7));
            document.querySelector(".paths").setAttribute("d",`M0,0 L${(0-1.9)},0  q5,0,7.5,5 c0,0,0,0,0,0  q7.5,10,15,0  q2,-5,10,-5  L100,0 l0,25  L0,25  z`)
            roamer.classList.add("roamed")
            roamer.style.cssText=`left:${roam}%`
            
    }else{false}

}, [gbused,username])




const toggletheme=()=>{

    document.querySelector(".headshot")?.classList.add("headshotlost")
    document.querySelector(".startearn2")?.classList.add("earn2lost")
    setthemed(!themed)
    try{
        localStorage.setItem("theme",JSON.stringify({selected:true}))
    }
    catch(error){
        false
    }

}


const removetheme=()=>{

    document.querySelector(".headshot")?.classList.remove("headshotlost")
    document.querySelector(".startearn2")?.classList.remove("earn2lost")
    setthemed(!themed)
    try{
        localStorage.setItem("theme",JSON.stringify({selected:false}))
    }
    catch(error){
        false
    }
}
let storedtheme=JSON.parse(localStorage.getItem("theme"));
useEffect(() => {
storedtheme?setthemed(storedtheme.selected):false
try{
    storedtheme.selected?toggletheme():removetheme()

}
catch(err){
    console.log("Theme failed to load")
}
    

}, [])

const toggle=()=>{
    themed?toggletheme():removetheme()
}
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
document.querySelector(".paths").setAttribute("d",`M0,0 L${23.1},0  q5,0,7.5,5 c0,0,0,0,0,0  q7.5,10,15,0  q2,-5,10,-5  L100,0 l0,25  L0,25  z`)
roamer.classList.add("roamed")
roamer.style.cssText=`left:${roam}%`
}
  return (
<>
<div className="pagecontent">
<Topbar setrendered={setrendered} current={current}/>
<div className="homepagecontrol">

<div className="welcome">
    <div className="hello">
        <div className="hellotext">
        Hi, {(username.length>11?`${username.slice(0,10)}...!`:username)+"👋"}

        </div>
        <div className="hellodate">
            📅 {dated}
        </div>
    </div>
    <div className="helloimg">
        <img src={shovel} className='shovel' alt=""  />
    </div>
</div>
<div className="userhomepic">
    <img src={dp} className="headshot"/>
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
            <div className="dgridelement"><img className='ttviews' src={coinstacked} alt=""  /></div>

        </div>
    </div>
    <div className="datagrid">
        <div className="dgridtitle">Total Videos Watched</div>
        <div className="dgridelements">
            <div className="dgridelement"><div className="circled">
            {totalwatched}<span className='td'>MB</span></div></div>
            <div className="dgridelement"><img className='ttviews' src={coinstacked} alt=""  /></div>

        </div>
    </div>
</div>
<div className="customization">
    <div className="startearn2" onClick={toggle}>Toggle Theme</div>
</div>



</div>
</div>
</>
)
}
export default memo(Homescreen)