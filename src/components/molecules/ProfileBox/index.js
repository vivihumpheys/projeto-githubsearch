import React from "react";
import "./styles.css";

const profileBox = () => {
  return (
    <div>
      <div className="profile-box">
        <img alt={alt} src={userImg}></img>
        <h3>{userName}</h3>
        <h4>{userSubtitle}</h4>
      </div>
    </div>
  );
};

export default profileBox;