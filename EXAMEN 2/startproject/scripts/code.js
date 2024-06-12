global = {
    HUIDIGEVRAAG: "",
    SCORES: [],
    CORRECTEANTWOORDEN: 0,
    VRAGEN: [
        {
            question: "Wie is de hoofdpersoon in Final Fantasy VII Remake?",
            answers: ["Cloud Strife", "Sephiroth", "Tifa Lockhart"],
            correct: "Cloud Strife",
            selected: ""
        },
        {
            question: "Welke wereld wordt verkend in Final Fantasy XV?",
            answers: ["Gaia", "Eos", "Spira", "Cocoon"],
            correct: "Eos",
            selected: ""
},
{
    question: "Wie is de antagonist in Final Fantasy VIII?",
        answers: ["Ultimecia", "Kefka", "Seymour", "Kuja", "Edea"],
    correct: "Ultimecia",
    selected: ""
},
{
    question: "Heeft hoofdrolspeler in Final Fantasy IX een staart?",
        answers: ["Ja", "Nee"],
    correct: "Ja",
    selected: ""
},
{
    question: "Hoe heet de stad waarin het verhaal van Final Fantasy VII Remake begint?",
        answers: ["Midgar", "Junon", "Nibelheim", "Wutai"],
    correct: "Midgar",
    selected: ""
},
{
    question: "Welke summon is prominent aanwezig in Final Fantasy XV?",
        answers: ["Ifrit", "Shiva", "Ramuh", "Titan"],
    correct: "Ifrit",
    selected: ""
},
{
    question: "Wat is de naam van het luchtschip in Final Fantasy VIII?",
        answers: ["Ragnarok", "Highwind", "Invincible", "Falcon"],
    correct: "Ragnarok",
    selected: ""
},
{
    question: "Welke rol vervult Cid Highwind in Final Fantasy VII?",
        answers: ["Luchtschipkapitein", "Wapensmid", "Koning"],
    correct: "Luchtschipkapitein",
    selected: ""
},
{
    question: "Wat is het kenmerkende aan Cactuar-wezens in de Final Fantasy-serie?",
        answers: ["Ze zijn altijd groen", "Ze gebruiken de aanval 1000 Needles", "Ze zijn planten"],
    correct: "Ze gebruiken de aanval 1000 Needles",
    selected: ""
},
{
    question: "Welk Final Fantasy-wezen zorgt, met zijn aanval genaamd Bad Breath, voor verschillende statuseffecten?",
        answers: ["Malboro", "Chocobo", "Behemoth", "Tonberry"],
    correct: "Malboro",
    selected: ""
}
]
}

const setup = () => {
    laadbestaande()
    document.getElementById("start").addEventListener("click", verbergknop)
    document.getElementById("start").addEventListener("click", toonquiz)
    document.getElementById("start").addEventListener("click", tijdstip)
    document.getElementById("start").addEventListener("click", vragenopstellen)
    document.getElementById("submit").addEventListener("click", toonherstart)
    document.getElementById("submit").addEventListener("click", scoreOpslaan)
    document.getElementById("reset").addEventListener("click", resetscores)
}

const laadbestaande = () => {
    let storage = localStorage.getItem("key")
    let Sleutel = JSON.parse(storage)
    if(Sleutel !== null && SCORES !== null){
        for(let i = 0; i < Sleutel.length; i++){
            if(Sleutel[i] !== null){
                SCORES.push(Sleutel[i])
                toonleaderboard(Sleutel)
            }
        }
    }
}

const verbergknop = () => {
    document.getElementById("start").classList.add("d-none")
}

const toonquiz = () => {
    document.getElementById("quiz").classList.remove("d-none")
}

const tijdstip = () => {
    let nu = new Date()
    let dag = nu.getDay()
    let maand = nu.getMonth()
    let uren = nu.getHours()
    let minuten = nu.getMinutes()

    document.getElementById("started").innerHTML = `dag ${dag} maand ${maand} om ${uren}:${minuten}`
}

