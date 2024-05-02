// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined

function calcularMedia(a, b) {
    const media = (a + b) / 2 
    return media // O retorno é usado para armazenarmos a saída da função em uma variável
}

const resultado = calcularMedia(7,2)
console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

console.log(criarProduto("Notebook", 2500))

function areaRetangular(base, altura) {
    return base * altura
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

//console.log(areaRetangular(3,5))
//console.log(areaQuadrada(9))


// Uma função só pode ter uma saída, depois do return nada é executado
function hello() {
    let texto = "zzz"
    return texto
    texto = "Hello, world!"
    console.log(texto)
}
console.log(hello())





function maioridade(idade) {
    if(idade >= 18) {
        return "Maior de idade!"
    } else {
        return "Menor de idade!"
    }
}
console.log(maioridade(29))
console.log(maioridade(12));