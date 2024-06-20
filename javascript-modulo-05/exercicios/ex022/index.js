const App = require ("./App")

App.createUser("luishvanni@gmail.com", "Luis Vanni")
App.createUser("lucas@gmail.com.br", "Lucas Zanette")
App.createUser("claudia@italnet.com", "Claudia Spagnolo")

App.deposit("luishvanni@gmail.com", 100)

App.transfer("luishvanni@gmail.com", "claudia@italnet.com", 20)


App.changeLoanFee(10)
App.takeLoan("lucas@gmail.com.br", 2000, 24)

console.table(App.findUser("luishvanni@gmail.com"))
console.table(App.findUser("luishvanni@gmail.com")).account
