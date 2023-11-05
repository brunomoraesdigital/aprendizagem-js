# Exercícios JavaScript

Neste projeto, você encontrará exercícios para praticar JavaScript. Cada exercício inclui uma descrição e uma solução em JavaScript.

## Lista

### Exercício 001 - Calculando e armazenando lista simples de Números

**Descrição:** Declare duas variáveis, numeroUm e numeroDois, e atribua a elas dois números. Em seguida, crie uma variável chamada resultado e calcule a soma, subtração, multiplicação e divisão dos dois números e armazene o resultado em resultado.

**Solução:**
```javascript
// Declara duas variáveis, numeroUm e numeroDois, e atribua a elas dois números.
let numeroUm = 81;
let numeroDois = 94;

// Cria uma variável chamada resultado e calcule a soma, subtração, multiplicação e divisão dos dois números.
let soma = numeroUm + numeroDois;
let subtracao = numeroUm - numeroDois;
let multiplicacao = numeroUm * numeroDois;
let divisao = numeroUm / numeroDois;

// Armazena o resultado em um objeto chamado "resultado" e em um array chamado "solucao".
const RESULTADO = { soma, subtracao, multiplicacao, divisao };  // Objeto
const SOLUCAO = [soma, subtracao, multiplicacao, divisao];      // Array

// Exibe o resultado da soma de numeroUm e numeroDois de duas maneiras diferentes.
console.log("Resultado da soma (usando objeto): " + RESULTADO.soma); // Saída: Resultado da soma (usando objeto): 175
console.log("Resultado da soma (usando array): " + SOLUCAO[0]); // Saída: Resultado da soma (usando array): 175

// Exibe o conteúdo do objeto "resultado" e do array "solucao" no console.
console.log(RESULTADO); // Saída: Exibe o conteúdo do objeto "resultado" no console.
console.log(SOLUCAO); // Saída: Exibe o conteúdo do o array "solucao" no console.
```
### Exercício xxx - Calculo simples de Média de Notas 

**Descrição:** Declare quatro variáveis com notas de um aluno e calcule a média das notas. Imprima o resultado.

**Solução:**
```javascript
// Declara quatro variáveis com as notas do aluno
let notaUm = 7.5;
let notaDois = 8.0;
let notaTres = 6.5;
let notaQuatro = 9.0;

// Calcula a média das notas
const MEDIA = (notaUm + notaDois + notaTres + notaQuatro) / 4;

// Imprime as notas fixando duas casas decimais após o ponto decimal
console.log("Nota 1: " + notaUm.toFixed(2)); // Saída: Nota 1: 7.50
console.log("Nota 2: " + notaDois.toFixed(2)); // Saída: Nota 2: 8.00
console.log("Nota 3: " + notaTres.toFixed(2)); // Saída: Nota 3: 6.50
console.log("Nota 4: " + notaQuatro.toFixed(2)); // Saída: Nota 4: 9.00

// Imprime a média das notas fixando duas casas decimais após o ponto decimal
console.log("A média das notas é: " + MEDIA.toFixed(2)); // Saída: A média das notas é: 7.75
```
### Exercício xxx - Cálculo simples de Área

**Descrição:** Declare duas variáveis representando a base e a altura de um retângulo. Calcule a área do retângulo e imprima o resultado.

**Solução:**
```javascript
// Declare as variáveis representando a base e a altura do retângulo
let base = 10;
let altura = 5;

// Calcule a área do retângulo
const AREA = base * altura;

// Imprima o resultado
console.log("A área do retângulo é: " + AREA); // Saída: A área do retangulo é 50
```
### Exercício xxx - Cálculo simples de juros simples

**Descrição:** Declare uma variável para o valor principal, outra para a taxa de juros e uma terceira para o tempo. Calcule o juro simples e imprima o resultado.

**Solução:**
```javascript
// Declara o valor principal, a taxa de juros e o tempo
let valorPrincipal = 57.59; // R$ 57,00
let taxaJuros = 7; // 7%
let tempo = 2; // 2 meses

// Calcule o montante de juros
const JUROS = valorPrincipal * (taxaJuros/100) * tempo; // J = P * i * t (J montante | P principal | i taxa de juros | t tempo)

// Calcule o montante total
const MONTANTETOTAL = valorPrincipal + JUROS;

// Saída das informações iniciais
console.log('Valor Inicial: R$ ' + valorPrincipal.toFixed(2)); // Saída: Valor Inicial: R$ 57.59
console.log('Taxa de Juros: ' + taxaJuros+'%'); // Saída: Taxa de Juros: 7%
console.log('Período: ' + tempo + ' meses'); // Saída: Período: 2 meses
console.log('----------------------------------------------------------'); // Saída: Linha divisória
// Saída dos detalhes do cálculo
console.log('O montante de juros é de R$ ' + JUROS.toFixed(2)); // Saída: O montante de juros é de R$ 8.05
console.log(`O montante total é de R$ ${ valorPrincipal.toFixed(2) } + R$ ${ JUROS.toFixed(2) } = R$ ${ MONTANTETOTAL.toFixed(2) }`); // Saída: O montante total é de R$ 57.59 + R$ 8.05 = R$ 65.64

```
### Exercício xxx - Conversão simples de Unidades

