import React, { Component } from "react";
import './lista-categorias.css';

export default class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = {
      categorias: []
    };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({
      categorias: categorias
    });
  }

  _handleEntrada(evento) {
    if (evento.key === "Enter") {
      const categoria = evento.target.value;
      this.props.criarCategoria(categoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, indice) => {
            return (
              <li key={indice} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>

        <input type="text" placeholder="Digite a categoria" onKeyUp={this._handleEntrada.bind(this)} className="lista-categorias_input" />
      </section>
    );
  }
}
