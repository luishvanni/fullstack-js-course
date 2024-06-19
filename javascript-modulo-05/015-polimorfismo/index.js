class Vehicle {
    move() {
        console.log("O veículo está se movendo!");
    }
}

class Car extends Vehicle {
    move() {
        console.log("O carro esta se movendo!");
    }
}

class Ship extends Vehicle{
    move() {
        console.log("O navio esta navegando!");
    }
}

class Aircraft extends Vehicle {
    move(speed) {
      console.log(`A aeronave está voando a ${speed} km/h.`)
    }
}

const ferrari = new Car()
const titanic = new Ship()
const boing777 = new Aircraft()

ferrari.move()
titanic.move()
boing777.move()

function start(vehicle) {
    console.log("Iniciando um veículo...")
    vehicle.move()
}

start(ferrari)
start(titanic)
start(boing777)