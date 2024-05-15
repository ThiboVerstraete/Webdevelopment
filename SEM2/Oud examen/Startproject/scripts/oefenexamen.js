let global = {
    tezoeken: "rhino"
}

const setup = () => {
    document.getElementById("nieuw").addEventListener("click", startSpel)
}

const startSpel = () => {
    console.log("ENTERING: startSpel")
    const spelerNaam = window.prompt("Geef naam in:")

    document.getElementById("go").addEventListener("click", valideerWoord)
}

const valideerWoord = () => {
    console.log("ENTERING: valideerWoord")
    let gokWoord = document.getElementById("gok").value
    console.log("CORRECT: " + gokWoord)

    if (gokWoord.length === 5){
        toonLetters(gokWoord)
        console.log("CORRECT: bevat 5 letters")
    } else {
        console.log("Moet 5 letters bevatten")
    }
}

const toonLetters = (gokWoord) => {
    console.log("ENTERING: toonLetters")
    let letters = []
    let correcteWoordLetters = []

    correcteWoordLetters = global.tezoeken.split('')
    letters = gokWoord.split('')
    console.log(letters)

    console.log(letters.length)
    console.log(correcteWoordLetters.length)

    for (let i = 0; i < letters.length; i++){
        let node = document.createElement("div")
        let inputnode = document.createTextNode(letters[i])
        let infocode = 0;

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

            if (infocode === 0){
                node.classList.add("fout")
            } else if (infocode === 1){
                node.classList.add("juist")
            } else {
                node.classList.add("bevat")
            }
        }

        node.appendChild(inputnode)
        document.getElementById("gokken").appendChild(node)
    }
}

window.addEventListener("load", setup);