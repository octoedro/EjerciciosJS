const persons = [
    {
        name:`Osvaldo`,
        surname:`Lara`,
    },
    {
        name:`Carlos`,
        surname:`Riquelme`,
        age: 37
    },
    {
        name:`Octavio`,
        surname:`Brito`,
        age: 34
    },
]

const saludo = (person) => console.log(`Hola ${person ? person.name : `Desconocido`} ${person ? person.surname : `:(`}`)
const realizarSaludos = (persons) => persons.map((person)=>saludo(person))

const sumaEdades = (persons) => console.log(persons.reduce(
    (prev, act)=> prev + (act.age ? act.age : 0),
    0
))

// Con carinio :P
const discriminarSpoilers = (persons) => console.log(persons.filter((person)=>person.name!=='Carlos'))

const ordenarPorEdad = (persons) => console.log(persons.sort((a,b)=>{
    if(a.name > b.name){
        return -1
    }
    if(a.name < b.name){
        return 1
    }
    return 0
}))


ordenarPorEdad(persons)