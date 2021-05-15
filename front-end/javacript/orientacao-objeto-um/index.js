import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const clienteUm = new Cliente();
const contaCorrenteUm = new ContaCorrente();

const clienteDois = new Cliente();
const contaCorrenteDois = new ContaCorrente();

clienteUm.nome = 'Nome Um';
clienteUm.cpf = '111.222.333-44';
contaCorrenteUm.cliente = clienteUm;
contaCorrenteUm.agencia = '11222';
contaCorrenteUm.depositar(200);

clienteDois.nome = 'Nome Dois';
clienteDois.cpf = '111.222.333-55';
contaCorrenteDois.cliente = clienteDois;
contaCorrenteDois.agencia = '11222';
contaCorrenteDois.depositar(200);

contaCorrenteUm.transferir(100, contaCorrenteDois);

console.log(contaCorrenteUm);
console.log(contaCorrenteDois);