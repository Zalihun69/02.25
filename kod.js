function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function szamol(index) {
  
    let ar = document.getElementById("ar_" + index).innerText;
    let darab = document.getElementById("db_" + index).value;
    
 
    if (darab == "" || darab < 0) {
        darab = 0;
    }

    let reszosszeg = parseInt(ar) * parseInt(darab);
    document.getElementById("resz_" + index).innerText = reszosszeg;

  
    let osszesen = 0;
    for (let i = 0; i < 5; i++) {
        let aktualisResz = document.getElementById("resz_" + i).innerText;
        osszesen += parseInt(aktualisResz);
    }

  
    document.getElementById("vegosszeg").innerText = osszesen;
}