const vragenopstellen = () => {
    vragenkader = document.getElementById("questions")

    VRAGEN.sort((a, b) => a.VRAGEN - b.VRAGEN)

    for (let i = 0; i < VRAGEN.length; i++){
        let nieuweLI = document.createElement("li")
        nieuweLI.innerHTML = "Vraag " + (i+1)
        nieuweLI.classList.add("list-group-item")
        nieuweLI.addEventListener("click", () => toonvraag(i))

        vragenkader.append(nieuweLI)
    }
}

const toonvraag = (index) => {
    let vragen = document.getElementById("questions")
    let allevraagblokken = vragen.children
    let vraagblok = allevraagblokken[index]
    let aantalchilds = vragen.children.length
    vraagblok.classList.add("active")
    for (let i = 0; i < aantalchilds; i++){
        if (i !== index && allevraagblokken[i].classList.contains("active")){
            allevraagblokken[i].classList.remove("active")
        }
    }

    let kop = document.getElementsByClassName("card-header")
    kop[0].innerHTML = "Vraag #" + (index+1)

    let vraag = document.getElementsByClassName("card-title")
    vraag[0].innerHTML = VRAGEN[index].question

    maakantwoorden(index)
}

const maakantwoorden = (index) => {
    let antwoordenblok = document.getElementById("answers")

    for (let i = 0; i < VRAGEN[index].answers.length; i++){
        let nieuweLI = document.createElement("li")
        nieuweLI.innerHTML = VRAGEN[index].answers[i]
        nieuweLI.classList.add("list-group-item")
        nieuweLI.addEventListener("click", () => selecteerantwoord(index, i))
        antwoordenblok.append(nieuweLI)
    }
}

const selecteerantwoord = (index, i) => {
    let antwoorden = document.getElementById("answers")
    let aantalchilds = antwoorden.children.length

    VRAGEN[index].selected = antwoorden.children[i].innerHTML
    antwoorden.children[i].classList.add("bg-info")

    for (let j = 0; j < aantalchilds; j++){
        if (j !== i && antwoorden[i].classList.contains("bg-info")){
            antwoorden[i].classList.remove("bg-info")
        }
    }

    let opslaan = document.getElementsByClassName("btn btn-success")
    opslaan[0].addEventListener("click", () => controlleer(index, i))
    if (VRAGEN[index] === 9){
        opslaan[0].addEventListener("click", () => klaar)
    }
}

const toonherstart = () => {
    document.getElementById("submit").classList.remove("d-none")
}

const controlleer = (index) => {
    vragenkader = document.getElementById("questions")

    if (VRAGEN[index].selected === VRAGEN[index].correct){
        vragenkader.children[index].classList.add("bg-success")
        CORRECTEANTWOORDEN++
    } else {
        vragenkader.children[index].classList.add("bg-danger")
    }

    vragenkader.children[index].removeEventListener("click", () => selecteerantwoord(index, i))
}

const klaar = () => {
    let kaart = document.getElementsByClassName("card")
    kaart[0].classList.add("d-none")
}

const resetscores = () => {
    scorebord = document.getElementById("highscores")
    var p_list = document.getElementsByTagName("p");
    while (p_list.length > 0){
        scorebord.removeChild(p_list[0])
    }

    SCORES = []
    localStorage.clear()
}

const scoreOpslaan = () => {
    let vragen = document.getElementById("questions")
    let aantalvragen = vragen.children.length
    document.getElementById("score").innerHTML = "je hebt " + CORRECTEANTWOORDEN + " op " + aantalvragen

    let eenkey = {
    Score: CORRECTEANTWOORDEN
    }
    SCORES.push(eenkey)
    let keyJSON = JSON.stringify(SCORES)
    localStorage.setItem("key", keyJSON)

    toonleaderboard(eenkey)
}

const toonleaderboard = (eenkey) => {
    scorebord = document.getElementById("highscores")
    let scores = document.createElement("p")
    scores.innerHTML = eenkey.Score + " punt(en)"
    scorebord.append(scores)
}

window.addEventListener("load", setup);