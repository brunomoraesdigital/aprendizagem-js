## **Métodos de Adição e Remoção de Elementos:**

# **appendChild**: Adiciona um nó como o último filho de um elemento.

```javascript
parentElement.appendChild(newChild);
```

# **insertBefore**: Insere um nó antes de outro nó como filho de um elemento.

```javascript
parentElement.insertBefore(newChild, referenceNode);
```

# **insertAdjacentElement**: Insere um novo elemento adjacente a um elemento, em uma das posições especificadas.

```javascript
parentElement.insertAdjacentElement(position, newElement);
```

**removeChild**: Remove um nó filho do DOM.

```javascript
parentElement.removeChild(childElement);
```

# **replaceChild**: Substitui um nó filho existente por um novo nó.

```javascript
parentElement.replaceChild(newChild, oldChild);
```

## **Outros Métodos Relacionados à Manipulação do DOM:**

# **createElement**: Cria um novo elemento HTML.

```javascript
var newElement = document.createElement('div');
```

# **createTextNode**: Cria um novo nó de texto.

```javascript
var textNode = document.createTextNode('Hello, World!');
```

# **setAttribute e getAttribute**: Define ou obtém o valor de um atributo de um elemento.

```javascript
element.setAttribute('class', 'my-class');
var classValue = element.getAttribute('class');
```

# **classList**: Manipula as classes de um elemento.

```javascript
element.classList.add('new-class');
element.classList.remove('old-class');
```

# **innerHTML**: Obtém ou define o conteúdo HTML de um elemento.

```javascript
var htmlContent = element.innerHTML;
element.innerHTML = '<p>Novo conteúdo</p>';
```

# **innerText**: Obtém ou define o conteúdo de texto de um elemento, considerando o layout e ignorando estilos ocultos.

```javascript
var textContent = element.innerText;
element.innerText = 'Novo texto';
```

# **textContent**: Obtém ou define o conteúdo de texto de um elemento, retornando o texto completo, incluindo estilos ocultos.

```javascript
var textContent = element.textContent;
element.textContent = 'Novo texto';
```

Esses são alguns dos métodos essenciais para manipulação do DOM em JavaScript.
