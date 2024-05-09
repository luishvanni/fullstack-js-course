//Usando o sessionStorage
//Salvar informações ENQUANTO estiver no site
document.getElementById('sessionBtn').addEventListener('click', function (){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
})

//Usando o localStorage
//As inforções ficarão salvas até que eu remova-as 
document.getElementById('localBtn').addEventListener('clicl', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const t = localStorage.getItem('text')
    alert('O texto salvo no local storage é: ' + t)
})

//Usando cookies
document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024, 5, 10) + ';'
    const path = 'path/;'
    document.cookie = cookie + expiration + path
    input.value = ''
})