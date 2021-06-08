export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    criarCategoria(nome) {
        this.categorias.push(nome);
        this.notificar();
    }

    inscrever(funcao) {
        this._inscritos.push(funcao);
    }

    desinscrever(funcao) {
        this._inscritos = this._inscritos.filter(f => f !== funcao);
    }

    notificar() {
        this._inscritos.forEach(funcao => funcao(this.categorias));
    }
}