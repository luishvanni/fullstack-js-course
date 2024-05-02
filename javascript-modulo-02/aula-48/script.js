// Função recursiva é uma função que chama ela mesma repetidamente

function dividir(num) {
    console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

dividir(40)


function fatorial(num) {
    console.log("Número: " + num)
    if (num === 0) { //caso base
        return 1
    } else if (num === 1) { //caso base
        return 1
    } else {
        console.log(num + " * !" + (num - 1))
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))


// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores
function somar(a, b) {
    return a + b
  }

  // Repare que não usamos os () ao lado do nome da função,
  // porque ao fazer isso estaríamos executando a função
  const operacao = somar
  console.log(operacao(4, 5))

// Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome
const subtrair = function (a, b) {
    return a - b
  }
  console.log(subtrair(36, 13))