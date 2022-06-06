# Javascript - Estruturas de controle

Podemos utilizar o if e else para fazer controle do fluxo de código, executando diferentes blocos de código de acordo com determinadas condições.

```javascript
const x = 3;

if (x >= 3) {
} else if (x < 10) {
} else {
}
```

Temos também o switch, que analisa uma determinada variável e executa os blocos correspondentes. Podemos colocar uma clausula de default caso nenhuma das condições seja encontrada.

```javascript
switch (x) {
  case 1: {
    break;
  }
  case 2: {
    break;
  }
  case 3: {
    break;
  }
  default: {
  }
}
```

É importante colocar o break no final de cada case para parar a execução dos blocos de código, caso contrário os blocos abaixo do mesmo serão executados mesmo sem passar na condição.
