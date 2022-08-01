
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

const employee = { code: 4, name: 'ss' };

employee.code = 10;
employee.name = "John";

console.log('Desafio 1');
console.log('code: ' + employee.code + ', name: ' + employee.name);

// Como podemos melhorar o esse código usando TS? 

enum Ocupacao {
    Padeiro,
    Atriz
}

type person = {
    nome: string,
    idade: number,
    profissao: Ocupacao
}

let pessoa1: person = {
    nome: "maria",
    idade: 29,
    profissao: Ocupacao.Atriz
};

let pessoa2: person = {
    nome: "roberto",
    idade: 19,
    profissao: Ocupacao.Padeiro
};

let pessoa3: person = {
    nome: "laura",
    idade: 32,
    profissao: Ocupacao.Atriz
};

let pessoa4: person = {
    nome: "carlos",
    idade: 19,
    profissao: Ocupacao.Padeiro
};

console.log('Desafio 2');
console.log('nome: ' + pessoa4.nome + ', idade: ' + pessoa3.idade + ', profissao: ' + pessoa2.profissao);

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

console.log('Desafio 3');
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;


campoSaldo.innerHTML = '0'

function somarAoSaldo(soma: number) {
    var x = campoSaldo.innerHTML;
    var y: number = +x;
    campoSaldo.innerHTML = (soma + y).toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
    soma.value = '';
}

botaoAtualizar?.addEventListener('click', function () {
    var x = soma.value;
    var y: number = +x;

    somarAoSaldo(y);

});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
