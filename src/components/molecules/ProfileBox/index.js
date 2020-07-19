import React from "react";
import "./styles.css";

const ProfileBox = ({
    userImg,
    userName,
    userSubtitle
}) => {
  return (
    <div>
      <div className="profile-box">
        <img className='profile-img' alt='user' src={userImg}></img>
        <h3 className='profile-name'>{userName}</h3>
        <h4 className='profile-subtitle'>{userSubtitle}</h4>
      </div>
    </div>
  );
};

export default ProfileBox;