# 📓 Meu caderno de anotações Javascript
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
## PROTÓTIPO

- Em JavaScript, a herança é baseada em protótipos, não em classes como em outras linguagens. Os objetos herdam propriedades e métodos de outros objetos.

`protótipo` refere-se à herança e ao compartilhamento de métodos e propriedades entre objetos. Cada objeto em JavaScript possui um protótipo associado, que é essencialmente uma referência a outro objeto. Quando você tenta acessar um método ou uma propriedade em um objeto e não o encontra, o JavaScript procura no protótipo desse objeto e continua a busca na cadeia de protótipos, indo de objeto para protótipo, até encontrar a propriedade desejada ou chegar à raiz da cadeia de protótipos, que é normalmente 'Object.prototype'.
```javascript
/* PROTOTIPO */
// Criando um objeto 'cadastro' com uma propriedade 'situacao'
const cadastro = {
    situacao: 'ativo'
}
// Criando um objeto 'funcionario' com uma propriedade 'nome' e um protótipo apontando para 'cadastro'
const funcionario = {
    nome: 'Bruno',
    __proto__: cadastro
}
// Exibindo o objeto 'funcionario'
console.log(funcionario); // Saída: { nome: 'Bruno' }
// Acessando a propriedade 'situacao' no objeto 'funcionario' (que é herdada do protótipo)
console.log(funcionario.situacao); // Saída: ativo
```
`__proto__` é uma forma de acessar e manipular o protótipo do objeto diretamente, mas não é a maneira recomendada de fazer isso.
- O uso de __proto__ não é considerado uma prática recomendada e pode causar problemas de compatibilidade em alguns ambientes.

```javascript
/* PROTOTIPO: __proto__ */
const pessoa = {
    genero: 'masculino'
}
const bruno = {
    nome: 'Bruno',
    idade: 30,
    __proto__: pessoa
}
console.log(bruno.genero); // Saída: masculino
```
- Em resumo, `__proto__` é uma propriedade que permite acessar e modificar o protótipo de um objeto individual. No entanto, é preferível usar métodos mais seguros e padronizados, como `Object.setPrototypeOf()` e `Object.getPrototypeOf()`, para manipular protótipos, em vez de utilizar `__proto__.`

`Object.setPrototypeOf(target, prototype)` o método **'Object.setPrototypeOf()'** estabelece uma relação de herança entre o **'target'** e o **'prototype'**, permitindo que o **'target'** herde as propriedades do **'prototype'**.
```javascript
/* PROTOTIPO: Object.setPrototypeOf(target, prototype) */
const pessoa = {
    genero: 'masculino'
}
const bruno = {
    nome: 'Bruno',
    idade: 30,
};
Object.setPrototypeOf(bruno, pessoa);
console.log(bruno.genero); // Saída: masculino
```
- Se houver conflitos de propriedades com os mesmos nomes, as propriedades do **'target'** terão prioridade sobre as do **'prototype'**.
```javascript
const prototype = {
    idade: 30
}
const target = {
    nome: 'Bruno',
    idade: 20
};
Object.setPrototypeOf(target, prototype);
console.log(target.idade); // Isso imprimirá 20, pois a propriedade "idade" do target tem prioridade.
```
`Object.getPrototypeOf()` O método Object.getPrototypeOf(target) retorna o objeto protótipo do objeto especificado target. Ele permite que você acesse o objeto que está sendo herdado pelo target, ou seja, o objeto do qual o target está obtendo suas propriedades e métodos herdados. 
```javascript
/* PROTOTIPO: `Object.getPrototypeOf(target)` */
const pessoa = {
    genero: 'masculino'
}
const bruno = {
    nome: 'Bruno',
    idade: 30,
};
Object.setPrototypeOf(bruno, pessoa);
// Para obter o protótipo do objeto bruno
const prototipoDoBruno = Object.getPrototypeOf(bruno);
console.log(prototipoDoBruno); // Saída: { genero: 'masculino' }
console.log(prototipoDoBruno.genero); // Saída: masculino
```
- Esse método é útil para entender a relação de herança de um objeto e pode ser usada para acessar as propriedades e métodos herdados desse objeto prototype.
```javascript
Object.getPrototypeOf(target) // Retorna o objeto prototype do target, permitindo a inspeção da hierarquia de herança.
```

