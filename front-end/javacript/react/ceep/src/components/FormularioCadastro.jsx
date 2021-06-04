import React, { Component } from "react";

export default class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Digite o título da nota" />
        <textarea placeholder="Digite aqui o conteúdo da nota" />
        <button>Criar Nota</button>
      </form>
    );
  }
}