**Descrição:** Crie um programa que declare uma variável com uma medida em polegadas e converta-a para centímetros. Imprima o resultado.

**Solução:**
```javascript
// Aqui declaramos o valor da constante POLEGADAS, que é o fator de conversão.
const POLEGADAS = 2.54; // 1 polegada é aproximadamente igual a 2,54 centímetros.

// Aqui declaramos a medida em centímetros que desejamos converter.
let centimetros = 170; // 170 centímetros

// Aqui fazemos a conversão multiplicando os centímetros pelo fator de conversão.
let CONVERSAO = POLEGADAS * centimetros;

// Aqui imprimimos o resultado da CONVERSAO.
console.log('Conversão: ' + centimetros + ' centímetros equivalem a ' + CONVERSAO + ' polegadas'); // Saída: Conversão: 170 centímetros equivalem a 431.8 polegadas

```
### Exercício xxx - Conversão simples de Temperatura

**Descrição:** Declare uma variável com uma temperatura em graus Celsius e converta-a para graus Fahrenheit. Imprima o resultado.

**Solução:**
```javascript
// Aqui declaramos a temperatura em graus Celsius que desejamos converter.
let temperaturaCelsius = 28; // 28°C

// Aqui declaramos a constante TEMPERATURA_FAHRENHEIT que armazena o resultado da conversão.
const TEMPERATURA_FAHRENHEIT = (temperaturaCelsius * 9/5) + 32; // °F = (°C × 9/5) + 32

// Aqui imprimimos o resultado da conversão de Celsius para Fahrenheit.
console.log('Conversão: ' + temperaturaCelsius + '° Graus Celsius equivalem a ' + TEMPERATURA_FAHRENHEIT + '° Graus Fahrenheit'); // Saída: Conversão: 28° Graus Celsius equivalem a 82.4° Graus Fahrenheit
```
### Exercício XXX - Lista simples de Números Naturais e Inteiros

**Descrição:** Crie um programa que imprima os números naturais de 1 a 10, em seguida, os os números inteiros de -5 a 5.

**Solução:**
```javascript
// Aqui, criamos um loop para três linhas (0, 1 e 2).
for (let linha = 0; linha <= 2; linha++) {
    if (linha == 0) {
        // Aqui, imprimimos a string "Naturais: ".
        process.stdout.write('Naturais: ');
        for (let i = 1; i <= 10; i++) {
            // Aqui, imprimimos números naturais de 1 a 10 separados por espaço.
            process.stdout.write(i + ' '); // Saída: Naturais: 1 2 3 4 5 6 7 8 9 10
        }
    } else if (linha == 2) {
        // Aqui, imprimimos a string "Inteiros: ".
        process.stdout.write('Inteiros: ');
        for (let i = -5; i < 6; i++) {
            // Aqui, imprimimos números inteiros de -5 a 5 separados por espaço.
            process.stdout.write(i + ' '); // Saída: Inteiros: -5 -4 -3 -2 -1 0 1 2 3 4 5 
        }
    } else {
        // Aqui, usamos console.log() para inserir uma quebra de linha.
        console.log(' '); // Saída: Quebra de linha
    }
}
```
### Exercício XXX - Lista simples de Números Positivos e Negativos

**Descrição:** Crie um programa que imprima os números positivos de 1 a 10 e, em seguida, os números negativos de -1 a -10.

**Solução:**
```javascript
// Aqui, criamos um loop para três linhas (0, 1 e 2).
for (let linha = 0; linha <= 2; linha++) {
    if (linha == 0) {
        // Aqui, imprimimos a string "Positivos: ".
        process.stdout.write('Positivos: ');
        for (let i = 1; i <= 10; i++) {
            // Aqui, imprimimos números positivos de 1 a 10 separados por espaço.
            process.stdout.write(i + ' '); // Saída: Positivos: 1 2 3 4 5 6 7 8 9 10
        }
    } else if (linha == 2) {
        // Aqui, imprimimos a string "Negativos: ".
        process.stdout.write('Negativos: ');
        for (let i = -1; i >= -10; i--) {
            // Aqui, imprimimos números negativos de -1 a -10 separados por espaço.
            process.stdout.write(i + ' '); // Saída: Negativos: -1 -2 -3 -4 -5 -6 -7 -8 -9 -10
        }
    } else {
        // Aqui, usamos process.stdout.write('\n') para inserir uma quebra de linha.
        process.stdout.write('\n'); // Saída: Quebra de linha
    }
}

```
### Exercício xxx - lista simples de Números Pares e Ímpares

