import React from "react";
import "./styles.css";

const ReposBox = ({ repoName, repoDescription, starIcon, starNumber }) => {
  return (
    <div className="repos-box">
      <h3 className='repo-name'>{repoName}</h3>
      <p className='repo-description'>{repoDescription}</p>
      <div className="icon-text-box">
        <img alt="star icon" src={starIcon}></img>
        <p className='star-number'>{starNumber}</p>
      </div>
    </div>
  );
};

export default ReposBox;
