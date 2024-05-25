const dayjs= require("dayjs")

function birthday (date) {
    const birthday = dayjs(date)
    const today = dayjs()//"()" = data atual

    const ageInYears = today.diff(birthday, 'year')
    //diff compara duas datas
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    //descobrir qual o próximo aniversario  
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}
birthday("2004-06-18")