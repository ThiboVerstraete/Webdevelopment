const setup = () => {

}

const maakMetSpaties = (inputtext) => {

    let output = "";

    for (let i = 0; i < inputtext.length; i++){
        if (inputtext.charAt(i) !== " "){
            output += inputtext.charAt(i) + " ";
        }
    }
    console.log(output)
    document.getElementById("output").innerHTML = output;
}

window.addEventListener("Load", setup);

let knop = document.getElementById("splits");
knop.addEventListener("click", function (){
    let tekst = document.getElementById("input").value;
    maakMetSpaties(tekst);
})