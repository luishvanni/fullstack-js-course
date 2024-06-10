class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email === email  && this.password === password ) {
            console.log("Login efetuado com sucesso!");
        } else {
            console.log("Algo deu errado!")
        }

    }
}

const luis = new User("Luís Vanni", "luishvanni@gmail.com", "000")

luis.login("luishvanni@gmail.com", "111")
luis.login("luishvanni@gmail.com", "000")

