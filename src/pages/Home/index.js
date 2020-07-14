import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import MainTitle from "../../components/atoms/Main Title";
import SearchBar from "../../components/molecules/SearchBar";
import iconButton from "../../assets/icons/search-icon.svg";
import ApiService from "../../service/api";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      user: "",
      error: "",
    };
  }

  changeUser = (e) => {
    const inputValue = e.target.value;
    this.setState({ inputValue});
    // console.log ('estado usuario', user);
  };

  searchUser = async () => {
    const user = this.state.inputValue;
    const getUser = await ApiService.get(`/users/${user}`);
    if (getUser.data.login !== "") {
      this.props.history.push({
        pathname: "/result",
        state: getUser.data,
      });
    } else {
      this.setState({ error: "Usuário de GitHub não encontrado" });
    }
    // console.log ('usuario do github', user);
    console.log("pegar usuário da api", getUser);
  };

  render() {
    // console.log (this.props.history);
    // console.log ('estado do input', this.state.inputValue);
    return (
      <div>
        <MainTitle text="GitHub Search" />
        <SearchBar
          imageButton={iconButton}
          placeholder="Digite um usuário para consultar seus repositórios"
          value={this.inputValue}
          onClick={this.searchUser}
          type="text"
          changeUser={this.changeUser}
        />
      </div>
    );
  }
}

export default Home;
