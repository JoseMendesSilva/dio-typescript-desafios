"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
const employee = { code: 4, name: 'ss' };
employee.code = 10;
employee.name = "John";
console.log('Desafio 1');
console.log('code: ' + employee.code + ', name: ' + employee.name);
// Como podemos melhorar o esse código usando TS? 
var Ocupacao;
(function (Ocupacao) {
    Ocupacao[Ocupacao["Padeiro"] = 0] = "Padeiro";
    Ocupacao[Ocupacao["Atriz"] = 1] = "Atriz";
})(Ocupacao || (Ocupacao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Ocupacao.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Ocupacao.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Ocupacao.Atriz
};
let pessoa4 = {
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
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '0';
function somarAoSaldo(soma) {
    var x = campoSaldo.innerHTML;
    var y = +x;
    campoSaldo.innerHTML = (soma + y).toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
    soma.value = '';
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    var x = soma.value;
    var y = +x;
    somarAoSaldo(y);
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
