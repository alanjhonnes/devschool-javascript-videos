# Javascript - Operadores

Atribuição: =
Númericos: +, -, /, _, %, +=, -=, _=, /=, ++, –, ^
Concatenação de strings: +
Comparação: <, >, <=, >=, ==, ===, != !==
Lógicos: &&, ||, !
Ternário: ? (ex: x ? true : false)

No javascript temos o operador de atribuição representado pelo simbolo de igual

```javascript
let x = 10;
let y = x;
```

Temos os operadores numéricos como mais, menos, divisão e multiplicação.

```javascript
y = 10 * 20;
```

Podemos combinar operadores numéricos com o de atribuição para reduzir a quantidade de código, y = y +5 é equivalente a y += 5

```javascript
y = y + 5;
y += 5;
```

Operadores de comparação resultam em um valor booleano

```javascript
if (y >= 10) {
  //
}

if (y === 10) {
}
```

Temos os operadores lógicos, o "E" representado por "&&" e o "OU" representado por "||".

```javascript
if (y > 5 && y < 10) {
}
```
