const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

 
// Map -> permite obter um novo array a partir de um array existenste, mapeia cada elemento do antigo array, para um novo array

const nomes = personagens.map(function (personagem) {
    return personagem.nome

})

console.log(nomes)


// Filter -> selecionar elementos expecificos de um array existente, criando um novo array com os mesmos

const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
  })



console.log(orcs)


// Reduce -> transforma o array em outra coisa (objeto, string, array...)

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)


// sort -> ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
    return a.nivel - b.nivel // coloca o array em ordem crescente 
})

console.log(personagens)