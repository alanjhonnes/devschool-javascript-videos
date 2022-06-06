Podemos declarar as variáveis no javascript de três jeitos diferentes:

```javascript
let x;
```

let permite alterarmos a variável posteriormente, por isso podemos declarar ela sem um valor inicial e atribuir um valor posteriormente.

```javascript
let x;

x = 1;
x = 10;
```

const não permite alterarmos o valor declarado inicialmente, por isso é necessário atribuir um valor no momento da declaração

```javascript
const y = 2;

y = 20; // erro
```

```javascript
var z = 3;
```

var é o modo depreciado de declarar variáveis, é similar ao let, mas é possível acessar uma var declarada dessa forma fora do bloco onde ela é declarada, por exemplo após um bloco de condição.

```javascript
if (true) {
  var z = 3;
}

console.log(z); // 3
```

Tente favorecer o uso de const ao invés de let para melhorar o entendimento do seu código.
