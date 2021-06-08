export default class ListaNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    criarNota(categoria, titulo, texto) {
        const nota = new Nota(categoria, titulo, texto);
        this.notas.push(nota);
        this.notificar();
    }

    deletarNota(indice) {
        this.notas.splice(indice, 1);
        this.notificar();
    }

    inscrever(funcao) {
        this._inscritos.push(funcao);
    }

    desinscrever(funcao) {
        this._inscritos = this._inscritos.filter(f => f !== funcao);
    }

    notificar() {
        this._inscritos.forEach(funcao => funcao(this.notas));
    }
}

class Nota {
    constructor(categoria, titulo, texto) {
        this.categoria = categoria;
        this.titulo = titulo;
        this.texto = texto;
    }
}