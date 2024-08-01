//pendente - pending (logo quando é criada)
//resolvida - resolved
//rejeitada - rejected

function execute () {
    //faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log("A promise está sendo executada.")
        setTimeout(() => {
            console.log("Resolvendo a promise...")
            resolve('Resultado')
        })
    })
}

const p = execute()

console.log(p)