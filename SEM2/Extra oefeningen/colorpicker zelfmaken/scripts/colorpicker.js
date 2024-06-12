let opslagArray = []

const setup = () => {
    console.log("ENTERING: setup")
    vraagBestaandeOp()
    updateblok()
    let sliders = document.getElementsByClassName("rijkleur")
    for (let i = 0; i < sliders.length; i++){
        console.log("slider " + i + " gevonden")
        sliders[i].addEventListener("input", updateblok)
    }
    document.getElementById("opslaan").addEventListener("click", voegmomenteeltoe)
}

const vraagBestaandeOp = () => {
    console.log("ENTERING: vraagBestaandeOp")
    let storage = localStorage.getItem("key")
    let Sleutel = JSON.parse(storage)
    allekleuren = document.getElementById("historiek")
    if(Sleutel !== null && opslagArray !== null){
        opslagArray = []
        for(let i = 0; i < Sleutel.length; i++){
            if(Sleutel[i] !== null){
                voegtoe(Sleutel[i].Rood, Sleutel[i].Groen, Sleutel[i].Blauw)
            }
        }
    }
}

const updateblok = () => {
    console.log("ENTERING: updateBlok")
    let kleurblok = document.getElementById("mainblok")
    kleurblok.style.backgroundColor = "rgb(" + ROOD() + ", " + GROEN() + ", " + BLAUW() + ")"
}

const voegmomenteeltoe = () => {
    voegtoe(ROOD(), GROEN(), BLAUW())
}

const voegtoe = (rood, groen, blauw) => {
    console.log("ENTERING: voegToe")
    let allekleuren = document.getElementById("historiek")
    let eenkey = {
        Rood: rood,
        Groen: groen,
        Blauw: blauw
    }
    opslagArray.push(eenkey)
    let keyJSON = JSON.stringify(opslagArray)
    localStorage.setItem("key", keyJSON)
    let opslagblok = document.createElement("div")
    let Xke = document.createElement("button")
    Xke.innerHTML = "X"
    Xke.classList.add("Xke")
    Xke.addEventListener("click", verwijderditblok)
    opslagblok.appendChild(Xke)
    opslagblok.addEventListener("click", () => verandermainblokkleur(rood, groen, blauw))

    opslagblok.style.backgroundColor = "rgb(" + rood + ", " + groen + ", " + blauw + ")"
    opslagblok.classList.add("blok")
    allekleuren.append(opslagblok)
}

const verwijderditblok = (event) => {
    console.log("ENTERING: verwijderditblok")
    let allekleuren = document.getElementById("historiek")
    let alleblokken = document.querySelectorAll(".blok")
    let knopje = event.target
    let kleurblok = knopje.parentNode
    let index = 0

    console.log("LENGTH OF allekleuren: " + alleblokken.length);
    for (var i = 0; i < alleblokken.length; i++) {
        console.log("Checking element " + i + ": " + alleblokken[i]);
        console.log("kleurblok: " + kleurblok);
        console.log("Are they equal? " + (kleurblok === alleblokken[i]));
        if (kleurblok === alleblokken[i]) {
            index = i
            console.log("OVERLOPEN: " + i)
        }
    }

    if (index === -1 || index === null){
        console.log("WEERAL ONGELDIG")
    } else {
        console.log("INDEX: " + index)

        opslagArray.splice(index, 1)
        let keyJSON = JSON.stringify(opslagArray)
        localStorage.setItem("key", keyJSON)

        allekleuren.removeChild(kleurblok)
    }
}

const verandermainblokkleur = (rood, groen, blauw) => {
    console.log("ENTERING: verandermainblokkleur")
    let kleurblok = document.getElementById("mainblok")
    document.getElementById("sliderR").value = rood
    document.getElementById("sliderG").value = groen
    document.getElementById("sliderB").value = blauw
    kleurblok.style.backgroundColor = "rgb(" + rood + ", " + groen + ", " + blauw + ")"
}

const ROOD = () => {
    console.log("rood opgevraagd")
    return document.getElementById("sliderR").value
}

const GROEN = () => {
    console.log("groen opgevraagd")
    return document.getElementById("sliderG").value
}

const BLAUW = () => {
    console.log("blauw opgevraagd")
    return document.getElementById("sliderB").value
}

window.addEventListener("load", setup);