const setup = () => {
    let output = document.getElementById("output");

    const geboortedatum = new Date(2005, 12, 24);
    let huidigedatum = new Date();

    let verschil = huidigedatum - geboortedatum;

    let verschilSeconden = verschil / 1000;
    let verschilMinuten = verschilSeconden / 60;
    let verschilUren = verschilMinuten / 60;
    let verschilDagen = verschilUren / 24;

    output.innerHTML = "Dagen sinds geboorte " + Math.round(verschilDagen);
}

window.addEventListener("load", setup);