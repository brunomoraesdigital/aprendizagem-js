# Meu caderno de anotações Javascript
> “JavaScript é como um lápis: é simples começar a usar, mas a gama de coisas que você pode fazer com ele é imensa.” 

## VARIÁVEIS 
`Variável` é um recipiente nomeado para armazenar e representar dados em um programa de computador.
```javascript
var ativo = true; // 
let idade = 30; // 
const nome = 'bruno'; // 

// declarar variáveis sem atribuir um valor inicial
var salario;
// Atribuir um valor posteriormente
salario = 9876.54;
// alterar o valor
ativo = false;

let ano = 1981;
// 'let' é usada para declarar uma variável.
// 'ano' é o nome da variável que estamos declarando.
// '=' é o operador de atribuição que atribui um valor para a variável.
// '1981' é o valor que estamos atribuindo à variável 'ano'.
// ';' sinaliza o fim de uma declaração em JavaScript.  
```
``` var | let | const ```
- **var**: Usada para declarar variáveis. Tem escopo de função e permite hoisting (i.e., a variável pode ser usada antes de ser declarada). Permite reatribuição de valores.
- **let**: Usada para declarar variáveis. Tem escopo de bloco (i.e., a variável só existe dentro do bloco onde foi declarada) e permite hoisting, mas não inicializa a variável (i.e., se você tentar usar a variável antes de declará-la, obterá um erro). Permite reatribuição de valores, mas não redeclaração no mesmo escopo.
- **const**: Usada para declarar constantes. Tem escopo de bloco e permite hoisting, mas não inicializa a constante. Permite atribuição única de valores; o valor não pode ser reatribuído, mas se o valor for um objeto ou array, suas propriedades ou elementos podem ser modificados.

` Declarar | Inicializar | Atribuir `
1. **Declarar:** é a ação de criar uma variável no código.
2. **Inicializar** é a ação de atribuir um valor a uma variável declarada.
3. **atribuir** é a ação de dar um valor a uma variável. Se a variável já tiver um valor, esse valor será substituído.
```javascript
//1. declarar variável (não atribuir valor)
let idade;
/* Declarar: let idade; - Isso declara uma variável chamada idade, mas ainda não a
   inicializa com um valor. Neste ponto, a variável tem um valor indefinido (undefined). */
```
```javascript
//2. inicializar variavel (atribuir um valor)
idade = 30;
// Inicializar: idade = 30; - isso inicializa a variável idade atribuindo o valor 30 a ela.
```
```javascript
//3. declarar e inicializar variáveis
let ano = 1981;
/* Declarar e Inicializar: let ano = 1981; - Este passo combina a declaração e a inicialização
   em uma única linha, criando uma variável chamada ano e atribuindo o valor 1981 a ela. */
```

