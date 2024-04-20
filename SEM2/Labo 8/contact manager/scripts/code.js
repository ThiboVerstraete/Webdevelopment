let personen=[];

const bewaarBewerktePersoon = () => {
    let vn = document.getElementById("txtVoornaam").value;
    let fn = document.getElementById("txtFamilienaam").value;
    let geboortedatum = document.getElementById("txtGeboorteDatum").value;
    let mail = document.getElementById("txtEmail").value;
    let kinderen = document.getElementById("txtAantalKinderen").value;

    valideer();

    bestaatal = false;
    const keuze = document.getElementById("lstPersonen").selectedIndex;
    if (keuze === -1){
        let fris = {
            voornaam: vn,
            familienaam: fn,
            geboorteDatum: geboortedatum,
            email: mail,
            aantalKinderen: kinderen
        }
        personen.push(fris);
    }
    else {
        personen[keuze].voornaam = vn;
        personen[keuze].familienaam = fn;
        personen[keuze].geboorteDatum = geboortedatum;
        personen[keuze].email = mail;
        personen[keuze].aantalKinderen = kinderen;
    }

    reset();
    update();
};

const reset = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
}

const update = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let nieuweOptie = document.createElement("option");
    const achterkant = personen.length-1;
    nieuweOptie.value = achterkant.toString();
    nieuweOptie.textContent = personen[achterkant].voornaam + " " + personen[achterkant].familienaam;
    lstPersonen.appendChild(nieuweOptie);
}

const kiesBestaandePersoon = () => {
    let keuze = document.getElementById("lstPersonen").selectedIndex;

    let geselecteerd = personen[keuze];
    document.getElementById("txtVoornaam").value = geselecteerd.voornaam;
    document.getElementById("txtFamilienaam").value = geselecteerd.familienaam;
    document.getElementById("txtGeboorteDatum").value = geselecteerd.geboorteDatum;
    document.getElementById("txtEmail").value = geselecteerd.email;
    document.getElementById("txtAantalKinderen").value = geselecteerd.aantalKinderen;
}

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", reset);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click", kiesBestaandePersoon);
};

window.addEventListener("load", setup);