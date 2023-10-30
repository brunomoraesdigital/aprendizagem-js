# Exercícios JavaScript

Neste projeto, você encontrará exercícios para praticar JavaScript. Cada exercício inclui uma descrição e uma solução em JavaScript.

## Variáveis

### Exercício 1 - O Nome Mágico

**Descrição:** Crie uma variável chamada 'nome' e atribua seu próprio nome a ela. Em seguida, use `console.log` para imprimir "Olá, [seu nome]!"

**Solução:**
```javascript
const nome = 'Bruno Moraes';
console.log(`Olá, ${nome}!`);
```

### Exercício 2 - Aposta Aleatória

**Descrição:** Declare uma variável chamada aposta e atribua a ela um número aleatório entre 1 e 10. Use `Math.random()` para gerar o número e `Math.floor()` para arredondá-lo.

**Solução:**
```javascript
let aposta = Math.floor(Math.random() * 10) + 1;
console.log(aposta);
```

### Exercício 3 - Celsius para Fahrenheit

**Descrição:** Declare uma variável temperaturaCelsius com um valor em graus Celsius (por exemplo, 25). Crie uma variável temperaturaFahrenheit que armazena a mesma temperatura em Fahrenheit e use a fórmula: °F = (°C * 9/5) + 32.

**Solução:**
```javascript
let temperaturaCelsius = 25;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log(`A temperatura em Fahrenheit é ${temperaturaFahrenheit}°F.`);
```

## Como Contribuir

Sinta-se à vontade para contribuir com exercícios ou soluções para os exercícios ou fazer melhorias neste repositório. Para contribuir, siga estas etapas:
1. Faça um fork deste repositório.
2. Crie um branch para sua solução ou alterações.
3. Envie um pull request.

## Recursos Adicionais

- [Documentação JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Curso de JavaScript no MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

Divirta-se programando em JavaScript!
