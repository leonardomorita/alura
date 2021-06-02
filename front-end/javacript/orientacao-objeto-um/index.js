import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('DIRETOR UM', 10000, '123.456.789-10');
const gerente = new Gerente('GERENTE UM', 5000, '123.123.234-90');

diretor.cadastrarSenha('senhadiretor');
gerente.cadastrarSenha('senhagerente');

console.log(SistemaAutenticacao.login(diretor, 'senhadiretor'));
console.log(SistemaAutenticacao.login(gerente, 'senhagerente'));