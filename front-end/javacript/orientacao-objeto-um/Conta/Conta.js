import { Cliente } from "../Cliente.js";

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error('Essa classe é abstrata');
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(objetoCliente) {
        if (objetoCliente instanceof Cliente) {
            this._cliente = objetoCliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    sacar(valor) {
        throw new Error('Esse método é abstrato');
    }

    _sacar(valor, taxa) {
        valorSacar = taxa * valor;
        if (valorSacar < 0 || this._saldo < valorSacar) return;

        this._saldo -= valorSacar;
        return valorSacar;
    }

    depositar(valor) {
        if (valor < 0) return;

        this._saldo += valor;
    }

    transferir(valor, destino) {
        const valorSacado = this.sacar(valor);

        if (!valorSacado) return;

        destino.depositar(valorSacado);
    }

    get saldo() {
        return this._saldo;
    }
}