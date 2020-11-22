import React, { Component } from "react";
import UsuarioEntrada from "./UsuarioEntrada";
import UsuarioSaida from "./UsuarioSaida";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { usuario_aluno: "Jorge Eduardo Barbosa" };
  }

  onChangeUsuario = (AUsuario) => {
    this.setState({
      usuario_aluno: AUsuario
    });
  }

  render() {
    return (
      <div>
        <center>
          <h1>Tecnologias Front-end</h1>
          <UsuarioEntrada usuario_aluno={ this.state.usuario_aluno } onChangeUsuario={ this.onChangeUsuario }  />                 
          <UsuarioSaida usuario_aluno={ this.state.usuario_aluno }/>
        </center>
      </div>      
    ); 
  };
}

export default App;