`Hoisting` é um comportamento em que as declarações de variáveis e funções são movidas para o topo do seu escopo durante a fase de compilação, antes da execução real do código. Isso significa que, em termos simples, você pode usar uma variável ou função antes de declará-la no código.
- **Hoisting de variáveis**: eleva a declaração da variavel para o topo do escopo. É importante notar que apenas a declaração é elevada, não a inicialização (o valor).
```javascript
console.log(x); // Retorna 'undefined'
var x = 10; // declaração: var x | inicialização x = 10;
console.log(x); // Retorna 10
/* na linha '1' a variável x é utilizada antes de ter sido declarada, nesse
   sentido a variável x que foi declarada na linha '2' é elevada (hoisting)
   para o topo do escopo, no entanto o seu valor (inicializado) não é elevado
   junto, por isso que a saída é 'undefined' ao invés de '10'. */

   // var x; (hoisting)
   console.log(x); // Retorna 'undefined'
   var x = 10;
   console.log(x); // Retorna 10
/* No exemplo acima, a declaração da variável x é elevada para o topo do escopo,
   mas seu valor é definido apenas quando atingimos a linha de atribuição.
```
- **Hoisting de funções** eleva a declaração completa da função (nome e corpo) para o topo do escopo
```javascript
// hoisting
// digaOla(); // Funciona e exibe 'Hello'
// function digaOla() {
//  console.log('Hello');
// }*/

digaOla(); // Funciona e exibe 'Hello'
function digaOla() {
    console.log('Hello');
}

/* Neste caso, a função digaOla é elevada para o topo do escopo e pode ser
   chamada antes da sua declaração. */
```
- Mais um exemplo de comportamento de Hoisting:
```javascript
/* HOISTING */
testeVariavel (); // Saída: TypeError: testeVariavel is not a function
testeFuncao ();   // Saída: função ok

var testeVariavel = function () {
    console.log('variável ok');
}
function testeFuncao () {
    console.log('função ok');
}

TypeError: testeVariavel is not a function
    at Object.<anonymous> (C:\Users\brndr\OneDrive\Documentos\GitHub\Nova pasta\main.js:2:1)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:86:12)
    at node:internal/main/run_main_module:23:47
Node.js v18.18.0
PS C:\Users\brndr\OneDrive\Documentos\GitHub\Nova pasta>
```
## **ESCOPO**
`Escopo` é o contexto que determina a visibilidade e acessibilidade de variáveis e funções em um programa
- **Escopo global**: Refere-se a quando uma variável é acessível em todo o programa. Isso ocorre quando você declara uma variável fora de qualquer função ou bloco usando var, let ou const.
- **Escopo local**: Refere-se a quando uma variável é acessível apenas dentro de uma determinada área do código. Isso pode ser uma função (**escopo de função**) ou um bloco (**escopo de bloco**), dependendo de como a variável é declarada. Aqui estão as definições específicas:
  - **Escopo de função**: (usando var) A variável declarada com var é visível apenas dentro da função onde foi declarada. No entanto, se a mesma variável fosse declarada com var dentro de um bloco (como um loop for, if, etc), mas fora de qualquer função, ela será de escopo global. Isso ocorre porque var não respeita o escopo de bloco, apenas o escopo de função e global.
  - **Escopo de bloco**: (usando let ou const) A variável é visível apenas dentro do bloco onde foi declarada. Se declarada fora de qualquer bloco, ela será de escopo global.
    
## CONDICIONAL
`Estruturas condicionais` permitem a tomada de decisões e realização de ações de acordo com diferentes entradas.
```javascript
if (condicao) {
  // faça isso
} else {
  // faça isso
}
```
` if | esle if | if `
- **if**: Se a condição for atendida faça algo
```javascript
let idade = 18;
 if (idade >= 18) {
     console.log("Você é maior de idade.");
 }

let valorA = 3>2; // é verdadeiro que 3 é maior que 2, então valorA recebe true
 if (valorA) { 
    console.log(valorA); // Saída: true
 }

 let valorB = 3==2; // é falso que 3 é igual a 2, então valorB recebe false
 if (valorB) { 
    console.log(valorB); // Saída: não há saída
 }
```
- **else if**: Se a primeira condição 'if' for falsa, as próximas condições serão verificadas. Assim que uma condição for atendida, o bloco de código associado a ela será executado.
```javascript
let nota = 85;
if (nota >= 90) {
    console.log("Sua nota é A.");
} else if (nota >= 80) {
    console.log("Sua nota é B.");
} else if (nota >= 70) {
    console.log("Sua nota é C.");
} else if (nota >= 60) {
    console.log("Sua nota é D.");
} else if (nota < 60) {
    console.log("Sua nota é F.");
}
```
- **else**: Se todas as condições if e else if forem falsas, o bloco de código associado ao else será executado. Isso significa que o else captura todos os casos que não foram atendidos pelas condições anteriores. Veja o exemplo abaixo:
```javascript
let nota = 55;
if (nota >= 60) {
    console.log("Você passou.");
} else {
    console.log("Você não passou.");
}

let temperatura = 30;
if (temperatura > 35) {
    console.log("Está muito quente hoje.");
} else if (temperatura > 25) {
    console.log("Está quente, mas tolerável.");
} else {
    console.log("A temperatura está agradável hoje.");
}
```
## REPTIÇÃO
`estruturas de repetição` também conhecidas como laços (loops), são usadas quando há a necessidade de repetir um bloco de código diversas vezes. 

` for | while | do-while `
- **for**: é uma estrutura de repetição que permite executar um bloco de código um número específico de vezes. 
```javascript
for (let i = 0; i < 5; i++) {
  // Código a ser repetido aqui
}
```
- **while**: O bloco de código é repetido enquanto uma condição específica for verdadeira, sendo a condição verificada antes de cada iteração.
```javascript
while (condição) {
  // Código a ser repetido aqui
}
```
- **do-while**: Garante que o bloco de código seja executado pelo menos uma vez, já que a condição é verificada após a execução do bloco.
```javascript
do {
  // Código a ser repetido aqui
} while (condição);

```
## Outras formas de iteração em JavaScript
> **iteração** - ato de repetir uma função por um determinado período de tempo até que uma condição seja atendida.

