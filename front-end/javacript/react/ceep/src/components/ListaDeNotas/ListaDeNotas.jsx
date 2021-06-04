import React, { Component } from "react";
import Nota from "../Nota";
import "./lista-notas.css";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("1", "2", "3").map((categoria, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <Nota />
            </li>
          );
        })}
      </ul>
    );
  }
}