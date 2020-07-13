import React from "react";
import "./styles.css";

const reposBox = () => {
  return (
    <div>
      <div className="repos-box">
        <h3>{repoName}</h3>
        <p>{repoDescription}</p>
        <div className="icon-text-box">
          <img src={starIcon}></img>
          <p>{starNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default reposBox;