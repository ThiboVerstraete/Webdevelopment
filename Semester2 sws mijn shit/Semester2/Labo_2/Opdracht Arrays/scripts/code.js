const setup = () => {
    const familieLeden = ['Ma', 'Pa', 'Zus', 'Broer', 'Opa', 'Oma'];
    console.log(familieLeden.length);
    console.log(familieLeden[0], familieLeden[2], familieLeden[4]);
    function VoegNaamToe(){
        familieLeden.push(prompt("Voeg een lid toe: "))
    }
    VoegNaamToe();
    console.log(familieLeden);
    let familieString = familieLeden.join(', ');
    console.log(familieString);
}
window.addEventListener("load", setup);