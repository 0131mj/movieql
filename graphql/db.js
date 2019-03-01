export const people = [
    {
        id:"0",
        name: "Nicolas",
        age: 14,
        gender : "female"
    },
    {
        id:"1",
        name: "Yoda",
        age: 700,
        gender : "male"
    },
]

export const getById = id => {
    const filteredPerson = people.filter(person => person.id === String(id))[0]
    return filteredPerson;
}