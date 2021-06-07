import React, { Component } from "react";
import "./formulario-cadastro.css";

export default class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.categoria = "";
    this.titulo = "";
    this.texto = "Sem Categoria";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    this.props.criarNota(this.categoria, this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select className="form-cadastro_input" onChange={this._handleMudancaCategoria.bind(this)}>
          <option>Sem Categoria</option>
          {this.props.categorias.map((categoria, indice) => {
            return (
              <option key={indice} value={categoria}>{categoria}</option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="Digite o título da nota"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Digite o conteúdo da nota"
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}