Javascript - Arrays

Arrays são as estruturas de dados padrão do javascript para representar coleções de dados.

Podemos criar um array utilizando colchetes

```javascript
const array = [];
```

Podemos criar o array já populado colocando items dentro dos colchetes.

```javascript
const array = [1, 2, 3];
```

Ou adicionar mais itens posteriormente usando o método `push`:

```javascript
array.push(4);
```

Para acessarmos os itens de dentro de um array, usamos a sintaxe de acesso ao índice, indicada por colchetes:

```javascript
const um = array[0];
const dois = array[1];
```

Podemos verificar a quantidade de itens de um array lendo a propriedade length

```javascript
array.length;
```
