# Javascript - Loops

Loops são estruturas de repetição de blocos de código.

A estrutura mais comum é o for, onde declaramos qual variável será usada para a iteração, passamos uma expressão para validar se o loop deve continuar, e uma expressão para incrementar a variável a cada iteração.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`for: ${i}`);
}
```

O segundo método é utilizando o while, que simplesmente verifica uma condição qualquer para repetir o bloco de código.

```javascript
let j = 0;
while (j < 5) {
  console.log(`while: ${j}`);
  j++;
}
```

Podemos usar o do antes do while para executar pelo menos uma vez o bloco de código.

```javascript
let k = 0;
do {
  console.log(`do while: ${k}`);
  k++;
} while (k < 5);
```

Para iterarmos em um array, é mais conveniente usarmos o for of, que nos permite acessar o item de cada índice do array.

```javascript
const listaParaIterar = [1, 2, 3];

for (let valorDaLista of listaParaIterar) {
  console.log(`valor da lista: ${valorDaLista}`);
}
```

Caso precisemos iterar nas propriedades de um objeto, podemos utilizar o for in, que nos permite acessar a chave de cada propriedade do objeto.

```javascript
const objetoParaIterar = {
  propriedade1: 1,
  propriedade2: 2,
  propriedade3: 3,
};

for (let propriedade in objetoParaIterar) {
  console.log(`propriedade do objeto: ${propriedade}`);
  const val = objetoParaIterar[propriedade];
}
```
