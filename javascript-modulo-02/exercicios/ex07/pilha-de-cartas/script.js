const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no baralho: " + baralho.length + 
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n3.Sair"
    )

    switch(opcao) {
        case "1":
            const novaCarta = prompt("Carta adicionada: ")
            baralho.push(novaCarta) //Adiciona no final do array
            break
        case "2":
            const cartaPuxada = baralho.pop() //Remove no final
            if (!cartaPuxada) {
                alert("Não há nenhuma carta no baralho!")
            }
            else {
                alert("Você puxou um(a)" + cartaPuxada)
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }
} while (opcao != "3")