- Existem outras formas de iteração que são menos comuns, mas ainda assim são parte do JavaScript:
- 
`For-In | For-Of `
- **for-in**: é usado para iterar sobre as propriedades enumeráveis de um objeto.
```javascript
for (let prop in objeto) {
  // Código a ser repetido aqui
}
```
- **for-of**: é utilizado para percorrer elementos de arrays, strings e outros objetos iteráveis de forma simples.
```javascript
for (const elemento of array) {
  // Código a ser repetido aqui
}
```
## Métodos de iteração de arrays
-Além dos loops e métodos mencionados acima, JavaScript oferece uma série de métodos de iteração convenientes para trabalhar com arrays:
` forEach() | map() | filter() | reduce() | some() | every() `
- **forEach()**: permite executar uma função em cada elemento de um array sem a necessidade de escrever um loop explícito.
```javascript
array.forEach(function(elemento) {
  // Código a ser repetido aqui
});
```
- **map()**: cria um novo array com os resultados de aplicar uma função a cada elemento do array original.
```javascript
const novoArray = array.map(function(elemento) {
  // Código a ser aplicado a cada elemento
  return novoElemento;
});
```
- **filter()**: cria um novo array contendo apenas os elementos que atendem a uma condição especificada em uma função.
```javascript
const novoArray = array.filter(function(elemento) {
  // Condição para inclusão no novo array
  return verdadeiro ou falso;
});
```
- **reduce()**:  reduz os elementos do array a um único valor usando uma função acumuladora.
```javascript
const resultado = array.reduce(function(acumulador, elemento) {
  // Código para acumular os elementos
  return novoValorAcumulado;
}, valorInicial);
```
- **same()**: verifica se pelo menos um elemento do array atende a uma condição especificada em uma função.
```javascript
const algumElementoAtende = array.some(function(elemento) {
  // Condição a ser verificada
  return verdadeiro ou falso;
});
```
- **every()**: verifica se todos os elementos do array atendem a uma condição especificada em uma função.
```javascript
const todosElementosAtendem = array.every(function(elemento) {
  // Condição a ser verificada
  return verdadeiro ou falso;
});
```
## Métodos de busca
- Além das operações acima, JavaScript oferece métodos para buscar elementos em um array:

` find() | findIndex() `
- **find()**: retorna o primeiro elemento de um array que satisfaça uma condição especificada em uma função.
```javascript
const elementoEncontrado = array.find(function(elemento) {
  // Condição a ser verificada
  return verdadeiro ou falso;
});
```
- **findIndex()**: retorna o índice do primeiro elemento de um array que satisfaça uma condição especificada em uma função.
```javascript
const indiceElementoEncontrado = array.findIndex(function(elemento) {
  // Condição a ser verificada
  return verdadeiro ou falso;
});
```

