# Javascript - Introdução

O Javascript é uma linguagem de programação interpretada com tipagem dinâmica usada principalmente nos browsers como linguagem de script para adicionar interatividade em páginas web, mas que também pode ser usada para criação de aplicações backend e desktop.

O Javascript é uma linguagem baseada em prototypes e é multi-paradigma, ou seja, ela suporta tanto os estilos de programação orientada a objetos, imperativa e funcional.

Podemos fazer declarações e atribuir valores a variáveis utilizando o sinal de igual.

```javascript
let x = 10;
```

A sintaxe é case-sensitive, ou seja, textos em caixa alta e baixa influenciam no código, e por isso, é recomendado que se siga um padrão.

```javascript
console.log(x); // 10
console.log(X); // undefined
```

Ponto e vírgula ( ; ) são utilizados para sinalizar o encerramento da linha, não são obrigatórios, mas é recomendado utilizar para deixar mais explicito a intenção do código e evitar bugs por causa de ambiguidade.

Blocos de código são declarados utilizando chaves ( { } ), por exemplo, em um bloco de código condicional.

```typescript
if (x >= 10) {
  //
}
```

Comentários podem ser representados por barras caso sejam de uma linha, ou barra-asterísco para comentar um bloco inteiro.

```javascript
// comentário de uma linha

let abc = "abc"; // comentário após declaração

/*
Bloco de comentário
com multiplas linhas
*/

/**
 * Comentário estilo JSDoc para documentação
 */
```

Podemos instânciar objetos de forma literal utilizando chaves.

```javascript
let alan = {
  nome: "Alan Jhonnes",
};

let nathan = {
  nome: "Nathan Carlos",
};
```

E declaramos array de forma literal utilizando colchetes.

```javascript
let pessoas = [alan, nathan];
```

Podemos acessar as propriedades com ponto ou pelo índice no caso de objetos.

```javascript
let nomeAlan = alan.nome;
let nomeNathan = nathan["nome"];
```

E acessar os indices no caso de arrays

```javascript
let pessoaAlan = pessoas[0];
let pessoaNathan = pessoas[1];
```
