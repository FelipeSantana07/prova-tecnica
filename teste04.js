/**
* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação 
que cada estado teve dentro do valor total mensal da distribuidora.  
*/

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;

let total = sp + rj + mg + es + outros

console.log(total)

let resSpPorcentagem = (sp / total) * 100
let resRjPorcentagem = (rj / total) * 100;
let resMgPorcentagem = (mg / total) * 100;
let resEsPorcentagem = (es / total) * 100;
let resOutrosPorcentagem = (outros / total) * 100;

console.log(`SP: ${resSpPorcentagem.toFixed(2)}%`);
console.log(`RJ: ${resRjPorcentagem.toFixed(2)}%`);
console.log(`MG: ${resMgPorcentagem.toFixed(2)}%`);
console.log(`ES: ${resEsPorcentagem.toFixed(2)}%`);
console.log(`Outros: ${resOutrosPorcentagem.toFixed(2)}%`);