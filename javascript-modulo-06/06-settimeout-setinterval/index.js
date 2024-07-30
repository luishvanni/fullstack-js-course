// SetTimeout - função que serve para criar um temporizador 

console.log("Programa iniciado!")

const timeoutId = setTimeout(() => {
    console.log("3 segundos se passaram desde que o programa foi iniciado.")
}, 3000)

clearTimeout(timeoutId)

// SetInterval - função que cria um intervalo para executar o código (tipo um loop com tempo)

let seconds = 0

const intervalId = setInterval(() => {
    seconds +=3
    console.log(`Se passaram ${seconds} segundos!`)
    if(seconds > 10) {
        clearInterval(intervalId)
        console.log("Tempo esgotado, pois ultrapassou o limite de 10s");
    }
}, 3000)