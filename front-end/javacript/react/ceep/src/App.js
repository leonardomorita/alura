import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/app.css';
import './assets/index.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const nota = {titulo, texto};

    // Chamar o método 'render' novamente para atualizar a variável 'notas'
    this.setState({
      notas: [...this.state.notas, nota]
    });
  } 

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}
