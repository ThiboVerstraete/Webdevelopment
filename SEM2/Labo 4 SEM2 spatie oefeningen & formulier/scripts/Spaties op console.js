const setup = () => {
}
const split = () => {
    let text = document.getElementById("input").value;
    let output = "";

    for (let i = 0; i < text.length; i++){
        if (text.charAt(i) !== " "){
            output += text.charAt(i) + " ";
        }
    }
    console.log(output)
    document.getElementById("output").innerHTML = output;
}

window.addEventListener("load", setup);

let splits = document.getElementById("splits");
splits.addEventListener("click", split);