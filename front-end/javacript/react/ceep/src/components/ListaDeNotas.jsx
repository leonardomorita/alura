import React, { Component } from "react";
import Nota from "./Nota";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("1", "2", "3").map(categoria => {
          return (
            <li>
              <div>{categoria}</div>
              <Nota />
            </li>
          );
        })}

      </ul>
    );
  }
}