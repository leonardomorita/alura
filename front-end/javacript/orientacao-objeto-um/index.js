import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

new Conta();

const clienteUm = new Cliente('José', '111.222.333-44');
const contaCorrenteUm = new ContaCorrente('11222', clienteUm);

const clienteDois = new Cliente('Amanda', '111.222.333-55');
const contaPoupancaDois = new ContaPoupanca(100, clienteDois, '11222');

contaCorrenteUm.depositar(100);
contaCorrenteUm.sacar(50);
console.log(contaCorrenteUm);