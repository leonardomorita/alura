import React, { Component } from "react";
import Nota from "../Nota";
import "./lista-notas.css";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
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