import React, { Component } from "react";
import "./styles.css";
import {Link} from 'react-router-dom';
import MainTitle from "../../components/atoms/Main Title";
import SearchBar from "../../components/molecules/SearchBar";
import iconButton from "../../assets/search-icon.png";

//precisarei transformar a Home em classe para manipular os states
const Home = ({
  imageButton,
  onClick,
  inputClass,
  value,
  placeholder,
  type,
  searchBarClass,
  searchButtonClass,
  changeUser,
}) => {
  return (
    <div>
      <MainTitle text="GitHub Search" />
      <SearchBar
        imageButton={iconButton}
        placeholder="Digite um usuário para consultar seus repositórios"
        
      />
    </div>
  );
};

export default Home;
