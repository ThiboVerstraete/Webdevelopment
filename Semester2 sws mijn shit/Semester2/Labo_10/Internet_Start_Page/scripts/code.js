let savedHistory = [];

const setup = () => {
    let btnGo = document.getElementById("btnZoek");
    btnGo.addEventListener("click", controle);
    laadStorage();
}

const controle = () => {
    let commando = document.getElementById("txtZoek").value.substring(0,2).toLowerCase();
    if (commando === "/t"){
        maakTwitter();
    }
    else if (commando === "/g"){
        maakGoogle();
    }
    else if (commando === "/i"){
        maakInstagram();
    }
    else if (commando === "/y"){
        maakYoutube();
    }
    else if (commando.substring(0,1) !== "/"){
        window.alert("Invalid command");
    }
    else {
        window.alert("Unknown command prefix");
    }
}

const maakTwitter = () =>{
    let site = "https://twitter.com/hashtag/";
    let zoek = document.getElementById("txtZoek").value.substring(2).trimStart();
    let link = site+zoek;
    console.log(zoek);
    window.open(link);
    maakCard(link, zoek, "t");
}

const maakGoogle = () =>{
    let site = "https://www.google.com/search?q=";
    let zoek = document.getElementById("txtZoek").value.substring(2).trimStart();
    let link = site+zoek;
    window.open(link);
    maakCard(link, zoek, "g");
}

const maakInstagram = () =>{
    let site = "https://www.instagram.com/explore/tags/";
    let zoek = document.getElementById("txtZoek").value.substring(2).trimStart();
    let link = (site+zoek).replaceAll(" ", "");
    window.open(link);
    maakCard(link, zoek, "i");
}

const maakYoutube = () =>{
    let site = "https://www.youtube.com/results?search_query=";
    let zoek = document.getElementById("txtZoek").value.substring(2).trimStart();
    let link = site+zoek;
    window.open(link);
    maakCard(link, zoek, "y");
}

const maakCard = (link, zoek, commando) =>{
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-sm-12");
    card.classList.add("col-md-6");
    card.classList.add("col-lg-4");
    card.classList.add("p-3");

    let history = document.getElementById("history");

    let title = document.createElement("h3");
    title.classList.add("card-title");
    let text = document.createElement("p");
    text.innerText = zoek;
    text.classList.add("card-text");
    let urlLink = document.createElement("a");
    urlLink.href = link;
    urlLink.innerText = "Go!";
    urlLink.classList.add("btn");
    urlLink.classList.add("w-25");

    if (commando === "t"){
        title.innerText = "Twitter";
        card.classList.add("twitter");
        urlLink.classList.add("btn-dark")
    }
    else if (commando === "g"){
        title.innerText = "Google";
        card.classList.add("google");
        urlLink.classList.add("btn-primary");
    }
    else if (commando === "i"){
        title.innerText = "Instagram";
        card.classList.add("instagram");
        urlLink.classList.add("btn-danger");
    }
    else if (commando === "y"){
        title.innerText = "Youtube";
        card.classList.add("youtube");
        urlLink.classList.add("btn-dark");
    }

    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(urlLink);

    history.appendChild(card);

    let h = {
        title : title.innerText,
        text: zoek,
        url: link
    };
    savedHistory.push(h);
    let historyJSON = JSON.stringify(savedHistory);
    localStorage.setItem("history", historyJSON);
}

const laadStorage = () =>{
    let savedCards = JSON.parse(localStorage.getItem("history"));
    for (let i = 0; i < savedCards.length; i++) {
        let commando = "";
        if (savedCards[i].title === "Twitter"){
            commando = "t";
        }
        else if (savedCards[i].title === "Google"){
            commando = "g";
        }
        else if (savedCards[i].title === "Instagram"){
            commando = "i";
        }
        else if (savedCards[i].title === "Youtube"){
            commando = "y";
        }

        maakCard(savedCards[i].url, savedCards[i].text, commando);
    }
}

window.addEventListener("load", setup);