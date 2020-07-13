import React from 'react';
import './styles.css';

const SearchBar = (imageButton, placeholder) =>{
    return (
        <div className='search-bar--wrapper'>
        <input classname='search-bar--input' placeholder={placeholder}></input>
        <button className='search-bar--button'>{imageButton}</button>
        </div>
    )
};

export default SearchBar;