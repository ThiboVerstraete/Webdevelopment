let familienamen = ["naam 1","naam 2","naam 3","naam 4","naam 5"]

console.log(familienamen.length);

console.log(0);
console.log(2);
console.log(4);

voegNaamToe(prompt('Geef naam'));
function voegNaamToe(text){
    familienamen.push(text);
}

console.log(familienamen);