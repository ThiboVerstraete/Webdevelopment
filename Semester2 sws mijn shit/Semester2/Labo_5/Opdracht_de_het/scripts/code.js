const setup = () => {
    let string = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let output = "";
    for (let i = 0; i < string.length; i++) {
        let check = string.slice(i, i+3);
        if (check === " de"){
            let dubbelCheck = string.slice(i+1, i+4);
            if (dubbelCheck === "de "){
                output += " het";
                i+=2;
            }
            else {
                output += string.slice(i, i+1);
            }
        }
        else if (check === " De"){
            let dubbelCheck = string.slice(i+1, i+4);
            if (dubbelCheck === "De "){
                output += " Het";
                i+=2;
            }
            else {
                output += string.slice(i, i+1);
            }
        }
        else if (i === 0 && check === "De "){
            output += "Het "
            i+=2;
        }
        else {
            output += string.slice(i, i+1);
        }

    }
    console.log(output);
}
window.addEventListener("load", setup);