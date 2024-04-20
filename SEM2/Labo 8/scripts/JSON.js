const setup = () => {
    let student={
        voornaam : "Thibo",
        familienaam : "Vertstraete",
        geboorteDatum : new Date("2005-12-24"),
        adres : {
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        namenVanExen : [""]
    }

    console.log(student);
}

window.addEventListener("load", setup);