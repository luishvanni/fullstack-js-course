const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}
  
//forma normal
const name = person.name

//desestruturação
const { job, parents } = person //pega exatamente o que esta dentro das {}

console.log(name, job, parents);

//desestruturação no array
const [father, mother] = parents
console.log(father, mother);

//desestruturação em funções
function createUser({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)
console.log(luke)