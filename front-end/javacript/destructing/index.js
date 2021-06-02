const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];
const numeros = [...numerosPares, ...numerosImpares];
console.log(numeros);

/* A variável 'n' armazenará o resto dos valores, pois está usando o '...' que é o destructuring */
const [n1, n2, ...n] = [1, 2, 3, 4, 5];
console.log(n);

const pessoa = {
    nome: 'nome',
    idade: 3
}
const pessoaTelefone = {
    ...pessoa,
    telefone: 12
}
console.log(pessoaTelefone);

const {idade} = pessoa;
console.log(idade);

function imprimir({nome, idade}) {
    console.log(nome, idade);
}

imprimir(pessoa);