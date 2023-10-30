/*******************************************************************************************************************/
//	Variáveis
//	1) O Nome Mágico: Crie uma variável chamada 'nome' e atribua seu próprio nome a ela. Em seguida, use console.log para imprimir "Olá, [seu nome]!".
const nome = 'Bruno Moraes';
console.log(nome);
//	2) Aposta Aleatória: Declare uma variável chamada aposta e atribua a ela um número aleatório entre 1 e 10. 
//     Use Math.random() para gerar o número e Math.floor() para arredondá-lo.
let aposta = Math.floor(Math.random() * 10) + 1;
console.log(aposta);
//	3) Celsius para Fahrenheit: Declare uma variável temperaturaCelsius com um valor em graus Celsius (por exemplo, 25). 
//     Crie uma variável temperaturaFahrenheit que armazena a mesma temperatura em Fahrenheit e use a fórmula: °F = (°C * 9/5) + 32.
let temperaturaCelsius = 25;
let temperaturaFahrenheit = (temperaturaCelsius * (9/5)) + 32; 
console.log(`${temperaturaFahrenheit}°`); // Saída: 77°
/*******************************************************************************************************************/
//	Condicionais
//	1) Maior de Idade: Peça ao usuário que insira sua idade. Use uma instrução if para verificar se a pessoa é maior de 18 anos e, se for, exiba "Você é maior de idade!".
//	2) Número Par ou Ímpar: Peça ao usuário que insira um número. Use uma instrução if para verificar se o número é par ou ímpar e exiba uma mensagem correspondente.
//	3) Votação: Peça ao usuário que insira sua idade e se é cidadão (true ou false). Use condicionais para verificar se a pessoa pode votar ou não. Se for maior de 18 anos e cidadão, exiba "Você pode votar!".
/*******************************************************************************************************************/
//	Loops
//	1) Contagem Regressiva: Crie um loop for que conte de 10 até 0 e imprima cada número no console, criando uma contagem regressiva.
//	2) Tabuada: Peça ao usuário que insira um número e crie um loop for para exibir a tabuada desse número de 1 a 10.
//	3) Números Pares: Use um loop for para imprimir todos os números pares de 1 a 20.
/*******************************************************************************************************************/
//	Funções
//	1) Calculadora Simples: Crie uma função chamada calculadora que recebe dois números e uma operação (por exemplo, '+', '-', '*', '/'). A função deve retornar o resultado da operação.
//	2) Cumprimente Alguém: Crie uma função chamada cumprimentar que recebe o nome de alguém como parâmetro e retorna uma saudação personalizada, como "Olá, [nome]!".
//	3) Calculadora de Idade: Crie uma função chamada calcularIdade que recebe o ano de nascimento de uma pessoa como parâmetro e retorna a idade.
/*******************************************************************************************************************/
//	Objetos
//	1) Informações Pessoais: Crie um objeto chamado pessoa com propriedades como nome, idade e cidade. Em seguida, acesse e imprima essas propriedades no console.
//	2) Música Favorita: Crie um objeto chamado musica com propriedades como título, artista e gênero. Imprima essas informações no console em uma frase agradável.
//	3) Carro Personalizado: Crie um objeto chamado carro com propriedades como marca, modelo e ano. Em seguida, crie uma função que recebe esse objeto como parâmetro e retorna uma frase que descreve o carro.
/*******************************************************************************************************************/
//	Classes
//	1) Criar uma Classe de Animal: Crie uma classe chamada Animal com uma propriedade nome. Em seguida, crie um objeto da classe Animal com um nome e imprima o nome no console.
//	2) Criar uma Classe de Calculadora: Crie uma classe chamada Calculadora com métodos para somar e subtrair números. Em seguida, crie uma instância da classe Calculadora, faça algumas operações e imprima os resultados.
//	3) Criar uma Classe de Livro: Crie uma classe chamada Livro com propriedades como título e autor. Em seguida, crie um objeto da classe Livro com um título e autor, e imprima essas informações no console.
/*******************************************************************************************************************/
