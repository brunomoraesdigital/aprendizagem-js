# Exercícios JavaScript

Neste projeto, você encontrará exercícios para praticar JavaScript. Cada exercício inclui uma descrição e uma solução em JavaScript.

## Lista

### Exercício 001 - Calculando e armazenando lista simples de Números

**Descrição:** Declare duas variáveis, numeroUm e numeroDois, e atribua a elas dois números. Em seguida, crie uma variável chamada resultado e calcule a soma, subtração, multiplicação e divisão dos dois números e armazene o resultado em resultado.

**Solução:**
```javascript
let numeroUm = 81;
let numeroDois = 94;

let soma = numeroUm + numeroDois;
let subtracao = numeroUm - numeroDois;
let multiplicacao = numeroUm * numeroDois;
let divisao = numeroUm / numeroDois;

let resultado = {soma, subtracao, multiplicacao, divisao} //objeto
let solucao = [soma, subtracao, multiplicacao, divisao];  //array

console.log(resultado.soma);
console.log(solucao[0]);
```
### Exercício xxx - Calculo simples de Média de Notas 

**Descrição:** Declare quatro variáveis com notas de um aluno e calcule a média das notas. Imprima o resultado.

**Solução:**
```javascript
let notaUm = 5;
let notaDois = 6;
let notaTres = 7;
let notaQuatro = 8;
let media = (notaUm + notaDois + notaTres + notaQuatro)/4;
console.log('resultado: ' + media); // Saída: resultado: 6.5
```
### Exercício xxx - Cálculo simples de Área

**Descrição:** Declare duas variáveis representando a base e a altura de um retângulo. Calcule a área do retângulo e imprima o resultado.

**Solução:**
```javascript
let base = 5;
let altura = 10;
let area = base * altura;
console.log('A áread do retangulo é ' + area); // Saída: A áread do retangulo é  50
```
### Exercício xxx - Cálculo simples de juros simples

**Descrição:** Declare uma variável para o valor principal, outra para a taxa de juros e uma terceira para o tempo. Calcule o juro simples e imprima o resultado.

**Solução:**
```javascript
let valorPrincipal = 57; // R$ 57,00
let taxaJuros = 7; // 7%
let tempo = 2; // 2 meses
let juros = valorPrincipal * (taxaJuros/100) * tempo // J = P * i * t (J montante | P principal | i taxa de juros | t tempo)
console.log(' o montante total é de ' + juros); // o montante total é de 7.98
```
### Exercício xxx - Conversão simples de Unidades

**Descrição:** Crie um programa que declare uma variável com uma medida em polegadas e converta-a para centímetros. Imprima o resultado.

**Solução:**
```javascript
const POLEGADAS = 2.54; // 1 polegada é aproximadamente igual a 2,54 centímetros.
let centimetros = 170; // 170 centímetros
let conversão = POLEGADAS * centimetros;
console.log(centimetros + ' centimetros equivalem a ' + conversão + ' polegadas'); // Saída: 170 centimetros equivalem a 431.8 polegadas
```
### Exercício xxx - Conversão simples de Temperatura

**Descrição:** Declare uma variável com uma temperatura em graus Celsius e converta-a para graus Fahrenheit. Imprima o resultado.

**Solução:**
```javascript
let temperaturaCelsius = 28; // 28°C
const TEMPERATURA_FAHRENHEIT = (temperaturaCelsius * 9/5) + 32; // °F = (°C × 9/5) + 32
console.log(temperaturaCelsius + '° Graus Celsius equivalem a ' + TEMPERATURA_FAHRENHEIT + '° Graus Fahrenheit'); // 28° Graus Celsius equivalem a 82.4° Graus Fahrenheit
```
### Exercício XXX - Lista simples de Números Naturais e Inteiros

**Descrição:** Crie um programa que imprima os números naturais de 1 a 10, em seguida, os os números inteiros de -5 a 5.

**Solução:**
```javascript
for (let linha = 0; linha <= 2; linha++) {
    if (linha == 0) {
            process.stdout.write('Naturais: ');
            for(let i=1;i<=10;i++) {
                process.stdout.write(i + ' '); // Saída: Naturais: 1 2 3 4 5 6 7 8 9 10
            }
    } else if (linha == 2) {
        process.stdout.write('Inteiros: ');
            for(let i=-5;i<6;i++) {
                process.stdout.write(i + ' '); // Saída: Inteiros: -5 -4 -3 -2 -1 0 1 2 3 4 5 
            }
    } else {
        //console.log(' '); // Saída: Quebra a linha
        process.stdout.write('\n'); // Saída: Quebra a linha
    }
}
```
### Exercício XXX - Lista simples de Números Positivos e Negativos

**Descrição:** Crie um programa que imprima os números positivos de 1 a 10 e, em seguida, os números negativos de -1 a -10.

**Solução:**
```javascript
for (let linha = 0; linha <= 2; linha++) {
    if (linha == 0) {
            process.stdout.write('Positivos: ');
            for(let i=1;i<=10;i++) {
                process.stdout.write(i + ' '); // Positivos: 1 2 3 4 5 6 7 8 9 10 
            }
    } else if (linha == 2) {
        process.stdout.write('Negativos: ');
            for(let i=-1;i>=-10;i--) {
                process.stdout.write(i + ' '); // Saída: Negativos: -1 -2 -3 -4 -5 -6 -7 -8 -9 -10
            }
    } else {
        //console.log(' '); // Saída: Quebra a linha
        process.stdout.write('\n'); // Saída: Quebra a linha
    }
}
```
### Exercício xxx - lista simples de Números Pares e Ímpares

