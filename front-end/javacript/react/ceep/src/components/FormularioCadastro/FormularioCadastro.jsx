import React, { Component } from "react";
import "./formulario-cadastro.css";

export default class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Digite o título da nota"
          className="form-cadastro_input"
        />
        <textarea
          rows={15}
          placeholder="Digite o conteúdo da nota"
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}