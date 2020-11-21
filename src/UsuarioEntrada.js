import React, { Component } from "react";

class UsuarioEntrada extends Component {
  render() {
    return (
      <div>
        <input onChange={ (e) => this.props.onChangeUsuario(e.target.value) } 
       
       type="text"></input>      
      </div>
    );
  }
}

export default UsuarioEntrada;