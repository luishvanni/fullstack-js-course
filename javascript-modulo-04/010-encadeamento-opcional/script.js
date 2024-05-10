const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }
  
  // console.log(user.friends[0].phone.ddd)
  console.log(user.friends[0].phone?.ddd)
  console.log(user?.brothers?.length)
  
  console.log(user.brothers?.[5].name)

  //O operador de encadeamento opcional provê uma forma de simplificar o acesso a valores através de objetos conectados, quando é possível que uma referência ou função possa ser undefined ou null.