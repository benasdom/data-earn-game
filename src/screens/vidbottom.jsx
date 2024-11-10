import React, { useState, useEffect } from 'react';
import mine from '../assets/mine.png';
import play from '../assets/play.png';
import coin from '../assets/coin.png';

export default function Vidbottom() {
  const [mins, setMins] = useState("90");
  const [vidData, setVidData] = useState([]);
  const [newToken, setNewToken] = useState("");
  
  const stored = JSON.parse(localStorage.getItem("userInfo"));
  let url = 'https://cyberearn-staging.up.railway.app/api/v1/videos';
  let accessToken = stored?.accessToken;
  let refreshToken = stored?.refreshToken;

  function fetchWithAuth(url, accessToken, refreshToken) {
    return fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(response => {
        if (response.status === 401) {
          return refreshTokens(refreshToken)
            .then(newAccessToken => fetchWithAuth(url, newAccessToken));
        }
        return response.json();
      })
      .then(data => {
        setVidData(data.data.videos);
      })
      .catch(error => console.error("Error fetching videos"));
  }

  function refreshTokens(refreshToken) {
    return fetch("https://cyberearn-staging.up.railway.app/api/v1/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    })
      .then(response => {
        if (!response.ok) throw new Error("Failed to refresh token");
        return response.json();
      })
      .then(data => {
        const newAccessToken = data.data.token;
        setNewToken(newAccessToken);
        return newAccessToken;
      })
      .catch(error => {
        console.error("Error refreshing token:", error);
        throw error;
      });
  }

  useEffect(() => {
    if (accessToken && refreshToken) {
      fetchWithAuth(url, accessToken, refreshToken);
    }
  }, [url, accessToken, refreshToken]);

  return (
    <div className="comp">
      {vidData.length > 0 ? (
        vidData.map((item, index) => (
          <div className="viditems" key={index}>
            <div className="viditemschild">
              <div className="vidtop">
                <img src={mine} className="vidtop" alt="" />
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
      ) : (
        Array.from({ length: 10 }, (_, index) => (
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
