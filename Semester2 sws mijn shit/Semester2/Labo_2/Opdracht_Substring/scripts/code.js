const setup = () => {



    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);

}

const substring = () => {
    let txtInput = document.getElementById("txtInputTekst");
    let inputGet1 = document.getElementById("inputGet1");
    let inputGet2 = document.getElementById("inputGet2");
    let txtOutput = document.getElementById("txtOutput");
    console.log(inputGet1.value);
    let output = txtInput.value;
    let getal1 = inputGet1.value;
    let getal2 = inputGet2.value;
    txtOutput.innerHTML = output.substring(getal1, getal2);
}
window.addEventListener("load", setup);