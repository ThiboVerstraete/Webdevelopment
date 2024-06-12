const setup = () => {
    let input = document.getElementById("zin").textContent;
    let firstindex = 0;
    let lastindex= 0;
    let tellerfirst = 0;
    let tellerlast = 0;

    while (input.indexOf("An", firstindex) !== -1){
        firstindex = input.indexOf("An") + 1;
        tellerfirst++;
    }

    while (input.lastIndexOf("An", lastindex) !== -1){
        lastindex = input.lastIndexOf("An") + 1;
        tellerlast++;
    }

    let returnValue  = 'Fist index: ' + tellerfirst + ' ' + "Last index: " + tellerlast;

    console.log(returnValue);
    document.getElementById("An").innerHTML = returnValue;
}

window.addEventListener("load", setup);