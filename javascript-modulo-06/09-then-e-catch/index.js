//métodos para tratar as promises

function execute () {
    //faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log("A promise está sendo executada.")
        setTimeout(() => {
            if (true) {
                reject('A promise foi rejeitada')
            } else {
                console.log("Resolvendo a promise...")
                resolve(42)
            }
            
        }, 2000)
    })
}

const p = execute()

//then - lidar com a promise resolvida
execute().then((result) => {
    console.log(`A promise foi resoolvida. Resultado: ${result}`);
}).catch((err) => {
    console.log(`A promise foi rejeitada. Motivo: ${err}`)
}).finally(() => {
    console.log('A promise foi finalizada!')
})
