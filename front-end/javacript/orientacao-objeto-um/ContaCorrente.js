import { Cliente } from "./Cliente";

export class ContaCorrente {
    agencia;

    _cliente;
    _saldo = 0;

    set cliente(objetoCliente) {
        if (objetoCliente instanceof Cliente) {
            this._cliente = objetoCliente;
        }
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
}