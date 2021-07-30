const schoolReport = 97
const grades = {
    noteA: "A",
    noteB: "B",
    noteC: "C",
    noteD: "D",
    noteF: "F"
}

function showFinalNote() {
    if (schoolReport >= 90 && schoolReport <= 100)
        return console.log(`Sua nota é ${grades.noteA}`)
    if (schoolReport >= 80 && schoolReport <= 89)
        return console.log(`Sua nota é ${grades.noteB}`)
    if (schoolReport >= 70 && schoolReport <= 79)
        return console.log(`Sua nota é ${grades.noteC}`)
    if (schoolReport >= 60 && schoolReport <= 69)
        return console.log(`Sua nota é ${grades.noteD}`)
    if (schoolReport <= 60)
        return console.log(`Sua nota é ${grades.noteF}`)
}

showFinalNote()
