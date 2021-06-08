import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias'
import './assets/app.css';
import './assets/index.css';
import Categorias from './dados/Categorias';
import ListaNotas from './dados/ListaNotas';

export default class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ListaNotas();
    this.state = {
      //notas: [],
      //categorias: []
    };
  }

  /* criarNota(categoria, titulo, texto) {
    const nota = {categoria, titulo, texto};

    // Chamar o método 'render' novamente para atualizar a variável 'notas'
    this.setState({
      notas: [...this.state.notas, nota]
    });
  } */

  /* deletarNota(indice) {
    let copiaNotas = this.state.notas;
    copiaNotas.splice(indice, 1);

    this.setState({
      notas: copiaNotas
    });
  } */

  /* criarCategoria(nome) {
    this.setState({
      categorias: [...this.state.categorias, nome]
    });
  } */

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.notas.criarNota.bind(this.notas)} categorias={this.categorias} />

        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.categorias} criarCategoria={this.categorias.criarCategoria.bind(this.categorias)} />
          <ListaDeNotas notas={this.notas} deletarNota={this.notas.deletarNota.bind(this.notas)} />
        </main>
      </section>
    );
  }
}
