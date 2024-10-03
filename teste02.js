/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma 
dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne 
uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua 
preferência ou pode ser previamente definido no código;
*/

const criaSequencia = (max) => {
    let sequenciaFib = [0, 1]
    while (true) {
        let a = sequenciaFib[sequenciaFib.length - 1]
        let b = sequenciaFib[sequenciaFib.length - 2]


        let proximoFib = a + b

        if (proximoFib > max) {
            break;
        }

        sequenciaFib.push(proximoFib);
    }

    return sequenciaFib
}

// definer tamanho maximo do fibonacci
let ValorMax = 1000 

// valor usado para buscar na lista do fibonacci
let valorCheck = 34

// array cdo fibonacci
let sequenciaFib = criaSequencia(ValorMax);

const testaValorFib = () => {
    if (valorCheck > ValorMax) {
        return "Número muito alto"
    }

    if (sequenciaFib.includes(valorCheck)) {
        return "Número pertence a sequência fibonacci"
    }

    return "Número NÃO pertence a sequência fibonacci"
}

console.log(testaValorFib())