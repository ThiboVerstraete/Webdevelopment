let familieleden = ['Bob', 'Danny', 'Magda', 'Toby', 'Klaar'];
console.log(familieleden.length);
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

const VoegNaamToe =(naam) =>{
    familieleden.push(naam);
}

let extraNaam = prompt("Geef een naam in: ", "Onbekend");
VoegNaamToe(extraNaam);
console.log(familieleden);

console.log(familieleden.join());