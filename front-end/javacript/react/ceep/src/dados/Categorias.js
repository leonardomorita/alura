export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    criarCategoria(nome) {
        this.categorias.push(nome);
    }

    inscrever(funcao) {
        this._inscritos.push(funcao);
    }

    notificar() {
        this._inscritos.forEach(funcao => funcao(this.categorias));
    }
}