const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += indice +". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt("Informe uma data limite (dd//mm/aaaa) para a vaga: ")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso!")
    }
}


function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ")
    if (indice >= vagas.length  || indice < 0) {
        alert("Índice inválido!")
        return
    }

    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidatoAtual){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " +indice + 
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de canditados: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const nome = prompt("Informe o nome do candidato(a): ")
    const indice = prompt("Informe o índice para qual deseja se inscrever: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato" + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.candidato.push(candidato)
        alert("Inscrição realiada com sucesso!")
    }
}


function excluirVaga() {
    const indice = prompt("Informe o índice da vaga: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1) //excluir elementos expecíficos do array
        alert("Vaga excluida com sucesso!")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de vagas de emprego" +
        "\n\nEscolha uma das opções: " +
        "\n1.Listar vagas disponiveis" +
        "\n2.Criar nova vaga" +
        "\n3.Visualizar vaga" +
        "\n4.Inscrever um(a) candidato(a)" +
        "\n5.Excluir vaga" +
        "\n6.Sair"
    )

    return opcao
}

function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
  
      switch (opcao) {
        case "1":
          listarVagas()
          break
        case "2":
          novaVaga()
          break
        case "3":
          exibirVaga()
          break
        case "4":
          inscreverCandidato()
          break
        case "5":
          excluirVaga()
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida.")
      }
  
    } while (opcao !== "6");
  }
  
  executar()

