let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i< fila.length; i++) {
        pacientes += (i + 1) + "°- " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3.Sair"
    )
    switch (opcao){
        case "1":
            const novoPaciente = prompt("Nome do paciente: ")
            fila.push(novoPaciente) //adiciona paciente no final da fila
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (fila.length > 0) {
                alert(pacienteConsultado + " foi consultado e removido da fila.")
            } else {
                alert("Não há pacientes na fila!")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }

} while (opcao != "3")