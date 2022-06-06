const numeros = [1, 2, 3, 4];

const dobro = numeros.map((x) => x * 2)

console.log(dobro)

const pares = numeros.filter((x) => x % 2 === 0)

console.log(pares)

const primeiroItemPar = numeros.find((x) => x % 2 === 0)

console.log(primeiroItemPar)

const todosPositivos = numeros.every((x) => x >= 0)

console.log(todosPositivos)

const peloMenosUmNegativo = numeros.some((x) => x < 0)

console.log(peloMenosUmNegativo)

numeros.forEach((x) => console.log(x))

const soma = numeros.reduce((acumulador, item) => acumulador + item, 0)

console.log(soma)