`Sombreammento em JavaScript` ocorre quando um objeto filho tem uma propriedade com o mesmo nome que uma propriedade em seu objeto protótipo. Nesse caso, a propriedade do objeto filho "sombrea" a propriedade do objeto protótipo, e a propriedade do objeto protótipo não é acessada quando você se refere a ela a partir do objeto filho.

Exemplo: Neste exemplo, o objeto **'funcionario'** tem uma propriedade "genero" que sombreia a propriedade "genero" do objeto protótipo "pessoa". Quando você acessa **'funcionario.genero'**, o valor "masculino" da propriedade do objeto filho é retornado, em vez do valor "n/i" do objeto protótipo. Isso demonstra o conceito de shadowing em JavaScript.
```javascript
/* SOMBREAMENTO (SHADOWING) */
const pessoa = {
    genero: 'n/i'
}
const funcionario = {
    nome: 'Bruno',
    genero: 'masculino', // Esta propriedade "sombrea" a propriedade "genero" do objeto protótipo.
    __proto__: pessoa
}
   console.log(funcionario.genero); // Isso imprimirá 'masculino' no console, porque a propriedade "genero" do objeto filho "funcionario" sombreia a do objeto protótipo "pessoa".
```
`Sobrescrever em JavaScript` ocorre quando é atribuido um novo valor a uma propriedade de um objeto. Isso faz com que a propriedade do objeto filho tenha um valor diferente da propriedade do objeto protótipo.

**Exemplo 1:** Neste exemplo, a propriedade "genero" no objeto **'funcionario'** é sobrescrita com o valor **'feminino'**, substituindo o valor **'masculino'** do objeto pai **'pessoa'**.
```javascript
/* SOBRESCRITA (OVERRIDING) */
const pessoa = {
  genero: 'n/i'
}
const funcionario = {
  nome: 'Darlen',
  genero: 'masculino',
  __proto__: pessoa
}
// Sobrescrevendo a propriedade 'genero' no objeto 'funcionario'
funcionario.genero = 'feminino';
console.log(funcionario.genero); // Saída: feminino
```
**Exemplo 2:** Neste exemplo, a propriedade "genero" no objeto **'funcionario'** é sobrescrita com o valor **'feminino'**, mesmo que o objeto pai **'pessoa'** não tenha essa propriedade.
```javascript
/* SOBRESCRITA (OVERRIDING) */
const pessoa = {
  genero: 'n/i'
}
const funcionario = {
  nome: 'Darlen',
  __proto__: pessoa
}
// Sobrescrevendo a propriedade 'genero' no objeto 'funcionario'
funcionario.genero = 'feminino';
console.log(funcionario.genero); // Saída: feminino
```
**Exemplo 3:** Neste exemplo, a propriedade "genero" no objeto **'funcionario'** não é diretamente sobrescrita, mas a propriedade "genero" no objeto pai **'pessoa'** é modificada para _**'não declarado'**_, e, como o objeto **'funcionario'** herda essa propriedade, a saída é _**'não declarado'**_.
```javascript
/* SOBRESCRITA (OVERRIDING) */
const pessoa = {
  genero: 'n/i'
}
const funcionario = {
  nome: 'Darlen',
  __proto__: pessoa
}
// Sobrescrevendo a propriedade 'genero' no objeto 'funcionario' através do objeto pai 'pessoa'
pessoa.genero = 'não declarado';
console.log(funcionario.genero); // Saída: não declarado
```
`Função Construtora em JavaScript e Herança de Protótipo ` funções construtoras são usadas para criar objetos e estabelecer herança de protótipo. Funções construtoras são identificadas por iniciar com uma letra maiúscula e, quando invocadas com o operador **'new'**, criam novos objetos e definem propriedades e métodos para esses objetos. Além disso, objetos criados por meio de uma função construtora herdam as propriedades e métodos definidos em seu protótipo.
**Exemplo:** Neste exemplo, a função construtora **'Pessoa'** é usada para criar objetos com propriedades **'nome'** e **'idade'**. O método **'falar'** é adicionado ao protótipo da função construtora **'Pessoa'**, tornando-o acessível a todos os objetos criados a partir dela. Quando chamamos **'bruno.falar()'**, estamos acessando o método definido no protótipo da função construtora. Isso ilustra como funções construtoras são usadas para criar objetos com herança de protótipo em JavaScript.
```javascript
/* FUNÇÃO CONSTRUTORA */
// Sempre que uma função inicia com letra maiúscula, ela é uma função construtora (construtor)
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
const bruno = new Pessoa('Bruno', 30);
console.log(bruno);
Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
}
bruno.falar(); // Isso chama o método 'falar' definido no protótipo da função construtora.
```
**Função Construtora e Classe em JavaScript**
---
Em JavaScript, tanto `funções construtoras` quanto `classes` são maneiras de criar *objetos* e definir *métodos* para esses objetos. Ambas são equivalentes em termos de funcionalidade, mas têm sintaxes diferentes.
- Tanto a função construtora quanto a classe podem ser usadas para criar objetos com propriedades e métodos semelhantes. A escolha entre elas geralmente depende da preferência pessoal e do estilo de programação, pois ambas são usadas para alcançar o mesmo objetivo.
```javascript
// BASICAMENTE FUNÇÃO CONSTRUTORA E CLASSE SÃO EQUIVALENTES

/* FUNÇÃO CONSTRUTORA */ 
// Declaração da função construtora Pessoa que cria objetos Pessoa.
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Adição do método 'falar' ao protótipo de Pessoa.
Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`);
}

