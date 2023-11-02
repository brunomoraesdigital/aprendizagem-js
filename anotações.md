# Javascript

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
## **Escopo**
`Escopo` é o contexto que determina a visibilidade e acessibilidade de variáveis e funções em um programa
- **Escopo global**: Refere-se a quando uma variável é acessível em todo o programa. Isso ocorre quando você declara uma variável fora de qualquer função ou bloco usando var, let ou const.
- **Escopo local**: Refere-se a quando uma variável é acessível apenas dentro de uma determinada área do código. Isso pode ser uma função (**escopo de função**) ou um bloco (**escopo de bloco**), dependendo de como a variável é declarada. Aqui estão as definições específicas:
  - **Escopo de função**: (usando var) A variável declarada com var é visível apenas dentro da função onde foi declarada. No entanto, se a mesma variável fosse declarada com var dentro de um bloco (como um loop for, if, etc), mas fora de qualquer função, ela será de escopo global. Isso ocorre porque var não respeita o escopo de bloco, apenas o escopo de função e global.
  - **Escopo de bloco**: (usando let ou const) A variável é visível apenas dentro do bloco onde foi declarada. Se declarada fora de qualquer bloco, ela será de escopo global.
## CONDICIONAL
## REPTIÇÃO
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

convenções de nomenclatura

tiposde dados boolean, null, undefined, number, string, symbol, nan

ver	https://0.30000000000000004.com/
decimal.js

orientação a protótipo







