import React from "react";
import "./styles.css";

const IconBox = ({
    iconLocation,
    userLocation,
    iconRepos,
    userRepos,
    iconFollowers,
    userFollowers,
    iconFollowing,
    userFollowing
}) => {
  return (
    <div>
      <div className="icon-box">
        <div className="icon-text-box">
          <img alt='icon' src={iconLocation}></img>
          <p className='icon-text'>{userLocation}</p>
        </div>
        <div className="icon-text-box">
          <img alt='icon' src={iconRepos}></img>
          <p className='icon-text'>{userRepos}</p>
        </div>
        <div className="icon-text-box">
          <img alt='icon' src={iconFollowers}></img>
          <p className='icon-text'>{userFollowers}</p>
        </div>
        <div className="icon-text-box">
          <img alt='icon' src={iconFollowing}></img>
          <p className='icon-text'>{userFollowing}</p>
        </div>
      </div>
    </div>
  );
};

export default IconBox;
