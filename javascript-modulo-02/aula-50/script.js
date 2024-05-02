// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b)
    return resultado
  }

  // Repare que não usamos os () ao lado do nome da função,
  // porque ao fazer isso estaríamos executando a função
  function somar(x, y) {
    console.log("Realizando soma.")
    return x + y
  }
  calcular(3, 5, somar)
  console.log(somar)       // Retorna a própria função
  console.log(somar(1, 1)) // Chama a função (retorna o resultado da função)

  
  //podemos escrever funções anônimas dentro da própria chamada da high-order function
  calcular(9, 2, function (x, y) {
    console.log("Realizando substração.")
    return x - y
  })



  //exemplo real
  function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
  }

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]

for(let i = 0; i<lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento) //mesma coisa que o for de cima