// Criação de duas instâncias da classe Pessoa.
var pessoa1 = new Pessoa("Alice", 30);
var pessoa2 = new Pessoa("Bob", 25);

// Chamada do método 'falar' nas instâncias pessoa1 e pessoa2.
pessoa1.falar(); // Isso imprimirá "Meu nome é Alice" no console.
pessoa2.falar(); // Isso imprimirá "Meu nome é Bob" no console.

/* CLASSE */
// Aqui declaramos a classe Pessoa.
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

// Aqui criamos duas instâncias da classe Pessoa.
const pessoa1 = new Pessoa("Alice", 30);
const pessoa2 = new Pessoa("Bob", 25);

// Aqui chamamos o método 'falar' nas instâncias pessoa1 e pessoa2.
pessoa1.falar(); // Isso imprimirá "Meu nome é Alice" no console.
pessoa2.falar(); // Isso imprimirá "Meu nome é Bob" no console.
```
**Protótipos criados por meio de Objetos Literais e Object.create() em JavaScript:**
---
Em JavaScript, você pode criar protótipos para objetos usando **"objetos literais"** ou o método **"Object.create()"**. 

`Objeto Literal:` Em JavaScript, você pode criar protótipos para objetos usando objetos literais. Isso envolve a definição direta de propriedades e valores dentro de chaves {}. Usando a propriedade __proto__, você pode estabelecer uma relação de protótipo com outro objeto, permitindo que o objeto resultante herde as propriedades desse objeto.

```javascript
const pessoa = {
    genero: 'masculino'
}
const funcionario = {
    nome: 'Bruno',
    __proto__: pessoa
}
console.log(funcionario); // Saída: { nome: 'Bruno' }
console.log(funcionario.genero); // Saída: masculino
```
`Object.create():` Outra maneira de criar protótipos é por meio do método Object.create(). Isso permite criar um novo objeto com um objeto protótipo especificado. Estabelece uma relação de herança entre o novo objeto e o objeto protótipo, permitindo que o novo objeto herde as propriedades do objeto protótipo.
```javascript
const pessoa = {
    genero: 'masculino'
}
const empregado = Object.create(pessoa);
empregado.nome = 'Bruno';