## FUNÇÃO
`função` é um bloco de código reutilizável que realiza tarefas específicas quando chamado
```javascript
/* FUNÇÃO */ // função nomeada que não aceita argumentos
function dadosUm () {
    const nome = 'bruno';
    let idade = '30'
    //console.log("seu nome é " + nome + " e sua idade é " + idade);
    console.log(`1) Seu nome é ${nome} e sua idade é ${idade}`);
}
dadosUm(); // Saída: 1) Seu nome é bruno e sua idade é 30
/*********************************************************************************/
/* FUNÇÃO */ // função nomeada que aceita argumentos
function dadosDois (nome, idade) {
    //console.log("seu nome é " + nome + " e sua idade é " + idade);
    console.log(`2) Seu nome é ${nome} e sua idade é ${idade}`);
}
dadosDois("bruno", 30); // Saída: 2) Seu nome é bruno e sua idade é 30
/*********************************************************************************/
/* FUNÇÃO */ //  função anônima imediatamente invocada (IIFE)
(function () {
    const nome = 'bruno';
    let idade = '30'
    //console.log("seu nome é " + nome + " e sua idade é " + idade);
    console.log(`3) Seu nome é ${nome} e sua idade é ${idade}`);
})(); // Saída: 3) Seu nome é bruno e sua idade é 30
/*********************************************************************************/
//  função anônima imediatamente invocada (IIFE) que aceita argumentos
(function (nome, idade) {
    //console.log("seu nome é " + nome + " e sua idade é " + idade);
    console.log(`4) Seu nome é ${nome} e sua idade é ${idade}`);
})('bruno', 30); // Saída: 4) Seu nome é bruno e sua idade é 30
```
> **IIFE** significa "Immediately Invoked Function Expression," que pode ser traduzido como "Expressão de Função Invocada Imediatamente"
` Parametros | Argumentos `
- **Parâmetros** são variáveis definidas na declaração de uma função em JavaScript
- **Argumentos** são os valores reais passados para esses parâmetros quando a função é chamada.
```javascript
/* FUNÇÃO */ // Declaração de uma função chamada "soma" com dois parâmetros
function soma(a, b) { // "a" e "b" são os parâmetros
    let resultado = a + b;
    return resultado;
}

// Chamando a função "soma" com argumentos
let valor1 = 5; // "valor1" é um argumento
let valor2 = 3; // "valor2" é outro argumento
let resultadoSoma = soma(valor1, valor2);

console.log(`A soma de ${valor1} e ${valor2} é ${resultadoSoma}`); // A soma de 5 e 3 é 8

// "soma" é o nome da função.
// "a" e "b" são os parâmetros da função.
// "valor1" e "valor2" são os argumentos que são passados para a função quando ela é chamada.
```
## OBJETO
`Objeto` é uma coleção de atributos (ou propriedades) e métodos. Os atributos são variáveis que contêm valores que descrevem as características do objeto. Os métodos são funções associadas ao objeto que definem comportamentos ou ações que o objeto pode realizar.
De forma resumida, objeto é uma coleção dinamica de chave-valor.
```javascript
/* OBJETO */
var pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Engenheiro"
  };
console.log(`A pessoa ${pessoa.nome} tem ${pessoa.idade} anos, mora em ${pessoa.cidade} e trabalha como ${pessoa.profissao}.`); // Saída: A pessoa João tem 30 anos, mora em São Paulo e trabalha como Engenheiro. 
```
- Mais sobre objetos
```javascript
const personagem = {
    nome: "Bruno",
    "apelido": "agreffoz",
    idade: 30,
    'fala portugues': true
}
console.log(personagem);
/* Saída:
  {
   nome: 'Bruno',        
   apelido: 'agreffoz',  
   idade: 30,
   'fala portugues': true
  }
*/

personagem.sexo = 'masculino';
console.log(personagem);
/* Saída:
  {
   nome: 'Bruno',        
   apelido: 'agreffoz',  
   idade: 30,
   'fala portugues': true,
   sexo: ‘masculino’ 
  }
*/

console.log(personagem.nome) // Saída: Bruno
console.log(personagem['nome']); // Saída: Bruno

personagem['nome'] = "bruno moraes";
personagem.apelido = "fulano";
console.log(personagem);
/* Saída:
  {
   nome: 'bruno moraes',
   apelido: 'fulano',
   idade: 30,
   'fala portugues': true,
   sexo: ‘masculino’
  }
*/

console.log(personagem["fala portugues"]); // Saída: true
```
` Atributos | Metódos `
- **Atributos** representam as propriedades que contém as informações específicas relacionadas ao objeto.
```javascript
/* OBJETO */
  var carro = {
    /* ATRIBUTOS */ // Atributos (nome:valor)
    marca: "Toyota", // nome:valor
    modelo: "Corolla", // nome:valor
    ano: 2020, // nome:valor
    cor: "Prata", // nome:valor
    preco: 25000 // nome:valor
  };
console.log(`O carro ${carro.marca} ${carro.modelo} cor ${carro.cor}, ano ${carro.ano}, custa ${carro.preco}.`); // Saída: O carro Toyota Corolla cor Prata, ano 2020, custa 25000.
```
- **métodos** são funções associadas a objetos e são usados para realizar tarefas ou operações específicas relacionadas ao objeto.
```javascript
  /* OBJETOS */
var funcionario = {
    /* ATRIBUTOS */
    nome: "João",
    idade: 30,
    sexo: "masculino",
    carreira: "engenharia",
};
var estudante = {
    /* ATRIBUTOS */
    nome: "Maria",
    idade: 16,
    sexo: "feminino",
    carreira: "administração",
};
/* MÉTODO */
function informacao() {
    console.log(`${this.nome} ${this.idade} ${this.sexo} ${this.carreira}`);
}
funcionario.informacao = informacao;
estudante.informacao = informacao;

funcionario.informacao(); // João 30 masculino engenharia
estudante.informacao(); // Maria 16 feminino administração

console.log('-------------------------------------------');

/* OBJETO */
var empregado = {
    /* ATRIBUTOS */
    nome: "bruno",
    idade: 28,
    sexo: "masculino",
    carreira: "ADS",
};
var aluno = {
    /* ATRIBUTOS */
    nome: "darlen",
    idade: 19,
    sexo: "feminino",
    carreira: "pedagogia",
};
/* MÉTODO */
function referencia() {
    return `${this.nome} ${this.idade} ${this.sexo} ${this.carreira}`;
}
empregado.referencia = referencia;
aluno.referencia = referencia;

console.log(empregado.referencia()); // bruno 28 masculino ADS
console.log(aluno.referencia()); // darlen 19 feminino pedagogia
```
## CLASSES
` Classes | Instâncias | Construtor `
- **classes** são usadas para criar múltiplas instâncias (objetos) que compartilham as mesmas características e ações.
- **instância** é um objeto específico criado a partir de uma classe. Ela herda as propriedades e comportamentos definidos pela classe, mas possui valores específicos para suas propriedades.
```javascript
/* CLASSE */
class Pessoa { // Lembrete: Por convenção, os nomes das classes iniciam com letra maiuscula
    nome;
    idade;
    descrever() {
        console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        // 'this' se refere ao contexto atual e é usado para acessar as propriedades e métodos dos objetos no contexto de execução.
    }
}
/* INST NCIA */
const bruno = new Pessoa(); //  Instância da classe "Pessoa".
const darlen = new Pessoa(); // Instância da classe "pessoa"

bruno.nome = "Bruno Moraes"; // Definição da propriedade nome do objeto bruno.
bruno.idade = 30; // Definição da propriedade idade do objeto bruno.
darlen.nome = "Darlen Pessoa"; // Definição da propriedade idade do objeto bruno.
darlen.idade = 20; // Definição da propriedade idade do objeto darlen.

bruno.descrever(); // Chamada do método descrever no objeto bruno.
darlen.descrever(); // Chamada do método descrever no objeto darlen.
```
- **Construtor** tem como propósito principal inicializar o objeto, configurando suas propriedades e valores iniciais, se necessário.
```javascript
/* CLASSE */
class Pessoa {
    /* CONSTRUTOR */
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

/* INST NCIA */
const bruno = new Pessoa("Bruno Moraes", 30);
// Cria a instância da classe Pessoa usando o construtor

console.log(bruno.nome); // Saída: "Bruno Moraes"
console.log(bruno.idade); // Saída: 30
```

