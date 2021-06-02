import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroContas++;
    }

    sacar(valor) {
        return this._sacar(valor, 1.1);
    }
}