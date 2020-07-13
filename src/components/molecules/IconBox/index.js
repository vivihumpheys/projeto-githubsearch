import React from "react";
import "./styles.css";

const iconBox = () => {
  return (
    <div>
      <div className="icon-box">
        <div className="icon-text-box">
          <img src={icon}></img>
          <p>{userLocation}</p>
        </div>
        <div className="icon-text-box">
          <img src={icon}></img>
          <p>{userRepos}</p>
        </div>
        <div className="icon-text-box">
          <img src={icon}></img>
          <p>{userFollowers}</p>
        </div>
        <div className="icon-text-box">
          <img src={icon}></img>
          <p>{userFollowing}</p>
        </div>
      </div>
    </div>
  );
};

export default iconBox;