**Descrição:** Crie um programa que imprima os números pares de 1 a 10 e, em seguida, os números ímpares de 1 a 10.

**Solução:**
```javascript
// Aqui, criamos um loop para três linhas (0, 1 e 2).
for (let linha = 0; linha <= 2; linha++) {
    if (linha == 0) {
        // Aqui, imprimimos a string "Pares: ".
        process.stdout.write('Pares: ');
        for (let i = 2; i <= 10; i += 2) {
            // Aqui, imprimimos números pares de 2 a 10, pulando de 2 em 2, separados por espaço.
            process.stdout.write(i + ' '); // Saída: Pares: 2 4 6 8 10  
        }
    } else if (linha == 2) {
        // Aqui, imprimimos a string "Ímpares: ".
        process.stdout.write('Ímpares: ');
        for (let i = 1; i <= 10; i += 2) {
            // Aqui, imprimimos números ímpares de 1 a 10, pulando de 2 em 2, separados por espaço.
            process.stdout.write(i + ' '); // Saída: Ímpares: 1 3 5 7 9 
        }
    } else {
        // Aqui, usamos process.stdout.write('\n') para inserir uma quebra de linha.
        process.stdout.write('\n'); // Saída: Quebra de linha
    }
}
```
### Exercício xxx - Tabuada simples

**Descrição:** Crie um programa que que a partir de um número imprima a tabuada desse número de 1 a 10.

**Solução:**
```javascript
// Número para o qual você deseja calcular a tabuada.
let fator = 7;

// Loop de 1 a 10 para calcular a tabuada.
for (let i = 1; i <= 10; i++) {
    console.log(`${fator} x ${i} = ${fator * i}`); // Saída: imprime a tabuada do número armazenado em fator
}
```
### Exercício xxx - Lista de Números Primos

**Descrição:** Crie um programa que gere uma lista de números primos dentro de um determinado intervalo especificado.

**Solução:**
```javascript
// antes de começar:
// Um número primo é um número natural maior que 1 que só pode ser dividido por 1 e por ele mesmo, sem deixar resto.
// lista para conferência: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
// • Otimização da verificação da primalidade (sempre bom aprender algo novo!)
// 1) Se 'i' for menor ou igual a 1, ele não é primo.
// 2) Para cada 'j' de 2 até a raiz quadrada de 'i', faça:
//    a. Se 'i' for divisível por 'j', então 'i' não é primo.
// 3) Se nenhum divisor for encontrado durante o passo 2, então 'i' é primo.
// começando:

// Define o início e o fim do intervalo que deseja verificar
let inicioDoIntervalo = 2;
let fimDoIntervalo = 100;

// Loop que verifica números primos no intervalo especificado
for (let i = inicioDoIntervalo; i <= fimDoIntervalo; i++) {
    let primo = true; // Inicialmente, consideramos que 'i' é primo (3) Se nenhum divisor for encontrado durante o passo 2, então 'i' é primo.
    
    if (i > 1) { // 1) Se 'i' for menor ou igual a 1, ele não é primo.
        for (var j = 2; j * j <= i; j++) { // 2) Para cada 'j' de 2 até a raiz quadrada de 'i'.
            if (i % j == 0) { // a. Se 'i' for divisível por 'j', então 'i' não é primo.
                primo = false;
                break; // Se encontrarmos um divisor, não é necessário continuar verificando.
            }
        }
    } else {
        primo = false; // Qualquer número menor ou igual a 1 não é primo.
    }
    
    // Se após as verificações, 'primo' ainda for verdadeiro, então 'i' é um número primo.
    if (primo) {
        process.stdout.write(i + ', '); // Imprimimos o número primo.
    }
}
```
**Debug:**
---
 1. O código começa definindo um intervalo de números que você deseja verificar em busca de primos, de `inicioDoIntervalo` a `fimDoIntervalo`.
 2. Dentro do loop `for`, a variável `primo` é inicializada como verdadeira, presumindo que o número é primo até ser provado o contrário.
 3. O código verifica se o número `i` é maior que 1. Se for menor ou igual a 1, ele não é primo, e `primo` é definido como falso.
 4. Dentro do loop interno, a variável `j` varia de 2 até a raiz quadrada de `i`. Isso é uma otimização, pois não é necessário verificar além desse ponto para determinar se um número é primo.
 5. O loop interno verifica se `i` é divisível por `j` usando a operação de módulo (`%`). Se for divisível, isso significa que `i` tem um divisor além de 1 e ele próprio, portanto, não é primo. Nesse caso, `primo` é definido como falso, e o loop interno é interrompido usando `break`.
 6. Se nenhum divisor for encontrado durante o loop interno, `primo` permanece verdadeiro, o que indica que o número é primo.
 7. Fora do loop interno, verifica-se se `primo` ainda é verdadeiro (ou seja, o número é primo), e, nesse caso, o número primo é impresso usando `process.stdout.write` para imprimir o número primo na mesma linha.
---

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