**Descrição:** Crie um programa que imprima os números pares de 1 a 10 e, em seguida, os números ímpares de 1 a 10.

**Solução:**
```javascript
for (let linha = 0; linha <= 2; linha++) {
    if (linha == 0) {
            process.stdout.write('Pares: ');
            for(let i=2;i<=10;i+=2) {
                process.stdout.write(i + ' '); // Saída: Pares: 2 4 6 8 10  
            }
    } else if (linha == 2) {
        process.stdout.write('Impares: ');
            for(let i=1;i<=10;i+=2) {
                process.stdout.write(i + ' '); // Saída: Impares: 1 3 5 7 9 
            }
    } else {
        //console.log(' '); // Saída: Quebra a linha
        process.stdout.write('\n'); // Saída: Quebra a linha
    }
}
```
### Exercício xxx - Tabuada simples

**Descrição:** Crie um programa que que a partir de um número imprima a tabuada desse número de 1 a 10.

**Solução:**
```javascript
let fator = 7;
for (i=0;i<=10;i++){
    console.log(`${fator} x ${i} = ${fator * i}`);
}
```
### Exercício xxx - Lista de Números Primos

**Descrição:** Crie um programa que gere uma lista de números primos dentro de um determinado intervalo especificado.

**Solução:**
```javascript
// antes de começar:
// Um número primo é um número natural maior que 1 que só pode ser dividido por 1 e por ele mesmo, sem deixar resto.
// lista para conferencia: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
// •Otimização da verificação da primalidade
//   1) Se 'i' for menor ou igual a 1, ele não é primo.
//   2) Para cada 'j' de 2 até a raiz quadrada de 'i', faça:
//      a. Se 'i' for divisível por 'j', então 'i' não é primo.
//   3) Se nenhum divisor for encontrado durante o passo 2, então 'i' é primo.

let inicioDoIntervalo = 2;
let fimDoIntervalo = 100;

for (let i = inicioDoIntervalo; i <= fimDoIntervalo; i++) {
    let primo = true; // 3) Se nenhum divisor for encontrado durante o passo 2, então 'n' é primo.
    if (i > 1) { // 1) Se 'i' for menor ou igual a 1, ele não é primo.
        for (var j = 2; j * j <= i; j++) { // 2) Para cada 'j' de 2 até a raiz quadrada de 'i'
            if (i % j == 0) { // a. Se 'i' for divisível por 'j', então 'i' não é primo.
                primo = false;
                break;
            }
        }
    } else {
        primo = false;
    }
    if (primo) {
        process.stdout.write(i + ', ');
    }
}}```
### Exercício xxx - Múltiplos de um Número

**Descrição:** Declare um número e, em seguida, imprima os múltiplos desse número até um limite também definido pelo usuário.

**Solução:**
```javascript
solução aqui
```
### Exercício xxx - Concatenação de Strings

**Descrição:** Declare duas variáveis de texto (strings) e concatene-as para formar uma única frase. Imprima a frase resultante.

**Solução:**
```javascript
solução aqui
```
### Exercício xxx - Comprimento da String

**Descrição:** Crie um programa que declare uma variável de texto (string) e imprima o comprimento da string.

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - Calculadora de Idade

**Descrição:** Crie um programa que peça ao usuário seu ano de nascimento e, com base nessa entrada, calcule sua idade atual.

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - Conversor de Moeda

**Descrição:** Faça um conversor de moeda que converta uma quantia de uma moeda para outra. O usuário deve fornecer o valor, a moeda de origem e a moeda de destino.

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - Lista de Tarefas (To-Do List)

**Descrição:**  Desenvolva uma lista de tarefas onde o usuário possa adicionar, marcar como concluída e remover tarefas. Use arrays para armazenar as tarefas.

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - Calculadora de IMC (Índice de Massa Corporal)

**Descrição:** Crie um programa que calcule o IMC do usuário com base em sua altura e peso.

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - Sorteio de Números da Loteria

**Descrição:** Desenvolva um programa que gere números aleatórios para um sorteio de loteria, garantindo que os números sejam únicos.

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - 

**Descrição:** 

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - 

**Descrição:** 

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - 

**Descrição:** 

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - 

**Descrição:** 

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - 

**Descrição:** 

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - Jogo de Adivinhação

**Descrição:** Implemente um jogo em que o computador escolhe um número aleatório e o usuário tenta adivinhar qual é esse número. Forneça dicas para indicar se o palpite está muito alto ou muito baixo.

**Solução:**
```javascript
solução aqui
```
### Exercício XXX - Validação de Senha

**Descrição:** Crie um programa que peça ao usuário para inserir uma senha e verifique se ela atende a critérios específicos, como comprimento mínimo e inclusão de números e letras maiúsculas.

**Solução:**
```javascript
solução aqui
```

## Como Contribuir

Sinta-se à vontade para contribuir com exercícios ou soluções para os exercícios ou fazer melhorias neste repositório. Para contribuir, siga estas etapas:
1. Faça um fork deste repositório.
2. Crie um branch para sua solução ou alterações.
3. Envie um pull request.

## Recursos Adicionais


Divirta-se programando em JavaScript!
