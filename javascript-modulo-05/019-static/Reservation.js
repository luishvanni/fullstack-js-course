class Reservation {
    constructor(guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseTax
    }

    static baseTax = 150 //atributo estático

    static showBaseTax() {
        console.log(`Base tax is ${Reservation.baseTax}`);
    }

}

Reservation.showBaseTax()

const r1 = new Reservation(3, "201", 5)
console.log(r1)

const r2 = new Reservation(2, "702", 4)
console.log(r2)