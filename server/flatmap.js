const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
]

const respuesta = users.map(item => item.attributes).flat()
console.log(respuesta)

const respuesta2 = users.flatMap(item => item.attributes)
console.log(respuesta2)

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
}

const respuesta3 = calendars.primaryCalendar.flatMap(item => item.startDate).concat(
    calendars.secondaryCalendar.flatMap(item => item.startDate))
console.log(respuesta3)

const respuesta4 = Object.values(calendars).flatMap(item => {
    return item.map(item => item.startDate)
})
console.log(respuesta4)