console.log(empregado); // Saída: { nome: 'Bruno' }
console.log(empregado.genero); // Saída: masculino
```
**Exemplo:** criamos um objeto chamado pessoa que tem algumas propriedades e um método. Em seguida, usamos Object.create(pessoa) para criar um novo objeto chamado novoObjeto, que herda as propriedades e métodos de pessoa. Podemos então modificar as propriedades no novoObjeto sem afetar o objeto pessoa. Quando chamamos o método saudacao() no novoObjeto, ele funciona e exibe as propriedades do novoObjeto.
```javascript
// criar um objeto que servirá como protótipo para outro objeto
const pessoa = {
  nome: 'João',
  idade: 30,
  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

// Criando um novo objeto que herda do objeto 'pessoa'
const novoObjeto = Object.create(pessoa);

// Modificando propriedades no novo objeto
novoObjeto.nome = 'Maria';
novoObjeto.idade = 25;

// Chamando o método do novo objeto
novoObjeto.saudacao(); // Isso imprimirá: "Olá, meu nome é Maria e tenho 25 anos."

```

**Adicionando Funcionalidades aos Objetos criados por uma função construtora através de Protótipos**
---

JavaScript oferece a capacidade de adicionar métodos a objetos criados por uma função construtora através de protótipos. Isso significa que você pode estender objetos com novas funcionalidades, não diretamente no objeto em si, mas em seu protótipo. Essa abordagem permite que todos os objetos criados a partir de um construtor específico compartilhem a mesma implementação do método, economizando recursos e facilitando a manutenção do código. É uma característica poderosa da linguagem que promove a reutilização e a eficiência do código.

Demonstração de como o JavaScript permite adicionar métodos a objetos através de protótipos, mostrando um aspecto importante da linguagem.
```javascript
// Definindo um construtor chamado Pessoa
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
// Adicionando um método chamado "falar" ao protótipo do construtor Pessoa
Pessoa.prototype.falar = function () {
  console.log(`Meu nome é ${this.nome}`);
}
// Criando um novo objeto "funcionario" usando o construtor Pessoa
const funcionario = new Pessoa('bruno', 30);
// Chamando o método "falar" do objeto "funcionario"
funcionario.falar(); // Isso imprimirá "Meu nome é bruno" no console
```
Em `Pessoa.prototype.falar = function () { ... }` é definindo um método chamado falar no protótipo do construtor Pessoa. 
- Isso significa que qualquer objeto criado a partir do construtor Pessoa (por meio do operador new) terá acesso a esse método, compartilhando a mesma implementação. Esse método imprime uma mensagem no console com base no atributo nome do objeto.

**Herança de propriedades no contexto de um objeto herdar as propriedades de um outro objeto criado por uma função construtora **
---
O metodo .call() em JavaScript é uma maneira de invocar uma função, definindo o valor de **'this'** explicitamente e passando argumentos para a função

pode-se adicionar propriedades de objetos criados a partir de funções construtoras a objetos existentes. Isso significa que é possível enriquecer um objeto já criado, acrescentando novas propriedades a ele, sem modificar diretamente sua estrutura. Essa abordagem é útil para estender objetos de forma dinâmica, sem a necessidade de recriá-los a partir do zero. Essa flexibilidade permite adaptar objetos à medida que as necessidades do programa evoluem, tornando o código mais versátil e eficiente.
```javascript
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
// Adicionando um método chamado "falar" ao protótipo do construtor Pessoa
Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
}
const empregado = {
    genero: 'masculino'
};
Pessoa.call(empregado, 'bruno', 30); //pessoa passa a ser um objeto inrequecido
                                     //A função .call() em JavaScript é uma maneira de invocar uma função, definindo o valor de this explicitamente e passando argumentos para a função.
console.log(empregado);
```
1. O construtor "Pessoa" é definido, que aceita dois parâmetros: "nome" e "idade". Ele cria um objeto com essas propriedades.
2. Um método chamado "falar" é adicionado ao protótipo do construtor "Pessoa", de modo que todas as instâncias criadas a partir desse construtor terão acesso a esse método.
3. Um objeto chamado "empregado" é criado com uma propriedade "gênero" definida como "masculino".
4. Em seguida, a função Pessoa.call(empregado, 'bruno', 30); é chamada. Isso invoca o construtor "Pessoa" no contexto do objeto "empregado", o que significa que as propriedades "nome" e "idade" são definidas no objeto "empregado". Após essa chamada, o objeto "empregado" agora tem três propriedades: "gênero", "nome" e "idade".
5. Por fim, o objeto "empregado" é impresso no console, mostrando todas as suas propriedades.




---
## Como Contribuir

Sinta-se à vontade para contribuir com novos exercícios, soluções ou melhorias neste repositório. O objetivo é compartilhar conhecimento e aprender juntos! Para contribuir, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie um branch para suas soluções ou alterações.
3. Envie um pull request.
4. Vamos aprender e crescer juntos! 😊

---
Divirta-se programando em JavaScript!
