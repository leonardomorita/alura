import React, { Component } from "react";
import Nota from "../Nota";
import "./lista-notas.css";

export default class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = {
      notas: []
    };
    this._novasNotas = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas);
  }

  _novasNotas(notas) {
    this.setState({
      notas: notas
    });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <Nota nota={nota} deletarNota={this.props.deletarNota} indice={index} />
            </li>
          );
        })}
      </ul>
    );
  }
}