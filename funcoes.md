# Javascript - Funções

Vários jeitos de declarar

- Função nomeada, utilizando a palavra chave function seguida do nome da função
- Função anônima atribuída a uma variável/constante
- “Arrow-function”

São tratadas como membros de primeira-classe, podendo ser:

- Atribuidas a uma variável
- Recebidas como argumentos de outra função
- Podem retornar outra função

- Gera um escopo próprio
- Funções filhas podem acessar variáveis do escopo da função pai (Closure)

Devido a tipagem dinâmica, não há suporte a funcionalidade de overload nativamente, mas pode ser implementado com código customizado.

```javascript
function dobro(a) {
  return a * 2;
}

const soma = function (a, b) {
  return a + b;
};

const metade = (c) => {
  return c / 2;
};

function recebeFn(a) {
  return a();
}

function retornaFuncao() {
  return () => 10;
}
```
