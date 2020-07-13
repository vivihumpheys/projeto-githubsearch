import React, { Component } from "react";
import "./styles.css";
import ProfileBox from "../../components/molecules/ProfileBox";
import IconBox from "../../components/molecules/IconBox";
import ReposBox from "../../components/molecules/ReposBox";

//essa const também deverá se tornar uma classe stageful
const Result = ({
  userImg,
  userName,
  userSubtitle,
  icon,
  userLocation,
  userRepos,
  userFollowers,
  userFollowing,
  repoName,
  repoDescription,
  starIcon,
  starNumber,
}) => {
  return (
    <div>
      <ProfileBox />
      <IconBox />
      <ReposBox />
    </div>
  );
};

export default Result;
