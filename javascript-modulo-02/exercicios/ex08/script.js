const imoveis = []
let opcao = ""


do {
    opcao = prompt(
      "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
    )

    switch(opcao){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Nome do proprietário: ")
            imovel.quartos = parseFloat(prompt("Número de quartos: "))
            imovel.banheiros = parseFloat(prompt("Quantidade de banheiros: "))
            imovel.garagem = prompt("O imóvel possui banheiro? (Sim/Não)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário:" + imovel.proprietario +
                "\nQuartos: " + imovel.quartos + 
                "\nBanheiros: " + imovel.banheiros +
                "\nPossuí garagem: " + imovel.garagem
            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Voltando para o menu")
            }

            break


        case "2":
            for( let i = 0; i< imoveis.length; i++) {
                alert(
                    "Imóvel " + [i + 1] +
                    "\nProprietário: " + imoveis[i].proprietario + 
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }

            break
        
        case "3":
            alert("Finalizando...")
            break
        default:
            alert("Opção inválida!")
            break
    }
  
  } while (opcao !== "3");