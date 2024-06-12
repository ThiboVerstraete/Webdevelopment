const setup = () => {
    let zin = "Man van An geeft geen hand aan ambetante verwanten";
    let zoek = "an";
    let aantal = 0;
    let an = zin.indexOf(zoek);
    //let an = zin.lastIndexOf(zoek);

    while (an !== -1){
        aantal++;
        an = zin.indexOf(zoek, an +1);

    }

    /*while (an !== -1){
        aantal++;
        an = zin.lastIndexOf(zoek, an -1);
        console.log(an);
    }*/
    console.log(aantal);
}
window.addEventListener("load", setup);