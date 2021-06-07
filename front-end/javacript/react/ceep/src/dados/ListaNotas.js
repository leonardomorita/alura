export default class ListaNotas {
    constructor() {
        this.notas = [];
    }

    criarNota(categoria, titulo, texto) {
        const nota = new Nota(categoria, titulo, texto);
        this.notas.push(nota);
    }

    deletarNota(indice) {
        this.notas.splice(indice, 1);
    }
}

class Nota {
    constructor(categoria, titulo, texto) {
        this.categoria = categoria;
        this.titulo = titulo;
        this.texto = texto;
    }
}