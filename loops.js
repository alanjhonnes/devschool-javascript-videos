for (let i = 0; i < 5; i++) {
    console.log(`for: ${i}`);
}


let j = 0;
while (j < 5) {
    console.log(`while: ${j}`);
    j++;
}

let k = 0;
do {
    console.log(`do while: ${k}`);
    k++;
} while (k < 5);

const listaParaIterar = [1, 2, 3];

for (let valorDaLista of listaParaIterar) {
    console.log(`valor da lista: ${valorDaLista}`);
}

const objetoParaIterar = {
    propriedade1: 1,
    propriedade2: 2,
    propriedade3: 3,
};

for (let propriedade in objetoParaIterar) {
    console.log(`propriedade do objeto: ${propriedade}`);
    const val = objetoParaIterar[propriedade];
}
