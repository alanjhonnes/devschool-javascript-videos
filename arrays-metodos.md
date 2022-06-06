Javascript - Arrays - Métodos

Possui vários métodos auxiliares para realizar iterações no vetor.

Métodos principais:
map = transforma os dados do vetor a partir de uma função de transformação
filter = filtra os dados a partir de uma função de predicado
Find = encontra um dado a partir de uma função de predicado
reduce = iterador genérico, pode implementar qualquer tipo de iteração
every = checa se todos os items passam na função de predicado
forEach = executa uma função para cada item

Os arrays possuem diversos métodos para facilitar a manipulação e transformação dos dados.

Quando quisermos transformar cada item de um array, utilizamos o método map, passando a ele uma função de transformação que será executada para cada item do array.

```javascript
const numeros = [1, 2, 3, 4];

const dobro = numeros.map((x) => x * 2);
```

Quando quisermos filtrar items do array, utilizamos o método filter, passando uma função de predicado, que retorna true caso o item deva permanecer, ou false caso o item tenha que sair.

O método filter é usado para gerar um novo array filtrando itens em base em uma função de predicado executada em cada item.

```javascript
const numeros = [1, 2, 3, 4];
const pares = numeros.filter((x) => x % 2 === 0);
```

Quando quisermos procurar o primeiro item que confere com determinadas condições, nós podemos utilizar o método find passando também uma função de predicado.

```javascript
const primeiroItemPar = numeros.find((x) => x % 2 === 0);
```

Caso não seja encontrado nenhum item correspondente, é retornado undefined.

Quando quisermos checar se todos os items do array conferem com determinadas condições, nós podemos utilizar o método every, passando também uma função de predicado. Every retorna true se todos os items conferem, e false caso contrário.

```javascript
const todosPositivos = numeros.every((x) => x >= 0); // true
```

De forma similar, podemos usar o método "some" para verificar se pelo menos um item do array confere com determinadas condições. Some retorna true se pelo menos um item confere, e false caso contrário.

```javascript
const peloMenosUmNegativo = numeros.some((x) => x < 0); // false
```

Caso precisemos executar uma função qualquer para cada item do array, podemos usar o forEach, passando a ele a função que deve ser executada.

```javascript
numeros.forEach((x) => console.log(x));
```

Temos também o reduce, que é um método mais genérico para que possamos implementar uma lógica mais customizada ao iterar no array. Ele recebe dois argumantos, o primeiro é uma função redutora, e o segundo argumento é o valor inicial. A função redutora recebe um acumulador como primeiro argumento, o item atual como segundo argumento e o índice atual do array como terceiro argumento. Essa função redutora deve retornar um novo valor para o acumulador, que é recebido na próxima chamado para o item seguinte, e retornado como valor final ao final da iteração.

```javascript
const soma = numeros.reduce((acumulador, item) => acumulador + item, 0);
```
