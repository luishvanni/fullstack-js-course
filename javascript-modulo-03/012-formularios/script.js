const form = document.getElementById('orderForm')

form.addEventListener('submit', function(event){
    event.preventDefault() // previne o evento padrão do site

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += ' - ' + item.value + '\n'
    })

    console.log(
        name,
        address,
        breadType,
        main,
        salad,
        observations
    )

    alert(
        "Pedido realizado com sucesso!" +
        "\nNome: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo do pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salad +
        "Obersevações: " + observations
    )


    //:checked = pegar somente os inputs que estão marcados na checkbox
})