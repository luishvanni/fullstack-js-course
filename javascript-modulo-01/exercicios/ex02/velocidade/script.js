const nome1 = prompt("Digite o nome do veiculo1: ")
const velocidade1 = parseFloat(prompt("Digite a velocidade do veiculo1: "))

const nome2 = prompt("Digite o nome do veiculo2: ")
const velocidade2 = parseFloat(prompt("Digite a velocidade do veiculo2: "))

if (velocidade1 > velocidade2) {
    alert(nome1 + " é mais rápido do que " + nome2)
  } else if (velocidade2 > velocidade1) {
    alert(nome2 + " é mais rápido do que " + nome1)
  } else {
    alert(nome1 + " e " + nome2 + " possuem velocidades iguais.")
  }