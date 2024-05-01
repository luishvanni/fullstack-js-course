function dobro(x) {
    console.log("O dobro de " + x + " é " + (x * 2) + "!")
}

//dobro(2)
//dobro(4)

//nome com valor já pré definido 
function dizerOla(nome = "mundo") {
    console.log("Olá, " + nome + "!")
  }

  //dizerOla("Isaac")
  //dizerOla()

  function soma(a, b) {
    console.log("Resultado da soma: " + (a + b))
  }

  //soma(2, 3)

  function criarUsuario(nome, email, senha, tipo) {
    const usuario = {
        nome, // equivalente: nome: nome
        email,
        senha,
        tipo
    }

    console.log(usuario)
  }

  /*function novoUsuario(nome, email, senha, tipo = "admin") { // declarar sempre no final 
    
    const usuario = {
        nome, // equivalente: nome: nome
        email,
        senha,
        tipo
    }

    console.log(usuario)

  }

  criarUsuario("Luís", "luishvanni@gmail.com", "1234")
  novoUsuario("Luís", "luishvanni@gmail.com", "1234")*/

  //funções com muitos paramentros

  function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    //...
  }

  function objetoComoParametro(usuario) {
    //...
    usuario.nome
    usuario.email

  }

// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)



