import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroContas = 0;

    agencia;
    _cliente;
    _saldo = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroContas++;
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
        if (valor < 0 || this._saldo < valor) return;

        this._saldo -= valor;
        return valor;
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