// Coletando informações com prompt() e confirm()
let nome = prompt("Digite seu nome completo:");
let idade = Number(prompt("Digite sua idade:"));
let cidade = prompt("Digite a cidade onde você mora:");
let hobby = prompt("Qual é o seu hobby favorito?");
let temCnh = confirm("Você possui CNH?");
let numFilhos = Number(prompt("Quantos filhos você tem?"));
let cargo = prompt("Qual é seu cargo atual?");
let salario = Number(prompt("Qual é o seu salário atual?"));
let recebeComissao = confirm("Você recebe comissão?");
let anoAdmissao = Number(prompt("Em que ano você foi admitido na empresa?"));

// Exibindo relatório no console
console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
console.log(`Meu hobby favorito é ${hobby}.`);
console.log(`Tenho CNH? ${temCnh}`);
console.log(`Número de filhos: ${numFilhos}`);
console.log(`Atualmente trabalho como ${cargo} e recebo um salário de R$${salario}.`);
console.log(`Recebo comissão? ${recebeComissao}`);
console.log(`Fui admitido na empresa no ano de ${anoAdmissao}.`);

// Mostrando os tipos das variáveis
console.log(`Tipo da variável 'idade': ${typeof idade}`);
console.log(`Tipo da variável 'salario': ${typeof salario}`);
console.log(`Tipo da variável 'temCnh': ${typeof temCnh}`);
console.log(`Tipo da variável 'recebeComissao': ${typeof recebeComissao}`);
console.log(`Tipo da variável 'nome': ${typeof nome}`);
