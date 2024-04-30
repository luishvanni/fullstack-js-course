const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//ADICIONAR elementos 
// push -> adicionar elementos no final do array
let tamanho = arr.push("Boromir")
 console.log(arr)
 console.log(tamanho);

// unshift -> adicionar elemtentos no começo do array
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho);


//REMOVER elementos
//pop -> remover último elemento do array
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift -> remover primeiro elemento do array
ultimoElemento = arr.shift()
console.log(arr);
console.log(ultimoElemento);

//Pesquisa de elementos
//includes -> verificar se o elemento exsite ou não no array
const inclui = arr.includes("Gandalf")
console.log(inclui);

// indexOf -> verfica o índice do elemento e se ele existe ou não no array
const indice = arr.indexOf("Gandalf")
console.log(indice);

//Cortar 
// slice -> corta um novo array do indice x até y
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr);
console.log(hobbits);
console.log(outros);


// Concatenar
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade);


// Substituição dos Elementos
//splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade);
console.log(elementosRemovidos);


//Iterar - percorrer o array
for (let i = 0; i < sociedade.length; i++) {
    const elemento = sociedade[i]
    console.log(elemento + "se encontra na posição " + i)
}