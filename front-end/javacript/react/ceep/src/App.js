import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias'
import './assets/app.css';
import './assets/index.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
    };
  }

  criarNota(categoria, titulo, texto) {
    const nota = {categoria, titulo, texto};

    // Chamar o método 'render' novamente para atualizar a variável 'notas'
    this.setState({
      notas: [...this.state.notas, nota]
    });
  }

  deletarNota(indice) {
    let copiaNotas = this.state.notas;
    copiaNotas.splice(indice, 1);

    this.setState({
      notas: copiaNotas
    });
  }

  criarCategoria(nome) {
    this.setState({
      categorias: [...this.state.categorias, nome]
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} categorias={this.state.categorias} />

        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.state.categorias} criarCategoria={this.criarCategoria.bind(this)} />
          <ListaDeNotas notas={this.state.notas} deletarNota={this.deletarNota.bind(this)} />
        </main>
      </section>
    );
  }
}
