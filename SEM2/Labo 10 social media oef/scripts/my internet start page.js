let allesopgeslagen = []

let global = {
    prefix_google: "/g ",
    prefix_youtube: "/y ",
    prefix_twitter: "/t ",
    prefix_instagram: "/i "
}

const setup = () => {
    document.getElementById("commandoknop").addEventListener("click", commandochecken)
    allesladen()
}

const commandochecken = () => {
    const commandoinput = document.getElementById("commandoinput").value
    const zoekdit = commandoinput.substring(3).split(" ").join("+")

    let soort
    let onderwerp = commandoinput.substring(3)
    let link


    if(isprefixok(commandoinput)){
        if (commandoinput.substring(0, 3) === global.prefix_google){
            soort = "Google"
            link = "https://www.google.com/search?q=" + zoekdit
            window.open(link)
            createCard(maakkaartontwerp(soort, onderwerp, link))
        } else if (commandoinput.substring(0, 3) === global.prefix_youtube){
            soort = "Youtube"
            link = "https://www.youtube.com/results?search_query=" + zoekdit
            window.open(link)
            createCard(maakkaartontwerp(soort, onderwerp, link))
        } else if (commandoinput.substring(0, 3) === global.prefix_twitter){
            soort = "Twitter"
            link = "https://twitter.com/hashtag/" + zoekdit
            window.open(link)
            createCard(maakkaartontwerp(soort, onderwerp, link))
        } else if (commandoinput.substring(0, 3) === global.prefix_instagram){
            soort = "Instagram"
            link = "https://www.instagram.com/explore/tags/" + zoekdit + "/"
            window.open(link)
            createCard(maakkaartontwerp(soort, onderwerp, link))
        }

        let h = {
            title: soort,
            text: onderwerp,
            url: link
        }
        allesopgeslagen.push(h)
        let allesJSON = JSON.stringify(allesopgeslagen)
        localStorage.setItem("alles", allesJSON)
    }
}

const isprefixok = (commandoinput) => {
    if (commandoinput.substring(0, 1) === "/"){
        if (commandoinput.substring(0, 3) === global.prefix_google || commandoinput.substring(0, 3) === global.prefix_youtube || commandoinput.substring(0, 3) === global.prefix_twitter || commandoinput.substring(0, 3) === global.prefix_instagram){
            return true
        } else{
            window.alert("Unknown command prefix")
            return false
        }
    } else{
        window.alert("Invalid command")
        return false
    }
}

const createCard = (content) => {
    const container = document.querySelector(".container")
    const rows = container.querySelectorAll(".row")
    let laatsterij = container.querySelector(".row:last-child")

    if (!laatsterij) {
        laatsterij = document.createElement("div");
        laatsterij.classList.add("row", "row-cols-3");
        container.appendChild(laatsterij);
    }

    let col = document.createElement("div")
    col.classList.add("col")
    col.innerHTML += content
    laatsterij.appendChild(col)
}

const maakkaartontwerp = (soort, onderwerp, link) => {
    let textkleur = "#ffffff"
    let achtergrondkleur
    let knopkleur

    if (soort === "Google"){
        achtergrondkleur = "#4285f4"
        knopkleur = "#ea4335"
    } else if (soort === "Youtube"){
        achtergrondkleur = "#ff0000"
        knopkleur = "#282828"
    } else if (soort === "Twitter"){
        achtergrondkleur = "#1da1f2"
        knopkleur = "#14171a"
    } else{
        achtergrondkleur = "#c32aa3"
        knopkleur = "#f46f30"
    }

    return `<div class="card col-sm col-md col-lg" style="background-color: ${achtergrondkleur}"> <div class="card-body"> <h5 class="card-title" style="color: ${textkleur}">${soort}</h5> <p class="card-text" style="color: ${textkleur}">${onderwerp}</p> <a class="card-btn" href="${link}" style="color: ${textkleur}; background-color: ${knopkleur}; text-decoration: none; border-radius: 5px">GO!</a> </div> </div>`
}

const allesladen = () => {
    let opgeslagen = JSON.parse(localStorage.getItem("alles"))
    for (let i = 0; i < opgeslagen.length; i++){
        createCard(maakkaartontwerp(opgeslagen[i].title, opgeslagen[i].text, opgeslagen[i].url))
    }
}

window.addEventListener("load", setup);