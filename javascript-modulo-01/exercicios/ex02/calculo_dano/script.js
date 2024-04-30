const atacante = prompt("Nome do atacante: ")
const poderDeAtaque = parseFloat(prompt("Poder de ataque: "))

const defensor = prompt("Nome do defensor: ")
let pontosDeVida = parseFloat(prompt("Pontos de vida: "))
const poderDeDefesa = parseFloat(prompt("Poder de defesa: "))
const possuiEscudo = prompt("O defendor possui escudo? [Sim/Não]")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'Não') {
    danoCausado = poderDeAtaque - poderDeDefesa

} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'Sim') {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)