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
        <img alt='user image' src={userImg}></img>
        <h3>{userName}</h3>
        <h4>{userSubtitle}</h4>
      </div>
    </div>
  );
};

export default ProfileBox;