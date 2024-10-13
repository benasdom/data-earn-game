import React, { useEffect, useLayoutEffect, useState } from 'react'
import dashboard from '../assets/dashboard.png'
import analytics from '../assets/analysis.png'
import earn from '../assets/earns.png'
import wallet from '../assets/wallets.png'

export default function Mynavbar () {
    const [pathfollow, setpathfollow] = useState(0)
const [menu, setmenu] = useState(
    [
        {datatext:0,text:"home",img:dashboard},
        {datatext:25,text:"earn",img:earn},
        {datatext:50,text:"analytics",img:analytics},
        {datatext:75,text:"wallet",img:wallet},
    ]
)


const activate = (option)=>{
   
let listed=[...document.querySelectorAll(".navitems")];
listed.map(a=>a.children[0].classList.remove("activated"))
listed.map(a=>a.children[1].classList.remove("activated2"))
option.children[0].classList.add("activated")
option.children[1].classList.add("activated2")
let pathfollow = option.dataset.text;
setpathfollow(pathfollow)
document.querySelector(".paths").setAttribute("d",`M0,0 L${pathfollow-3},0  q5,0,7.5,5 c0,0,0,0,0,0  q7.5,10,15,0  q2,-5,10,-5  L100,0 l0,25  L0,25  z`)

}

  return (
    <>
  <div className="navbar">
<div >
<svg className="navcontent" viewBox="1 0 98 25" xmlns="http://www.w3.org/2000/svg">
  <path  className="paths" fill="#0070f3" d="
    M0,0 L-100,0  q5,0,7.5,5 c0,0,0,0,0,0  q7.5,10,15,0  q2,-5,10,-5  L100,0 l0,25  L0,25  z
  "></path>
</svg>
</div>
<div className="naved">
    {menu.map((a,b)=>{
   return b==0?(
     <div className="navitems" key={b+""} onClick={(e)=>{activate(e.currentTarget)}} data-text={a.datatext} onLoad={(e)=>{activate(e.currentTarget)}}>
    <div className="navicon"><img className='imgicon' src={a.img} alt="" srcset="" /></div>
    <div className="navtext">{a.text}</div>
</div>
):
(
    <div className="navitems" key={b+""} data-text={a.datatext} onClick={(e)=>{activate(e.currentTarget)}}>
    <div className="navicon"><img className='imgicon' src={a.img} alt="" srcset="" /></div>
    <div className="navtext">{a.text}</div>
</div>

)
    })}

</div>
        </div>
    </>
  )
}
