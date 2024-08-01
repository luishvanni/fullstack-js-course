//Funções async são uma forma mais conveniente de se trabalhar com promises no javascript moderno. Elas permitem criar funções que automaticamente retornam uma promise, sem que nós precisemos instanciá-la

async function asyncSum(a, b) {
    return a + b
}

asyncSum(1, 1).then(result => console.log(`1 + 1 é igual a ${result}`))



async function asyncSubtract(a, b) {
    return a - b
}

//const sumResult = asyncSum(50, 33)
//const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
})

//rejeitando Promises em Funções async

async function asyncSum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Arguments must be of type number')
    }
    return a + b
}

async function asyncSubtract(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Arguments must be of type number')
    }
    return a - b
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, null)