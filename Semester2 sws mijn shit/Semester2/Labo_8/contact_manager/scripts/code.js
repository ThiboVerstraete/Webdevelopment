let personen=[
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

let id = -1;

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    let lstPersonen = document.getElementById("lstPersonen");

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    let geboorte= document.getElementById("txtGeboorteDatum").value;
    console.log(geboorte);

    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: new Date(geboorte),
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    };
    if (id === -1){
        personen.push(persoon);
        id = personen.length-1;
        let option = document.createElement("option");
        option.innerText = persoon.voornaam + " " + persoon.familienaam;
        option.setAttribute("data-type", id);
        option.addEventListener("click", weergevenPersoon.bind(null, persoon, id));
        lstPersonen.appendChild(option);
    }
    else {
        personen[id] = persoon;
        console.log(lstPersonen.childNodes[id]);
        lstPersonen.children[id].innerText = personen[id].voornaam + " " + personen[id].familienaam;
        lstPersonen.children[id].removeEventListener("click", weergevenPersoon);
        lstPersonen.children[id].addEventListener("click", weergevenPersoon.bind(null, personen[id], id));
    }

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let voornaam = document.getElementById("txtVoornaam");
    voornaam.value = "";
    let familienaam = document.getElementById("txtFamilienaam");
    familienaam.value = "";
    let geboorte = document.getElementById("txtGeboorteDatum");
    geboorte.value = "";
    let email = document.getElementById("txtEmail");
    email.value = "";
    let aantalKinderen = document.getElementById("txtAantalKinderen");
    aantalKinderen.value = "";
    id = -1;
};

const weergevenPersoon = (persoon, i) =>{
    let voornaam = document.getElementById("txtVoornaam");
    voornaam.value = persoon.voornaam;
    let familienaam = document.getElementById("txtFamilienaam");
    familienaam.value = persoon.familienaam;
    let geboorte = document.getElementById("txtGeboorteDatum");
    geboorte.value = persoon.geboorteDatum.toISOString().split('T')[0]
    let email = document.getElementById("txtEmail");
    email.value = persoon.email;
    let aantalKinderen = document.getElementById("txtAantalKinderen");
    aantalKinderen.value = persoon.aantalKinderen;
    id = i;
}



// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier

    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.innerText = personen[i].voornaam + " " + personen[i].familienaam;
        option.setAttribute("data-type", i);
        option.addEventListener("click", weergevenPersoon.bind(null, personen[i], i));
        lstPersonen.appendChild(option);
    }
};

window.addEventListener("load", setup);