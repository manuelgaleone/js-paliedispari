/*

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
- Dichiariamo chi ha vinto.

*/

//Scelgo il Numero del Pc
let numeroPerPc = numeroPc(1,5);
console.log("La scelta del Pc è: " + numeroPerPc);

//Genero il Numero per il Pc
function numeroPc(min, max) {

    return Math.floor(Math.random() * (max - min) ) + min;

};


//L'utente sceglie un Numero e Pari o Dispari
let numeroUtente = Number(prompt("Scegli un numero da 1 a 5: "));
console.log("La scelta dell'Utente è: " + numeroUtente);
let pariDispariUtente = prompt("Scegli se pari o dispari: ");
console.log("La scelta dell'Utente è: " + pariDispariUtente);

//Nel caso in cui l'utente fosse un simpaticone
while (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {

    alert("Il numero dev'essere da 1 a 5!");
    numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5: "));
    console.log("La scelta corretta dell'Utente è: " + numeroUtente);

};

while (pariDispariUtente !== "pari" && pariDispariUtente !== "dispari") {

    alert("Devi scegliere tra pari o dispari!");
    pariDispariUtente = prompt('Scegli se pari o dispari: ');
    console.log("La scelta corretta dell'Utente è: " + pariDispariUtente);

};


//Calcolo la Somma
let sommaUtentePc = sommaNumeri();
console.log("La somma tra i due è: " + sommaUtentePc);

function sommaNumeri(num) {

    let somma = numeroPerPc + numeroUtente;
    return somma;
};


//Definisco se è Pari o Dispari




/*

//Sommo i Numeri 
function sommaNumeri(numeroUtente, numeroDelPc) {

    let somma = numeroUtente + numeroDelPc;
    return somma;

};

//Vedo se la somma è pari o dispari
if (somma % 2 == 0) {

    alert("La somma è Pari, ha vinto il pari!");

} else {

    alert("La somma è dispari, ha vinto il dispari!");

};

*/