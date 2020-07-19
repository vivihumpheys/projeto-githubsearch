import React from "react";
import "./styles.css";
import Search from "../../atoms/Search";

const SearchBar = ({
  imageButton,
  onClick,
  value,
  placeholder,
  type,
  changeUser,
}) => {
  return (
    <div className="search-bar-box">
     
      <Search
        value={value}
        placeholder={placeholder}
        type={type}
        changeUser={changeUser}
      />
      <button className="buttonIcon" onClick={onClick}>
        <img alt="search button" src={imageButton} />
      </button>
    </div>
  );
};

export default SearchBar;
