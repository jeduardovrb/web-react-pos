import React, { Component } from "react";

class UsuarioSaida extends Component {
  render() {
    return (
      <div>
        <p> { this.props.usuario } </p>

        <p>Bons estudos a todos.</p>
      </div>
    );
  }
}

export default UsuarioSaida;