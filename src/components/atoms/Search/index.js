import React from "react";
import "./styles.css";

const Search = ({ value, placeholder, type, changeUser }) => {
  return (
    <input
      className="input-search"
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={changeUser}
    ></input>
  );
};

export default Search;
