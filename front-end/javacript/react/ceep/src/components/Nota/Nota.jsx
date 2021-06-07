import React, { Component } from "react";
import "./nota.css";
import deletarSVG from "../../assets/images/deletar.svg";

export default class Nota extends Component {
  deletar() {
    const indice = this.props.indice;
    this.props.deletarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
          <img src={deletarSVG} alt="Deletar" onClick={this.deletar.bind(this)} />
          <h4>{this.props.nota.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.nota.texto}</p>
      </section>
    );
  }
}