## Tipos de dados 
`boolean:` Representa um valor verdadeiro (true) ou falso (false).
```javascript
var isTrue = true;
var isFalse = false;
```
`null:` É um valor especial que representa a ausência intencional de qualquer valor ou objeto.
```javascript
var myVar = null;
```
`undefined:` Representa uma variável que foi declarada, mas não foi atribuída a um valor. Também é o valor padrão retornado por uma função quando nenhum valor é explicitamente retornado.
```javascript
var x;
var y = undefined;
```
`number:` Representa valores numéricos, tanto inteiros como de ponto flutuante.
```javascript
var age = 30;
var price = 19.99;
```
`string`: Representa sequências de caracteres, como texto.
```javascript
var name = "João";
var message = 'Olá, mundo!';
```
`symbol:` É um tipo de dado usado para criar valores únicos que podem ser usados como chaves de propriedade de objetos. Símbolos são úteis em cenários onde você deseja evitar colisões de nomes de propriedades.
```javascript
var uniqueSymbol = Symbol("descrição opcional");
```
`NaN` (Not-a-Number): Representa um valor especial que é retornado quando ocorrem operações matemáticas inválidas, como a divisão de zero por zero.
```javascript
var result = 10 / "texto";
```
## CONVENÇÃO DE NOMENCLATURA


orientação a protótipo







