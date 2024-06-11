let global = {
    tezoeken: "rhino",
    Naam: "",
    Pogingen: 0
}

Array = []

const setup = () => {
    document.getElementById("nieuw").addEventListener("click", startSpel)
    document.getElementById("clear").addEventListener("click", clearHighscores)
    bestaandeScores()
}

const bestaandeScores = () => {
    let storage = localStorage.getItem("key")
    let Sleutel = JSON.parse(storage)
    if(Sleutel !== null && Array !== null){
        for(let i = 0; i < Sleutel.length; i++){
            if(Sleutel[i] !== null){
                Array.push(Sleutel[i])
                maakBestaandeEntry(Sleutel[i].NAME, Sleutel[i].POGINGEN, Sleutel[i].DATUM)
            }
        }
    }
}

const startSpel = () => {
    console.log("ENTERING: startSpel")
    global.Naam = window.prompt("Geef naam in:")

    document.getElementById("go").addEventListener("click", valideerWoord)

    document.getElementById("gokken").replaceChildren()
}

const valideerWoord = () => {
    console.log("ENTERING: valideerWoord")
    let gokWoord = document.getElementById("gok").value
    console.log("CORRECT: " + gokWoord)

    global.Pogingen++

    if (gokWoord.length === 5){
        toonLetters(gokWoord)
        console.log("CORRECT: bevat 5 letters")
    } else if (gokWoord.length === 0) {
        console.log("Niks ingevuld")
    } else {
        console.log("Moet 5 letters bevatten")
    }
}

const toonLetters = (gokWoord) => {
    console.log("ENTERING: toonLetters")
    let letters = []
    let correcteWoordLetters = []
    let teller = 0

    let nieuwePoging = document.createElement("div")

    correcteWoordLetters = global.tezoeken.split('')
    letters = gokWoord.split('')
    console.log(letters)

    console.log(letters.length)
    console.log(correcteWoordLetters.length)

    for (let i = 0; i < letters.length; i++){
        let node = document.createElement("div")
        let inputnode = document.createTextNode(letters[i])
        let infocode = 0

        for (let j = 0; j < correcteWoordLetters.length; j++){
            if (letters[i] === correcteWoordLetters[j]){
                if (i === j){
                    infocode = 1
                } else {
                    if (infocode !== 1){
                        infocode = 2
                    }
                }
            }
        }

        if (infocode === 1){
            teller++
        }

        if (infocode === 0){
            node.classList.add("fout")
        } else if (infocode === 1){
            node.classList.add("juist")
        } else {
            node.classList.add("bevat")
        }

        node.addEventListener("click", () => kleur(infocode))

        node.appendChild(inputnode)
        nieuwePoging.appendChild(node)
    }

    console.log(teller)
    if (teller === 5){
        document.getElementById("go").removeEventListener("click", valideerWoord)
        console.log("eventlistener verwijderd")
        console.log(global.Pogingen)

        maakNieuweEntry(checkDatum())
    }

    document.getElementById("gokken").appendChild(nieuwePoging)
}

const kleur = (infocode) => {
    uitlegbalk = document.getElementById("uitleg")
    if (infocode === 0){
        uitlegbalk.innerHTML = "FOUT, Letter zit niet in het woord"
    } else if (infocode === 1){
        uitlegbalk.innerHTML = "JUIST, Letter staat volledig correct"
    } else {
        uitlegbalk.innerHTML = "FOUT, Letter staat op de verkeerde plek"
    }
}

const checkDatum = () => {
    let vandaag = new Date()

    let jaar = vandaag.getFullYear()
    let maand = vandaag.getMonth()
    let dag = vandaag.getDay()

    console.log(`${dag}-${maand}-${jaar}`)
    return `${dag}-${maand}-${jaar}`
}

const maakNieuweEntry = (datum) =>{
    let eenkey = {
        NAME: global.Naam,
        POGINGEN: global.Pogingen,
        DATUM: checkDatum()
    }
    Array.push(eenkey)
    let keyJSON = JSON.stringify(Array)
    localStorage.setItem("key", keyJSON)

    let score = document.createElement("p")
    score.append("Naam: " + eenkey.NAME + ", pogingen: " + eenkey.POGINGEN + ", datum: " + eenkey.DATUM)
    document.getElementById("highscores").append(score)
}

const maakBestaandeEntry = (naam, pogingen, datum) => {
    let scores = document.createElement("p")
    scores.append("Naam: " + naam + ", pogingen: " + pogingen + ", datum: " + datum)
    document.getElementById("highscores").appendChild(scores)
}

const clearHighscores = () => {
    scorebord = document.getElementById("highscores")
    var p_list = document.getElementsByTagName("p");
    while (p_list.length > 1){
        scorebord.removeChild(p_list[0])
    }

    Array = []
    localStorage.clear()
}

window.addEventListener("load", setup);