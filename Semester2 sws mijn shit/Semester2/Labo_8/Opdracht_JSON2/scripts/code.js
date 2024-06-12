const setup = () => {
    let tekst = '{"voornaam":"Alexander","achternaam":"Heinderson","geboortedatum":"2004-02-28T23:00:00.000Z","adres":{"straat":"Eenstraat","postcode":"8820","gemeente":"Torhout"},"isIngeschreven":true,"namenVanHuisdieren":["Kyara","Pluisje","Flippy","Josh"],"aantalAutos":15}';
    let student = JSON.parse(tekst);
    console.log(student.geboortedatum);
}
window.addEventListener("load", setup);