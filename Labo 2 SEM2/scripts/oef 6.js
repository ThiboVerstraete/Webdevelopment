const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    let txtOutput = document.getElementById("txtOutput");

    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        let nieuweTekst = txtOutput.innerHTML= tekst;
    }

    btnKopieer.addEventListener("click", kopieer);
}
window.addEventListener("load", setup);