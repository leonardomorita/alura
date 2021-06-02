export class ContaPoupanca {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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