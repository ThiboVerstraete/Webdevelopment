const setup = () => {
    let student ={
        voornaam: "Alexander",
        achternaam: "Heinderson",
        geboortedatum: new Date(2004, 1, 29),
        adres: {
            straat: "Eenstraat",
            postcode: "8820",
            gemeente: "Torhout"
        },
        isIngeschreven: true,
        namenVanHuisdieren: ["Kyara", "Pluisje", "Flippy", "Josh"],
        aantalAutos: 15
    };

    let tekst = JSON.stringify(student);
    //let tekst = JSON.stringify([student, student, student]);
    console.log(tekst);
}
window.addEventListener("load", setup);