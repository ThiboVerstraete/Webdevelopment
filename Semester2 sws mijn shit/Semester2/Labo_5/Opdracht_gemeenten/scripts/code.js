const setup = () => {
    let ingave = "";
    let array = [];
    while (ingave.toLowerCase() !== "stop"){
        ingave = prompt("Gemeente:\n \"stop\" om te stoppen.", "Gemeente");
        array.push(ingave);
    }
    array.pop();
    array = array.sort();

    let select = document.getElementById("lijst");
    for (let i = 0; i < array.length; i++) {
        select.innerHTML +="<option value=\"\">" + array[i] + "</option>";
    }

}
window.addEventListener("load", setup);