function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function szamol(index) {
    // Adott sor kiszámítása
    let ar = document.getElementById("ar_" + index).innerText;
    let darab = document.getElementById("db_" + index).value;
    
    // Ha üres vagy érvénytelen a bemenet, legyen 0
    if (darab == "" || darab < 0) {
        darab = 0;
    }

    let reszosszeg = parseInt(ar) * parseInt(darab);
    document.getElementById("resz_" + index).innerText = reszosszeg;

    // Teljes végösszeg újraszámolása (összesen 5 termék van: 0-tól 4-ig)
    let osszesen = 0;
    for (let i = 0; i < 5; i++) {
        let aktualisResz = document.getElementById("resz_" + i).innerText;
        osszesen += parseInt(aktualisResz);
    }

    // Kosár frissítése
    document.getElementById("vegosszeg").innerText = osszesen;
}