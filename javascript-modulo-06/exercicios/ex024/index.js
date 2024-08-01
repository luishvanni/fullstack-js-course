function imc(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight !== 'number' || typeof height !== 'number') {
            reject('Arguments must be of type numbers')
        } else {
            resolve(weight / (height ** height))
        }
    })
}

function showImc(weight, height) {
    imc(weight, height).then((result) => {
        console.log(`IMC: ${result}.`)

    if (result < 18.5) console.log("Situação: MAGREZA")
    else if (result < 25) console.log("Situação: NORMAL")
    else if (result < 30) console.log("Situação: SOBREPESO")
    else if (result < 40) console.log("Situação: OBESIDADE")
    else console.log("Situação: OBESIDADE GRAVE")
    })
    .catch((err) => {
        console.log(err)
    })

    console.log(`Calculando o IMC para peso ${weight} e altura ${height}`)
}

showImc(71, 1.75)
showImc(48, 1.60)
showImc(10, 'Luís')
showImc(73, 1.78)