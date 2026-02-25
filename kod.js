function nagyitKep(melyikKep) {
    // Kicseréli a nagy kép forrását a kiválasztottra
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    // Visszaállítja az alapértelmezett "kérdőjeles" képet
    document.getElementById("nagykep").src = "ures.jpg";
}

function kivalaszt(melyikTermek) {
    // Bekéri a darabszámot egy felugró ablakban
    let darab = prompt("Hány darabot szeretne?", "1");
    
    if (darab != null && darab != "" && !isNaN(darab)) {
        // Létrehozunk egy új listaelem-et a kosárhoz
        let ujElem = document.createElement("li");
        ujElem.textContent = darab + " db x " + melyikTermek;
        
        // Hozzáadjuk a kosár div-ben lévő listához (ha van) vagy csak a div-hez
        document.getElementById("kosar").appendChild(ujElem);
    }
}