import React, { Component } from "react";
import UsuarioEntrada from "./UsuarioEntrada";
import UsuarioSaida from "./UsuarioSaida";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { usuario: "Jorge Eduardo Barbosa" };
  }

  onChangeUsuario = (novoUsuario) => {
    this.setState({
      usuario: novoUsuario
    });
  }

  render() {
    return (
      <section>
        <center>
          <h1>Tecnologias Front-end</h1>
          <UsuarioEntrada usuario={ this.state.usuario } onChangeUsuario={ this.onChangeUsuario }  />                 
          <UsuarioSaida usuario={ this.state.usuario }/>
        </center>
      </section>      
    ); 
  };
}

export default App;
