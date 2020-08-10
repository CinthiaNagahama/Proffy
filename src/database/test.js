const Database = require('./db')
const CreateProffy = require('./createProffy')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Insert data
    proffyValue = {
        name: 'Cinthia Ungefehr', 
        avatar: 'https://avatars3.githubusercontent.com/u/56683006?s=460&v=4',
        whatsapp: '989884355',
        bio: 'Hey there, vamo estudar biologia!'
    }

    classValue = {
        subject: 2,
        cost:"25"
    }

    classScheduleValues = [
        {
            weekday: [2], // Terça
            time_from: [720],
            time_to: [1220]
        },
        {
            weekday: [4], // Quinta
            time_from: [520],
            time_to: [1440]
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Query data

        // Consult proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

        // Consult the classes of a proffy plus the proffy data
    const selectedClassesAndProffy = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffy)

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "2"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "720"
    `)
    console.log(selectedClassesSchedules)
})