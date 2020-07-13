import React from "react";
import "./styles.css";

const ReposBox = (
    repoName,
    repoDescription,
    starIcon,
    starNumber
    ) => {
  return (
    <div>
      <div className="repos-box">
        <h3>{repoName}</h3>
        <p>{repoDescription}</p>
        <div className="icon-text-box">
          <img alt='star icon' src={starIcon}></img>
          <p>{starNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default ReposBox;