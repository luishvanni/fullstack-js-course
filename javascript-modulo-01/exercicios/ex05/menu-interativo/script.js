let opcao = ""

do {
 opcao = prompt(
    "Seja bem-vindo(a)\n" +
    "\nEsolha uma das opções abaixo: " + 
    "\nOpção 1)" + 
    "\nOpção 2)" + 
    "\nOpção 3)" + 
    "\nOpção 4)" + 
    "\nOpção 5) - ENCERRAR" 
    )

} while (opcao !== "5")

switch (opcao) {
    case "1":
        alert("Vc escolheu a opção 1")
        break
    case "2":
        alert("Vc escolheu a opção 2")
        break
    case "3":
        alert("Vc escolheu a opção 3")
        break
    case "4":
        alert("Vc escolheu a opção 4")
        break
    case "5":
        alert("Vc escolheu a opção de ENCERRAMENTO")
        alert("Encerrando programa...")
        break
    default:
        alert("Opção inválida!")
    
}