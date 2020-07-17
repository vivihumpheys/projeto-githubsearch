import React, { Component } from "react";
import "./styles.css";
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
    this.setState({ inputValue });
    console.log("valor input", inputValue);
  };

  searchUser = async () => {
    const user = this.state.inputValue;
    if (user) {
      try {
        const response = await ApiService.get(`/users/${user}`);
        console.log("pegar dados da api", response);
        this.props.history.push({
          pathname: "/result",
          state: response.data,
        });
      } catch (e) {
        this.setState({ error: "Usuário de GitHub não encontrado", inputValue:''});
      }
    } else {
      this.setState({ error: "Por favor, digite um usuário" });
    };

    // console.log("mensagem de erro", this.state.error);
    // console.log("usuario do github", user);
  };

  render() {
    const { inputValue, error } = this.state;
    return (
      <div>
        <MainTitle text="GitHub Search" />
        <SearchBar
          imageButton={iconButton}
          placeholder="Digite um usuário para consultar seus repositórios"
          value={inputValue}
          onClick={this.searchUser}
          type="text"
          changeUser={this.changeUser}
        />
        {/* if ternário resumido, se error é true, então rederize o texto de error. evita renderizar uma frase vazia */}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default Home;
