import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const clienteUm = new Cliente('José', '111.222.333-44');
const contaCorrenteUm = new ContaCorrente('11222', clienteUm);

const clienteDois = new Cliente('Amanda', '111.222.333-55');
const contaCorrenteDois = new ContaCorrente('11222', clienteDois);

console.log(clienteUm, contaCorrenteUm);
console.log(clienteDois, contaCorrenteDois);
console.log(ContaCorrente.numeroContas);