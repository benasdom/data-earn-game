import React, { useState, useEffect } from 'react';
import mine from '../assets/mine.png';
import play from '../assets/play.png';
import coin from '../assets/coin.png';
import { fetchWithAuth } from './authfetch';

export default function Vidbottom({setchecking,setplayer,setplaying,checking}) {
  const [mins, setMins] = useState("90");
  const [vidData, setVidData] = useState([]);
  const [newToken, setNewToken] = useState("");
  
  const storeddata = JSON.parse(localStorage.getItem("userInfo"));
  let url = 'https://cyberearn-staging.up.railway.app/api/v1/videos';
  let accessToken = storeddata?.accessToken;
  let refreshToken = storeddata?.refreshToken;




  const activatePlayer=(itemUrl)=>{
    setplaying(itemUrl)
    setplayer(true)
  }
  const options={
    headers: { Authorization: `Bearer ${accessToken}` }
  }


  useEffect(() => {
    if (accessToken && refreshToken) {
      fetchWithAuth(url,options,refreshToken,(data)=>{setVidData(data.videos)})
    }
  }, [url]);

  return (
    <div className="comp">
      {setchecking(false), vidData.length > 0 ? (
        vidData.map((item, index) => (
          <div className="viditems" key={index+""} onClick={()=>{activatePlayer(item.url)}}>
            <div className="viditemschild">
              <div className="vidtop">
                <img src={item.thumbnail} className="vidtop" alt="" />
              </div>
              <div className="vidtext">
                <div className="vidtext1">{mins} mins</div>
              </div>
            </div>
            <div className="viditemschild">
              <div className="vidtop2">
                <img src={play} className="vidimg" alt="" />
              </div>
              <div className="vidtext">
                <img src={coin} alt="" className="small" />
                <div className="vidtext2">{item.dataAllocation} MB</div>
              </div>
            </div>
          </div>
        ))
      ) : (setchecking(true), Array.from({ length: 10 }, (_, index) => (
          <div className="viditems loader" key={index}>
            <div className="viditemschild vanish">
              <div className="vidtop">
                <img src={mine} className="vidtop" alt="" />
              </div>
              <div className="vidtext">
                <div className="vidtext1">{mins} mins</div>
              </div>
            </div>
            <div className="viditemschild vanish">
              <div className="vidtop2">
                <img src={play} className="vidimg" alt="" />
              </div>
              <div className="vidtext">
                <img src={coin} alt="" className="small" />
                <div className="vidtext2">0 MB</div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
