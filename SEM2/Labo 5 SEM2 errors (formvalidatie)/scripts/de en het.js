const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";

     let woorden = tekst.split(" ");

     for (let i = 0; i < woorden.length; i++){
         if (woorden[i] === "de"){
             woorden[i] = "het";
         }
     }

     tekstreturn = woorden.join(" ")

    console.log(tekstreturn);
}

window.addEventListener("load", setup);