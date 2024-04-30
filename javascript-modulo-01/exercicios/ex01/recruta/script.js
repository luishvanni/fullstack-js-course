const primeiroNome = prompt("Digite seu primeiro nome: ")
const sobrenome = prompt("Digite seu  sobrenome: ")
const campoDeEstudo = prompt("Digite seu  campo de estudo: ")
const anoDeNascimento = prompt("Digite o ano que vc nasceu: ")

alert (
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome + 
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2024 - anoDeNascimento)
)
